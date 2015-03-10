
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
};

function uploadProgress(evt) {
}

function uploadComplete(evt) {
}

function uploadFailed(evt) {
	alert('There was an error attempting to upload the file.');
}

function uploadCanceled(evt) {
	alert('The upload has been canceled by the user or the browser dropped the connection.');
}

function download(fileName){
}

function downloadFailed(evt) {
	alert('There was an error attempting to download the file.');
}

function downloadCanceled(evt) {
	alert('The download has been canceled by the user or the browser dropped the connection.');
}

function downloadProgress(evt) {
}


function showDetailFileInput(file){
		var delimeter = ': ';
		document.getElementById('fileName').innerHTML = ['Name', file.name].join(delimeter);
		document.getElementById('fileSize').innerHTML = ['Size', file.size].join(delimeter);
		document.getElementById('fileType').innerHTML = ['Type', file.type].join(delimeter);
}

