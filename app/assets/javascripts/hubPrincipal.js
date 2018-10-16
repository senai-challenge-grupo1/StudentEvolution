function redirect(id) {
	switch(id) {
		case "ce-container":
			window.location = "/game/ciencias-exatas"
			break;
		case "ch-container":
			window.location = "/game/ciencias-humanas"
			break;
		case "cb-container":
			window.location = "/game/ciencias-biologicas"
			break;
		case "lc-container":
			window.location = "/game/linguagens-codigos"
			break;
		case "br-container":
			sleep();
			break;
		case "sr-container":
			recreacao();
			break;
	}
}

function sleep() {
	alert("Dormiu");
}

function recreacao() {
	alert("Recreação");
}
