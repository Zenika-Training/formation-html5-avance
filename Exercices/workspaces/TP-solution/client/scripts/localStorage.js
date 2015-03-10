/********fonctions du local storage*******/

function save(evtId, value){
    if(window.localStorage){
        window.localStorage.setItem(evtId, value);
    }
}

function deleteEvt(evtId){
    if(window.localStorage){
        window.localStorage.removeItem(evtId);

    }
}
/******************************************/
