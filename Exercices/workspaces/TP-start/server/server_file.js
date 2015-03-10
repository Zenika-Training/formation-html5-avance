var express = require('express');
var fs = require('fs');
var serv = express();

serv.configure(function() {
	serv.use(express.static('../client/'));
	serv.use(express.static('./uploads/'));
	serv.use(express.bodyParser({uploadDir: './uploads'}));
});

serv.post('/fileUpload', function(req, res) {
	console.log(req.body);
	console.log(req.files);

	var uploadedFile = req.files.avatar;
	var tmpPath = uploadedFile.path;
	var targetPath = './uploads/' + uploadedFile.name;

	fs.rename(tmpPath, targetPath, function(err) {
	if (err) throw err;
	fs.unlink(tmpPath, function() {
		if (err) throw err;
			//res.send('File Uploaded to ' + targetPath + ' - ' + uploadedFile.size + ' bytes');
			res.send(uploadedFile.name);
		});
	});
});

serv.post('/admin/', function newTweet(req, resp){
    var username = req.param("pseudo",null);
    var tweet = req.param("tweet",null);
    subscribers.notify(username,tweet);
    resp.writeHead(200);
    resp.end();
});

serv.get('/tweets', function sse(req, resp){
    //TODO
});

serv.use('/partner/', function(req,resp){
    resp.redirect('/');
});


serv.listen(8080);

/*
*   Observer
*/

function Subscribers(){
    this.members = [];
};
Subscribers.prototype = {
    add : function(member){
        this.members.push(member)
    },
    remove : function(member){
        this.members = this.members.filter(function(element){
            if(element!==member)
                return element;
        })
    },
    notify : function(username, tweet){
        this.members.forEach(function(element){
            element.call(this,username,tweet);
        })
    }
};

var subscribers = new Subscribers();