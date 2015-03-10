var express = require('express');
var serv = express();

serv.configure(function() {
    serv.use(express.static('../'));
    serv.use(express.bodyParser());
});

serv.post('/contacts',function(req,res){
    if(req.body){
        var newContacts = req.body;
        for(var i=0; i<newContacts.length; i++){
            console.log(newContacts[i]);
            if(!alreadyInContacts(newContacts[i]))
                contacts.push(newContacts[i]);
        }
    }
    res.send(JSON.stringify(contacts));
});
serv.listen(8080);

var contacts=[{prenom: 'Olivier',
                nom: 'Gonthier'}];

function alreadyInContacts(contact){
    for(var i=0; i< contacts.length; i++){
        if(contacts[i].nom === contact.nom && contacts[i].prenom === contact.prenom)
            return true;
    }
    return false;
};