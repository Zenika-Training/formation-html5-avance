var WebSocketServer = require('websocket').server;
var http = require('http');

var clients = [ ];

//TODO definir un compteur de places sous forme d'un tableau par exemple

var server = http.createServer(function(request, response) {
    // process HTTP request. Since we're writing just WebSockets server
    // we don't have to implement anything.
});

server.listen(1337, function() {
    console.log((new Date()) + " Server is listening on port 1337");
});

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection from origin ' + request.origin + '.');
    // This is the most important callback for us, we'll handle
    // all messages from users here.

    var index = clients.push(connection) - 1;
    console.log(clients.length + ' users connected');

    //TODO envoi du compteur à la connexion
    
    //lors du drop on envoie un message contenant l'id et le choix (+ ou -)
    connection.on('message', function(message) {

	    //TODO reception des messages envoyes lors du drag'n'drop et envoi a tous les clients
        //parser le message et suivant l'operation, décrémenter ou incrementer le compteur puis l'envoyer aux clients avec l'id correspondant
        //exemple : pour id+":"+cpt on aurait 2:28  (event d'id 2 a 28 places)
    	
    });

    connection.on('close', function(connection) {
        // close user connection
        console.log((new Date()) + ' Connection closed ');
        clients.splice(index, 1);
    });
});
