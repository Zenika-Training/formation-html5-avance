
function onChangeInputFile(){
	var inputFile = document.getElementById('inputFile');
	var file = inputFile.files[0];
	showDetailFileInput(file);
	if (file.type != 'image/jpeg'){
		alert('only jpeg file');
		return;
	}
	sendData();
}

function sendData(){
	var form = document.getElementById('form');
	var fd = new FormData(form);
	var xhr = new XMLHttpRequest();
	xhr.upload.addEventListener('progress', uploadProgress, false);
	xhr.addEventListener('load', uploadComplete, false);
	xhr.addEventListener('error', uploadFailed, false);
	xhr.addEventListener('abort', uploadCanceled, false);

	xhr.open('POST', '/fileUpload');
	xhr.send(fd);
};

function uploadProgress(evt) {
	if(evt.lengthComputable) {
		var progressBar = document.getElementById('progressUpload');
		progressBar.value = (evt.loaded / evt.total) * 100;
		progressBar.textContent = progressBar.value; // Fallback for unsupported browsers.
		document.getElementById('progressUpload2').innerHTML = Math.round(evt.loaded * 100 / evt.total) + '%';
	} else {
		
	}
}

function uploadComplete(evt) {
			uploadProgress(evt);
			var a = document.createElement('a');
			a.href='#';
			a.onclick=function(){download(evt.target.responseText); return false;};
			a.innerHTML='prévisualiser ' + evt.target.responseText +'<br/>';
			document.getElementById('download').appendChild(a);
	
}

function uploadFailed(evt) {
	alert('There was an error attempting to upload the file.');
}

function uploadCanceled(evt) {
	alert('The upload has been canceled by the user or the browser dropped the connection.');
}

function download(fileName){
		window.URL = window.URL || window.webkitURL;  // Take care of vendor prefixes.

		var xhr = new XMLHttpRequest();
		xhr.open('GET', fileName, true);
		xhr.responseType = 'blob';

		xhr.onload = function(e) {
		  if (this.status == 200) {
			var blob = this.response;
			var img = document.createElement('img');
			img.onload = function(e) {
			  window.URL.revokeObjectURL(img.src); // Clean up after yourself.
			};
			img.src = window.URL.createObjectURL(blob);
			img.width='200';
			img.height='160';
			var previsualition = document.getElementById('previsualisation');
			while (previsualition.hasChildNodes()) {
				previsualition.removeChild(previsualition.lastChild);
			}
			previsualition.appendChild(img);
		  }
		};
		xhr.addEventListener('progress', downloadProgress, false);
		xhr.addEventListener('error', downloadFailed, false);
		xhr.addEventListener('abort', downloadCanceled, false);

		xhr.send();
}

function downloadFailed(evt) {
	alert('There was an error attempting to download the file.');
}

function downloadCanceled(evt) {
	alert('The download has been canceled by the user or the browser dropped the connection.');
}

function downloadProgress(evt) {
	if(evt.lengthComputable) {
		var progressBar = document.getElementById('progressDownload');
		progressBar.value = (evt.loaded / evt.total) * 100;
		progressBar.textContent = progressBar.value; // Fallback for unsupported browsers.
		document.getElementById('progressDownload2').innerHTML = Math.round(evt.loaded * 100 / evt.total) + '%';
	} else {
		
	}
}


function showDetailFileInput(file){
		var delimeter = ': ';
		document.getElementById('fileName').innerHTML = ['Name', file.name].join(delimeter);
		document.getElementById('fileSize').innerHTML = ['Size', file.size].join(delimeter);
		document.getElementById('fileType').innerHTML = ['Type', file.type].join(delimeter);
}

