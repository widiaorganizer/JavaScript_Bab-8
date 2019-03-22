var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://codepen.io/eclairereese/pen/BzQBzR.html');
myRequest.onreadystatechange = function () {
	// body...
	if (myRequest.readystate === 4) {
		document.getElementById('ajax-content').innerHTML = myRequest.responseText;

	}
};
function sendTheAJAX(){
	myRequest.send();
	document.getElementById('reveal').style.display = 'none';
	
}