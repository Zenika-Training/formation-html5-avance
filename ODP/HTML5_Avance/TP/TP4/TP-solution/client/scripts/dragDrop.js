/**
 * Created with IntelliJ IDEA.
 * User: Training
 * Date: 9/3/12
 * Time: 4:03 PM
 * To change this template use File | Settings | File Templates.
 */
/*******fonctions pour drag n drop********/
function drag(target, evt) {
    evt.dataTransfer.setData("Text", target.id);
}
function drop(target, evt) {
    var id = evt.dataTransfer.getData("Text");
    var eventEl = document.getElementById(id);
    target.appendChild(eventEl);
    var content = eventEl.innerHTML;
    var idevt = eventEl.getAttribute("data-evtid");
    evt.preventDefault();
    if(target.id=="my_events"){
        save(id, content);  //à changer..
        // envoi d'un message d'ajout à la websocket (avec idevt) par exemple idevt + ":" + "+"
        sendId(idevt+":"+"+");
    } else {
        deleteEvt(id);
        // envoi d'un message de suppression à la websocket  (avec idevt) par exemple idevt + ":" + "-"
        sendId(idevt+":"+"-");

    }

}

function cancel(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    return false;
}
/*****************************************/