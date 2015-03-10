self.addEventListener('message', function(e) {
    var data = e.data;
    start(parseInt(data.dates),parseInt(data.quantity),parseInt(data.prixParPlace));
}, false);

function start(dates,quantity,prixParPlace)
{

    pausecomp(10000);
    self.postMessage(dates * quantity * prixParPlace);

}

function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}