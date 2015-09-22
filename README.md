Détails du modèle dans le [wiki](https://github.com/Zenika/Formation--Modele/wiki)

Documentation du [framework](https://github.com/Zenika/Formation--Framework)


## Supports PDF et Live

Les supports peuvent être obtenus à ces adresses :

Version release : https://zen-formation-html5-avance.appspot.com/ [![Circle CI](https://circleci.com/gh/Zenika/formation-html5-avance/tree/release.svg?style=svg&circle-token=2db9d589c3e04a16ec90df263f003eec7cf11eed)](https://circleci.com/gh/Zenika/formation-html5-avance/tree/release)

Version courante : https://master-dot-zen-formation-html5-avance.appspot.com/ [![Circle CI](https://circleci.com/gh/Zenika/formation-html5-avance/tree/master.svg?style=svg&circle-token=2db9d589c3e04a16ec90df263f003eec7cf11eed)](https://circleci.com/gh/Zenika/formation-html5-avance/tree/master)

# Organisation

- Slides
- CahierExercices
- Exercices
- Installation
- SessionsNotes
- PLAN.md doit contenir le plan de formation qui est affiché sur notre site web

*Note : Chaque répertoire contient un README précisant son usage*

# Installation

Pour générer et afficher la formation, il est nécessaire d'avoir `node` et `npm` d'installé (voir [node.js](http://nodejs.org/)).

Exécuter la commande suivante :
`npm install`

## Utilisation avec Docker

Pour ceux qui veulent se passer de l'installation de `node` et `npm`, et qui ont `docker`, il suffit de lancer une des commandes suivantes : <br>

### Linux

    ./run.sh dev   # pour afficher les slides
    ./run.sh prod  # pour afficher la page de garde
    ./run.sh pdf   # pour générer les `.pdf` des slides
    ./run.sh clean # pour terminer le conteneur Docker

### Windows

    ./run.bat dev   # pour afficher les slides
    ./run.bat prod  # pour afficher la page de garde
    ./run.bat pdf   # pour générer les `.pdf` des slides
    ./run.bat clean # pour terminer le conteneur Docker

## Utilisation avec dformation

Un script nommé dformation est présent à la racine. Il permet de simplifier l'utilisation des formations avec docker.

Pour lancer faire une installation : `./dformation -i`
Pour lancer le serveur (et faire une installation dans le cas où celle-ci n'est pas faite) :
`./dformation -r`

Pour plus d'information sur dformation : `./dformation`

# Intégration Continue

Chaque formation dispose d'une version web (disponible uniquement via un compte @zenika.com). Le mini-site de la formation contient les slides live, les slides PDF, le cahier d'exercice PDF, un lien vers le github de la formation ainsi qu'un lien vers le catalogue de formation.

Ainsi il est important de bien remplir le fichier `package.json` avec

- name : nom technique de la formation (sans espace)
- description : le nom de la formation de la forme "Formation XXX"
- homepage : le lien vers la page du catalogue correspondante (e.g. http://www.zenika.com/formation-angularjs.html)
- repository.url : l'URL vers ce repository
- config.deploy.name : l'id de l'instance AppEngine (faire une demande à dsi@zenika.com)

## Utilisation des branches

2 branches sont automatiquement déployées sur AppEngine:

- master : il s'agit de la branche contenant les développements courants. Elle est déployée sur https://master-dot-{id AppEngine}.appspot.com
- release : branche contenant la dernière version stable, utilisée en session de formation. Elle est déployée sur https://{id AppEngine}.appspot.com

## Serveur d'IC

Le build et le déploiement sont réalisés par [CircleCI](https://circleci.com). À ce titre, un fichier `circle.yml` est présent à la racine de ce projet. Il n'y a à priori, aucune raison d'éditer ce fichier.
