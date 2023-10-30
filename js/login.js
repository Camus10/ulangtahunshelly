$('#login-button').click(function (event){
	let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
	
  if(firstName.toUpperCase() == "SHELLY" && lastName.toUpperCase() == "OCTAVIANI"){
		event.preventDefault();
		
    $('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		
    // requestFullScreen();

		setTimeout(function(){
			location.href = "../html/opening.html";
		}, 2000);
	}else{
		alert("Masukkan Nama Asli Shelly!");
	}
});

function requestFullScreen(element){
	var element = document.documentElement;
	let requestMethod = element.requestFullScreen || // W3C
	  element.webkitRequestFullScreen || // Chrome
	  element.mozRequestFullScreen || // FireFox
	  element.msRequestFullScreen; // IE11
	if(requestMethod){
		requestMethod.call(element);
	}else if(typeof window.ActiveXObject !== "undefined") { // for Internet Explorer
		let wscript = new ActiveXObject("WScript.Shell");
		if(wscript !== null){
		  wscript.SendKeys("{F11}");
		}
	}
}
