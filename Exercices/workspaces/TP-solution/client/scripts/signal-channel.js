var room = 1337;
var peerId = Math.floor(Math.random() * 10000);

var SignalChannel = {
    source: null,
    init: function () {
        this.source = new EventSource('/room/' + room + '/' + peerId);

        this.source.onmessage = function (e) { handleMessage(e.type, e.data); };

        this.source.addEventListener('offer', function (e) { handleMessage(e.type, JSON.parse(e.data)); }, false);

        this.source.addEventListener('answer', function (e) { handleMessage(e.type, JSON.parse(e.data)); }, false);

        this.source.addEventListener('icecandidate', function (e) { handleMessage(e.type, JSON.parse(e.data)); }, false);

        this.source.onopen = function (e) {
            console.log('SignalChannel opened !');
        };
        this.source.onerror = function (e) {
            if (e.readyState === EventSource.CLOSED) {
                console.log(e.data);
            } else {
                console.log(e);
            }
        };
    }
};

SignalChannel.init();

SignalChannel.send = function (type, data) {
    console.log('Sending "' + type + '" with data : ' + data);
    var dataStr = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', type + '/' + room + '/' + peerId, true);
    xhr.send(dataStr);
};

function errorhandler(error) {
    if (typeof error === String) {
        console.error('Error : ' + error);
    } else {
        if (error.name) console.error('Error : ' + error.name);
        if (error.data) console.error('Error : ' + error.data);
        if (error.description) console.error('Error : ' + error.description);
    }
}