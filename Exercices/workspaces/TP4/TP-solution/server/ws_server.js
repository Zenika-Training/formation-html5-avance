var WebSocketServer = require('websocket').server;
var http = require('http');

var clients = [ ];

//TODO definir un compteur de places sous forme d'un tableau par exemple
var cpt = [];

for(var i=0; i<12; i++){
	cpt[i]=30;
}

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
    for (var i=0; i < clients.length; i++) {
    	for(var j =0; j<12; j++){
    		var mes = (j+1)+":"+cpt[j];
            clients[i].send(mes);
    	}	
    }
    
    //lors du drop on envoie un message contenant l'id et le choix (+ ou -)
    connection.on('message', function(message) {

	    //TODO reception des messages envoyes lors du drag'n'drop et envoi a tous les clients
        //parser le message et suivant l'operation, décrémenter ou incrementer le compteur puis l'envoyer aux clients avec l'id correspondant
        //exemple : pour id+":"+cpt on aurait 2:28  (event d'id 2 a 28 places)
    	var mes = message.utf8Data.split(':');
    	var id = mes[0];
    	if(id<=12 && id>=1){
    		if(mes[1]==='+'){
        		cpt[id-1] = cpt[id-1] - 1; 	//on décrémente au choix de la conference
    		}else if (cpt[id-1]<30){
        		cpt[id-1] = cpt[id-1] + 1; 	//on incrémente si on enlève le choix de la
        									//liste des conférences choisies
    		}
    		console.log("compteur id " + message.utf8Data + " = " + cpt[id-1]);
    		var tosend = id + ":" + cpt[id-1];
    		for (var i=0; i < clients.length; i++) {
    	        clients[i].send(tosend);
    	    }
    	}
	    
    });

    connection.on('close', function(connection) {
        // close user connection
        console.log((new Date()) + ' Connection closed ');
        clients.splice(index, 1);
    });
});
