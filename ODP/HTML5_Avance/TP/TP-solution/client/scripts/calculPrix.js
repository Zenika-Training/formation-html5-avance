
    function calculPrix(){
        desactive();
        var dates = document.getElementById("dates").value;
        var quantity = document.getElementById("quantity").value;
        var prix = document.getElementById("prix");
        prix.innerHTML = calcul(dates, quantity);
        active();
    }

    function calcul(dates, quantity){
        pausecomp(10000);
        return dates * quantity * prixParPlace;
    }

    function pausecomp(millis)
    {
        var date = new Date();
        var curDate = null;
        do { curDate = new Date(); }
        while(curDate-date < millis);
    }

    function initWorker(){
        worker = new Worker('scripts/computeWorker.js');

        worker.addEventListener('message', function(e) {
            active();
            var prix = document.getElementById("prix");
            prix.innerHTML = e.data;
        }, false);
    }

    function calculPrixWorker(){
        desactive();
        var dates = document.getElementById("dates").value;
        var quantity = document.getElementById("quantity").value;
        worker.postMessage({'dates': dates, 'quantity' : quantity, 'prixParPlace' : prixParPlace});
    }

    function active(){
        document.getElementById("quantity").disabled = false;
        document.getElementById("dates").disabled = false;
        document.getElementById("submit").disabled = false;
        document.getElementById("calcul").disabled = false;
    }

    function desactive(){
        document.getElementById("quantity").disabled = true;
        document.getElementById("dates").disabled = true;
        document.getElementById("submit").disabled = true;
        document.getElementById("calcul").disabled = true;
    }