var express = require('express');
var serv = express();

serv.configure(function() {
        serv.use(express.static('../'));
});

serv.get('/blog', function(req, res){
    res.set('Content-Type', 'application/json; charset=utf-8');
    sleep(3000);
    res.send(JSON.stringify(blog));
});

serv.get('/experts', function(req, res){
    res.set('Content-Type', 'application/json; charset=utf-8');
    sleep(3000);
    res.send(JSON.stringify(experts));
});

serv.get('/trainings', function(req, res){
    res.set('Content-Type', 'application/json; charset=utf-8');
    sleep(3000);
    res.send(JSON.stringify(trainings));
});

serv.listen(8081);

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

var blog=[
        {
            titre: "La What's Next débarque sur mobile",
            auteur: "Souad Hadjiat",
            date: "10/05/2011",
            article: "Disponible sur le site <a href=\"http://www.whatsnextparis.com/mobile/\">http://www.whatsnextparis.com/mobile/</a>, l'application permet d'accéder à toutes les informations sur l'évènement: le planning, les conférences, les speakers, les derniers tweets ainsi que les informations pratiques."+
                    "l'application permet d'accéder à toutes les informations sur l'évènement: le planning, les conférences, les speakers, les derniers tweets ainsi que les informations pratiques.<br/>"+
                    "Elle est accessible depuis votre navigateur mobile et est compatible avec <strong>Apple iOs</strong>, <strong>Android</strong>, et le dernier <strong>BlackBerry6</strong>. Vous pouvez également la visualiser sur tout navigateur webkit (Chrome, Safari).<br/>"+
                    "<strong>petite astuce :</strong> pour les utilisateur iphone, l'application peut être ajoutée sur l'écran d'accueil pour un affichage en plein écran et un lancement rapide.<br/>"+
                    "Le code source de l'application est disponible sur le <a href=\"https://github.com/Zenika/Blogs\">github de Zenika</a>."
        },
        {
            titre: "What's Next, What's that?",
            auteur: "Pierre Queinnec",
            date: "25/01/2011",
            article: "Dans ce billet, je reviens sur les raisons d'avoir créé la <a href=\"http://www.whatsnextparis.com\">What's Next</a>, sur le processus de sélection des speakers, et enfin je vais essayer de brosser un portrait rapide des différents intervenants qui nous font l'honneur de venir.<br/>"+
                    "En créant la What's Next, nous avons voulu tout d'abord créer un événement centré sur l'écosystème Java/JVM de grande taille en France. Un événement ouvert à tous, développeurs, architectes, experts. Que chacun puisse revenir avec de nouvelles idées, de nouvelles façons de résoudre les problèmes qui nous sont quotidiennement posés. Un événement où les speakers seraient tous des spécialistes reconnus de leur domaine. Reconnus à raison, pour leur contribution intellectuelle abstraite mais aussi pour sa matérialisation en terme de code. Des spécialistes qui viendraient du monde entier, souvent pour la première fois professionnellement en France, et qui réalisent que nous ne sommes pas uniquement un pays de tourisme, mais que nous avons de plus une communauté Java cultivée et en pleine croissance.<br/>"+
                    "Enfin un événement qui permet à des speakers venus donc spécialement en France de s'exprimer sur leurs spécialités, dans un contexte résolument axé sur le futur proche. Que deviendront nos technologies à court et moyen terme? Comment comprendre les visions de chacun des grands acteurs du monde Java et les buts vers lesquels ils tendent? Des questions complexes, dont les réponses fluctuent au rythme des annonces de chacun des protagonistes. Des questions que se posent semaines après semaines les passionnés, mais aussi tous ceux qui sont en train de faire des choix technologiques.<br/>"+
                    "Pour répondre à cette demande d'information, nous sommes heureux de pouvoir vous présenter la What's Next. Une conférence que nous voulons un peu différente des autres, conviviale et réunissant une bonne partie de la communauté française, avec un accès privilégié à des experts qui ne seraient peut-être jamais venus en France par ailleurs, et qui peut-être ne reviendront pas de sitôt.<br/>"+
                    "Nous avons mis du coeur à l'ouvrage pour pouvoir vous proposer ces grands noms, et faire se rencontrer des leaders de différentes communautés Java, depuis la haute disponibilité, la performance jusqu'aux nouveaux langages de la JVM, Scala, Clojure, en passant par les systèmes NoSQL et l'intégration continue. Si vous voulez vous inscrire, vous pouvez profiter du <a href=\"inscription.html\">tarif early-bird</a>.<br/>"+
                    "See you there!"
        },
        {
            titre: "What's Next... l'événement 2011!",
            auteur: "Zenika",
            date: "22/12/2010",
            article: "Zenika organise le <strong>26 et 27 mai 2011</strong> un événement unique en France: <strong>une conférence exceptionnelle de deux jours réunissant les plus grands noms du monde Java/JEE</strong>. Le but de la conférence est d'obtenir la vision de chacun des speakers sur <strong>le futur de leurs technologies</strong> de prédilection.<br/>"+
                    "Pour conserver le suspense, les speakers seront annoncés au fur et à mesure sur le site de la conférence, <a href=\"index.html\">whatsnextparis.com</a>, et sur Twitter <a href=\"http://twitter.com/WsN_Paris\">@WsN_Paris</a>... Stay tuned!<br/>"+
                    "Réservez dès maintenant votre place sur <a href=\"index.html\">whatsnextparis.com</a> et aidez-nous à faire de cet événement une réussite totale. Objectif: renouveler l'événement chaque année!<br/>"+
                    "Et parce qu'il fallait un lieu unique pour faire briller les plus grandes étoiles de notre domaine, la conférence se tiendra au <strong>Grand Rex</strong> à Paris."
        }
    ];

var experts=[
    {
        nom: 'Gonthier Olivier',
        societe: 'Zenika',
        competences: ['web','java','mobile'],
        disponible: true
    },
    {
        nom: 'Steve Ballmer',
        societe: 'Microsoft',
        competences: ['.Net','Office'],
        disponible: false
    },
    {
        nom: 'James Gosling',
        societe: 'Liquid Robotics',
        competences: ['java','scala'],
        disponible: false
    }
];

var trainings=[
    {
        titre: 'HTML5 en pratique',
        categorie: 'web',
        duree: 3
    },
    {
        titre: 'HTML5 avancé',
        categorie: 'web',
        duree: 2
    },
    {
        titre: 'Javascript',
        categorie: 'web',
        duree: 1
    },
    {
        titre: 'Java Experts',
        categorie: 'Java',
        duree: 5
    },
    {
        titre: 'Jenkins',
        categorie: 'Integration Continue',
        duree: 3
    }
];


