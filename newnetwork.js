function showmenu () {

	document.getElementById('menuholder').style.left = "0";	
}


function hidemenu () {

	document.getElementById('menuholder').style.left = "-100%";
}

function changelight () {

	
	var oldvalue = document.getElementById('night').href;

	
		if (oldvalue =='file:///C:/Users/Veronica/Desktop/newnetwork/newnetwork.css') {
			document.cookie ='mode=file:///C:/Users/Veronica/Desktop/newnetwork/newnetworkw.css';
		}
		else {
			document.cookie ='mode=file:///C:/Users/Veronica/Desktop/newnetwork/newnetwork.css';
		}


	window.location.reload();
}

window.onload  = function() {


	var x = document.cookie;

	//prende tutti gli elementi dei cookie che sono una lista divisa da ; in singoli elementi dell array.

	x = x.split(';');

	for (var i = 0; i < x.length; i++) {

		var y = x[i].split('=');
		
		if (y[0] == 'mode') {

			y = y[1];
			break;
	//override.
		}
	}

	if (y != '') {

	//funziona solo se y è vuoto.
		document.getElementById('night').href = y;

	}
	var pn = window.location.pathname.split("/");
	pn = pn[pn.length-1];
	if(pn=="test.html"){

		questionGenerator ();
	}

}


