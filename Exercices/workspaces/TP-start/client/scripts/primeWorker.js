self.addEventListener('message', function(e) {
  var data = e.data;
start(parseInt(data));
}, false);

function start(n)
{
 
	
	search: while (true) {
	pausecomp(100);
	  n += 1;
	  for (var i = 2; i <= Math.sqrt(n); i += 1)
		if (n % i == 0)
		 continue search;
	  // found a prime!
	  self.postMessage(n);
	 // return;
	}

}

function pausecomp(millis)
 {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < millis);
}

