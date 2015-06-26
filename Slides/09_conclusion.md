# Conclusion

<!-- .slide: class="page-title" -->



## Plan

<!-- .slide: class="toc" -->

- [Introduction](#/1)
- [JavaScript](#/2)
- [AJAX](#/3)
- [Web Messaging](#/4)
- [Server Sent Events](#/5)
- [WebSocket](#/6)
- [Web RTC](#/7)
- [Web Workers](#/8)
- **[Conclusion](#/9)**

Notes :



## Résumé

- Communication Client > Serveur
	- AJAX

- Communication Serveur > Client
	- Server Sent Events

- Communication bidirectionnelle Serveur <> Client
	- WebSockets

- Communication Client > Client
	- Cross Document Messaging

- Communication bidirectionnelle Client <> Client
	- Channel Messaging

Notes :



## Sécurité - rappels

- Toujours vérifier l'origine de la communication

- Ne pas utiliser les données transmises directement dans des fonctions sensibles (ex : requêtes SQL)

- Les Spécification ne sont pas finalisées, certaines au stade de draft, d'autres en recommandation
	- Penser à vérifier l'évolution des spécifications et des implémentations

Notes :



## Pour aller plus loin

Les autres APIs

- Les APIs non abordées
	- WebIntent : permet de déclarer des intentions. Par exemple, un utilisateur peut vouloir partager une image : le navigateur propose alors divers services pour le faire
	- Web Notification
	- Manipulation d'images vectorielles SVG
	- History API
	- Battery status API
	- Media Capture API
	- …

- http://www.w3.org/TR/

Notes :



## Pour aller plus loin

Les frameworks

- Frameworks intéressants
	- Pour la création d'application
		- Angular.js de Google
		- Ember.js
		- Backbonejs
		- Knockout.js

	- Pour la création d'applications mobiles
		- jQuery mobile
		- Sencha
		- Phonegap

	- Pour la manipulation du DOM
		- jQuery

	- Pour la génération de graphiques
		- D3.js
		- Processing

Notes :



<!-- .slide: class="page-questions" -->
