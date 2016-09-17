function loadDoc(url, cfunc) {
	var xhttp;
	xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			cfunc(this);
		}
		else if (this.status == 304) {
			cfunc(this);
		}
	}
	xhttp.open("GET", url, true);
	xhttp.send();
};

function cfunc(xhttp){
//	var	xhttp = xhttp;
//	function pAppear(){
	$("#destination").html = xhttp.responseText;
//		$("#destination").fadeIn();
//	} 
//	$("#destination").fadeOut();
//	setTimeout( pAppear, 1000 );


};