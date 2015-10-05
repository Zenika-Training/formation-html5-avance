var http = require('http'),
  express = require('express'),
  path = require('path');

var app = express();

// all environments
app.configure(function () {
  app.set('port', process.env.PORT || 1337);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  console.log('Serving static files from ' + path.join(__dirname, '/../client/'));
  app.use(express.static(path.join(__dirname, '/../client/')));
});

var server = http.createServer(app);

// Routes
app.get('/room/:roomNum/:peerId', function (req, res) {
  var roomNum = req.params.roomNum;
  var peerId = req.params.peerId;

  console.log('Opening SSE with room : ' + roomNum + ' / peer : ' + peerId);

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });


  this.inform = function (eventName, data) {
    var id = (new Date()).toLocaleTimeString();

    res.write('event: ' + eventName + '\n');
    res.write('id: ' + id + '\n');
    res.write('data: ' + data + '\n\n');
  };

  this.inform('message', 'room ' + roomNum + ' pour le peer ' + peerId);

  Users.add(roomNum, peerId, this.inform);

  req.on("close", function () {
    console.log('Closing SSE with ' + roomNum + ':' + peerId);
    Users.remove(roomNum, peerId);
  });

});

app.post('/offer/:roomNum/:peerId', function (req, res) {
  sendResponse(req, res, 'offer');
});

app.post('/answer/:roomNum/:peerId', function (req, res) {
  sendResponse(req, res, 'answer');
});

app.post('/icecandidate/:roomNum/:peerId', function (req, res) {
  sendResponse(req, res, 'icecandidate');
});

function sendResponse(req, res, eventName) {
  DataParser.parse(req, function (data) {
    var roomNum = req.params.roomNum;
    var peerId = req.params.peerId;

    console.log(eventName + ' from ' + roomNum + ':' + peerId);
    Users.inform(roomNum, peerId, eventName, data);
    res.writeHead(200);
    res.end();
  });
}

console.log('Registered routes : ' + getRegisteredRoutes(app.routes));

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

function getRegisteredRoutes(routes) {
  var routesList = '\n';

  var registeredRoutes;
  for (var httpMethod in routes) {
    if (routes.hasOwnProperty(httpMethod)) {
      registeredRoutes = routes[httpMethod];
      var subRoutes = '';
      registeredRoutes.forEach(function (item) {
        subRoutes += '    ' + item.path + '\n';
      });
      routesList += httpMethod + '\n' + subRoutes + '\n';
    }
  }

  return routesList;
}





// Utilitaires

var DataParser = {
  // Gestion simplifiée de la récupération de paramètres passés en POST dans les requêtes http
  parse: function (req, callback) {
    var content = '';

    req.on('data', function (data) {
      content += data;
    });

    req.on('end', function () {
      callback(content);
    });
  }
};

// Gestion simplifiée des utilisateurs connectés
var Users = {
  allConnected: {},

  add: function (roomNum, peerId, notif) {
    this.allConnected[roomNum] = this.allConnected[roomNum] || [];
    this.allConnected[roomNum].push({
      peerId: peerId,
      inform: notif
    });
  },
  remove: function (roomNum, peerId) {
    this.allConnected[roomNum] = this.allConnected[roomNum].filter(function (peer) {
      if (peer.peerId !== peerId) {
        return peer;
      }
    });
  },
  inform: function (roomNum, peerId, eventName, data) {
    this.allConnected[roomNum].forEach(function (peer) {
      if (peerId !== peer.peerId) {
        console.log('Found connected peer ! Sending "' + eventName + '".');
        // Appelle la fonction inform du peer connecté connecté : transmet l'event via SSE.
        peer.inform.call(this, eventName, data);
      }
    });
  }
};
