# Introduction

<!-- .slide: class="page-title" -->



## Plan

<!-- .slide: class="toc" -->

- **[Introduction](#/1)**
- [JavaScript](#/2)
- [AJAX](#/3)
- [Web Messaging](#/4)
- [Server Sent Events](#/5)
- [WebSocket](#/6)
- [Web RTC](#/7)
- [Web Workers](#/8)
- [Conclusion](#/9)

Notes :




## HTML5 c'est ...

- De nouvelles balises
	- Des éléments de structure
	- Une meilleure sémantique
	- Formulaires plus intelligent

- Des APIs javascript
    - Drag'n'drop
    - Géolocalisation
    - Stockage client
    - Navigation hors-ligne
    - Canvas
    - Contenu audio et video

- Du CSS3
	- Animations, ombres, arrondis, transitions, ...

Notes :




## Mais aussi ...

- Les APIs « avancées »
	- XMLHttpRequest 2
	- Communication
		- Web messaging
		- Websockets
		- Server sent events
		- WebRTC

	- Scripts asynchrones ou les web workers

Notes :




## XMLHttpRequest 2

- Requêtes cross-origin
- Transfert de fichiers
- Monitoring
- Progress events
- ...

![](ressources/images/01_introduction-10000000000000F60000020B1D0545D2.png)

Notes :




## Web messaging

- Envoi de messages entre fenêtres, onglets et de contenu de différentes origines
- Ouverture d'un canal de communication
http://www.codeproject.com/Articles/248264/HTML5-WebMessaging-Experiment

![](ressources/images/01_introduction-10000000000002370000017D9C7AD454.png)

Notes :




## Server sent events

- « push » de données depuis le serveur
	- Basé sur des techniques différentes selon l'implémentation serveur (polling, long polling...)
	- Notifications temps-réel, streaming, twitter wall, news...

www.kaazing.me

![](ressources/images/01_introduction-1000000000000115000000DAEDDF2589.png)

![](ressources/images/01_introduction-10000000000001F200000122E5B4C90A.png)

Notes :




## WebSocket

- Protocole et API de communication temps-réel
	- Applications collaboratives ou type « réseaux sociaux », cours boursiers, ...

www.kaazing.me http://mrdoob.com/projects/multiuserpad/

![](ressources/images/01_introduction-10000000000000E1000000BBBBE56D09.png)

![](ressources/images/01_introduction-10000000000000C8000000AC0A46AD3F.png)

Notes :




## WebRTC

- API de communication temps-réel, peer to peer
	- Echange de flux audio, vidéo et données entre peers, sans intermédiaire, inter-navigateur

![](ressources/images/01_introduction-1000000000000190000000E1BC4FFAF0.png)

Notes :




## Web workers

- Exécution de scripts en arrière plan (sans bloquer la page)
	- Calculs complexes, manipulation de contenu multimédia

http://www.html5rocks.com

![](ressources/images/01_introduction-100000000000034A000000E722C82AA9.png)

Notes :




## Ressources

- Lire les spécifications :
	- W3C : http://www.w3.org/TR/

- Chercher le support :
	- www.caniuse.com
	- www.html5test.com

Notes :




<!-- .slide: class="page-questions" -->



<!-- .slide: class="page-tp1" -->