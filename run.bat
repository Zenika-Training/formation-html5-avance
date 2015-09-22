@echo off
rem Make sure your folder is inside C:\Users\username
setlocal EnableDelayedExpansion

rem Compute Docker volume semantic 
set "WD=%~dp0"
set HDD_LETTER_UPPER=!WD:~0,1!
call :LCase HDD_LETTER_UPPER HDD_LETTER
set WD_DOCKER=!WD:~2!
set WD_DOCKER=//!HDD_LETTER!%WD_DOCKER:\=/%
rem Volumes: folders shared between hosts and docker containers
set VOLUME_SLIDES="%WD_DOCKER%Slides:/data/Slides/"
set VOLUME_CAHIEREXERCICES="%WD_DOCKER%CahierExercices:/data/CahierExercices"
set VOLUME_GRUNTFILE="%WD_DOCKER%Gruntfile.js:/data/Gruntfile.js"
set VOLUME_PACKAGE="%WD_DOCKER%package.json:/data/package.json"
set VOLUME_PDF_GENERATE="%WD_DOCKER%PDF:/data/PDF"
set VOLUME_PDF_PUBLISH="%WD_DOCKER%PDF:/data/node_modules/zenika-formation-framework/pdf"
rem Docker image related informations
set DOCKER_IMAGE_NAME="zenika/formation-framework"
set DOCKER_IMAGE_VERSION="latest"

rem Main
if [%1]==[] (
    goto :usage
)

goto :checkInstall

:usage
echo "Usage: %~nx0 pdf|dev|prod|clean"
goto :eof

:checkInstall
WHERE /q docker || (echo "docker must be installed" && goto :eof)
goto :checkParam

:checkParam
if [%1] == [pdf] (
	goto :generatePdf
)
if [%1] == [dev] (
	goto :runDev
)
if [%1] == [prod] (
	goto :runProd
)
if [%1] == [clean] (
	goto :clean
)
rem Invalid parameter
goto :usage

:generatePdf
docker run -it --rm ^
	-v %VOLUME_GRUNTFILE% -v %VOLUME_SLIDES% -v %VOLUME_PACKAGE% ^
	-v %VOLUME_CAHIEREXERCICES% -v %VOLUME_PDF_GENERATE% ^
	%DOCKER_IMAGE_NAME%:%DOCKER_IMAGE_VERSION% ^
	grunt pdf
goto :eof

:runDev
for %%a in (.) do set containerName=%%~na
docker run -d -P ^
	-v %VOLUME_GRUNTFILE% -v %VOLUME_SLIDES% -v %VOLUME_PACKAGE% ^
	-v %VOLUME_CAHIEREXERCICES% -v %VOLUME_PDF_PUBLISH% ^
	--name="%containerName%" ^
	%DOCKER_IMAGE_NAME%:%DOCKER_IMAGE_VERSION% ^
	grunt displaySlides
call :getDockerAddress dockerAddress
call :getDockerPort dockerPort
start "" http://%dockerAddress%:%dockerPort%
goto :eof

:runProd
for %%a in (.) do set containerName=%%~na
docker run -d -P ^
	-v %VOLUME_GRUNTFILE% -v %VOLUME_SLIDES% -v %VOLUME_PACKAGE% ^
	-v %VOLUME_CAHIEREXERCICES% -v %VOLUME_PDF_PUBLISH% ^
	--name="%containerName%" ^
	%DOCKER_IMAGE_NAME%:%DOCKER_IMAGE_VERSION% ^
	grunt sed copy:rename displaySlides
call :getDockerAddress dockerAddress
call :getDockerPort dockerPort
start "" http://%dockerAddress%:%dockerPort%
goto :eof

:clean
for %%a in (.) do set containerName=%%~na
docker stop "%containerName%" > NUL
docker rm "%containerName%" > NUL
goto :eof

:LCase
set _UCase=A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
set _LCase=a b c d e f g h i j k l m n o p q r s t u v w x y z
set _Lib_UCase_Tmp=!%1!
if /I "%0"==":LCase" set _Abet=%_LCase%
for %%Z in (%_Abet%) do set _Lib_UCase_Tmp=!_Lib_UCase_Tmp:%%Z=%%Z!
set %2=%_Lib_UCase_Tmp%
goto :eof

:getDockerAddress
for /f %%i in ('docker-machine ip default') do set %1=%%i
rem Space in the result means ERROR
if not "%dockerAddress%"=="%dockerAddress: =%" (
	set %1=localhost
)
goto :eof

:getDockerPort
for /f "tokens=1* delims=." %%a in ('docker ps -l ^| findstr /r "[0-9]*->8000"') do (
  set part1=%%a
  set part2=%%b
)
set port=!part2:~6!
for /f "tokens=1 delims=-" %%a in ("!port!") do (
	set %1=%%a
)
goto :eof