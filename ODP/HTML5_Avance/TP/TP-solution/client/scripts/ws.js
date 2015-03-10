var ws;

ws_url = "ws://localhost:1337/";

function updateStatus(id, message) {
    document.getElementById(id).innerHTML = message;
}

function loadWebSocket() {
    //getData(); /*A decommenter pour sauvegarder les messages dans le LocalStorage*/
    if (window.WebSocket) {
        ws = new WebSocket(ws_url);

        updateStatus("wsStatus", "webSocket supported !");
        ws.onopen = function() {
            updateStatus("wsStatus", "Connected to WebSocket server!");
        };
        ws.onmessage = function(e) {
            displayMessage(e.data);
            //saveData()
        };
        ws.onclose = function() {
            updateStatus("wsStatus", "WebSocket closed!");
        };
        ws.onerror = function(e) {
            updateStatus("wsStatus", "WebSocket error : " + e.data);
        };

    } else {
        updateStatus("wsStatus", "Your browser does NOT support webSocket.");
    }
}

function sendMyPost(data){
    if (ws && ws.readyState == 1) {
        ws.send(data);
    } else {
        alert("The websocket is not open! try refreshing your browser");
    }
}

function sendId(data){
	 if (ws && ws.readyState == 1) {
	        ws.send(data);
	    } else {
	        alert("The websocket is not open! try refreshing your browser");
	 }
}
/*
display function
 */
function displayMessage(message) {
    var m = message.split(':');
    var talkid = "talk" + m[0];
    var talk = document.getElementById(talkid);
    //talk.setAttribute("data-number", m[1]);
    var span = talk.getElementsByTagName("span")[0];
    span.innerHTML = m[1];
}
