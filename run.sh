#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# Volumes: folders shared between hosts and docker containers
export VOLUME_SLIDES="$PWD/Slides/:/data/Slides/"
export VOLUME_CAHIEREXERCICES="$PWD/CahierExercices:/data/CahierExercices"
export VOLUME_GRUNTFILE="$PWD/Gruntfile.js:/data/Gruntfile.js"
export VOLUME_PACKAGE="$PWD/package.json:/data/package.json"
export VOLUME_PDF_GENERATE="$PWD/PDF:/data/PDF"
export VOLUME_PDF_PUBLISH="$PWD/PDF:/data/node_modules/zenika-formation-framework/pdf"
# Docker image related informations
export DOCKER_IMAGE_NAME="zenika/formation-framework"
export DOCKER_IMAGE_VERSION="latest"

usage(){
  echo "Usage: `basename $0` pdf|dev|prod|clean"
}

checkInstall(){
  commandExists docker || { echo "docker must be installed" >&2; exit 1; } 
}

commandExists(){
  command -v "$1" 1>/dev/null 2>&1 \
      && return 0 || return 1
}

open-url() {
    if commandExists open; then
        open $@
    elif commandExists xdg-open; then
        xdg-open $@ &
    else
        echo "Open $@"
    fi
}

getDockerAddress(){
  if commandExists boot2docker; then
     echo `boot2docker ip`
  else
     echo localhost
  fi 
}

generatePdf(){
  docker run -it --rm \
       -v "$VOLUME_GRUNTFILE" -v "$VOLUME_SLIDES" -v "$VOLUME_PACKAGE" \
       -v "$VOLUME_CAHIEREXERCICES" -v "$VOLUME_PDF_GENERATE" \
      "$DOCKER_IMAGE_NAME":"$DOCKER_IMAGE_VERSION" \
      grunt pdf
}

runProd(){
  local containerName=${PWD##*/}
  docker run -d -P \
       -v "$VOLUME_GRUNTFILE" -v "$VOLUME_SLIDES" -v "$VOLUME_PACKAGE" \
       -v "$VOLUME_CAHIEREXERCICES" -v "$VOLUME_PDF_PUBLISH" \
       --name="$containerName" \
      "$DOCKER_IMAGE_NAME":"$DOCKER_IMAGE_VERSION" \
      grunt sed copy:rename displaySlides

  local dockerPort=`docker ps -l | sed -e '2 !d' -e 's/.*:\([0-9]*\)->8000.*/\1/'`
  local dockerAddress=$(getDockerAddress)
  open-url http://$dockerAddress:$dockerPort/
}

runDev(){
  local containerName=${PWD##*/}
  docker run -d -P \
       -v "$VOLUME_GRUNTFILE" -v "$VOLUME_SLIDES" -v "$VOLUME_PACKAGE" \
       -v "$VOLUME_CAHIEREXERCICES" -v "$VOLUME_PDF_PUBLISH" \
       --name="$containerName" \
      "$DOCKER_IMAGE_NAME":"$DOCKER_IMAGE_VERSION" \
      grunt displaySlides

  local dockerPort=`docker ps -l | sed -e '2 !d' -e 's/.*:\([0-9]*\)->8000.*/\1/'`
  local dockerAddress=$(getDockerAddress)
  open-url http://$dockerAddress:$dockerPort/
}

clean(){
 local containerName=${PWD##*/}
 docker stop "$containerName" | xargs docker rm
}

if [ "$#" -ne 1 ]; then
    usage 
    exit 1
fi

checkInstall

case "$1" in
    pdf)
      generatePdf    
      ;;
    dev)
      runDev
      ;;
    prod)
      runProd
      ;;
    clean)
      clean
      ;;
    *)
      usage # unknown option
      ;;
esac

