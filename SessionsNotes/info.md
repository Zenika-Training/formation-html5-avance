 # FAQ

 - Worker
    - Comment fonctionnent les SharedWorker?
    >> A chaque fois qu'on utilise son constructeur, new SharedWorker('monScript.js')
    Le navigateur se charge de vérifier s'il n'existe pas déjà une SharedWorker utilisant ce script
    Si oui, il l'utilise

 # Problèmes connus

 - Ajax
    - Firefox: event upload.onprogress non déclenché si fichier en upload trop petit
    - Opera: Pas d'objet window.URL :(

 # Pièges TP

 - Ajax
    - Attention à la clé utilisée pour ajouter le fichier au formdata. Selon la description du serveur, on attend un 'avatar'.
    (Donc formdata.append('avatar', sthg))
 - Websocket
    - Le tableau côté serveur commence à l'indice 0, mais les id des conférences commence à 1
