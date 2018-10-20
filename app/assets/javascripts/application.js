//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap
//= require jquery.mask
//= require font_awesome5
class Player {
	constructor() {
		this.bored = 1;
		this.stress = 1;
		this.xp = 1;
		this.lv = 1;
		this.ce_progress = 0;
		this.ch_progress = 0;
		this.cb_progress = 0;
		this.lc_progress = 0;
	}

	updateBored(value) {
		this.bored = value;
		$("#bored-progress").css("background-image", "linear-gradient(to right, white -30%, #4a084a "+this.bored+"%, white 0)");
	}

	updateStress(value) {
		this.stress = value;
		$("#stress-progress").css("background-image", "linear-gradient(to right, yellow, red "+this.stress+"%, white 0)");
	}

	updateXp(value) {
		this.xp = value;
		$("#xp-progress").css("background-image", "linear-gradient(to right, lightgreen, green "+this.xp+"%, white 0)");
	}

	updateLv(value) {
		this.lv = value;
		$("#lv").html(this.lv);
	}

	updateCe(value) {
		this.ce_progress = value;
		$("#ce-percent").html(this.ce_progress);
		$(".bar.bar-horizontal #ce-progress").css("background-image", "linear-gradient(to right, lightblue, blue "+this.ce_progress+"%, white 0)");
		$(".bar.bar-vertical #ce-progress").css("background-image", "linear-gradient(to top, lightblue, blue "+this.ce_progress+"%, white 0)");
	}

	updateCh(value) {
		this.ch_progress = value;
		$("#ch-percent").html(this.ch_progress);
		$(".bar.bar-horizontal #ch-progress").css("background-image", "linear-gradient(to right, lightblue, blue "+this.ch_progress+"%, white 0)");
		$(".bar.bar-vertical #ch-progress").css("background-image", "linear-gradient(to top, lightblue, blue "+this.ch_progress+"%, white 0)");
	}

	updateCb(value) {
		this.cb_progress = value;
		$("#cb-percent").html(this.cb_progress);
		$(".bar.bar-horizontal #cb-progress").css("background-image", "linear-gradient(to right, lightblue, blue "+this.cb_progress+"%, white 0)");
		$(".bar.bar-vertical #cb-progress").css("background-image", "linear-gradient(to top, lightblue, blue "+this.cb_progress+"%, white 0)");
	}

	updateLc(value) {
		this.lc_progress = value;
		$("#lc-percent").html(this.lc_progress);
		$(".bar.bar-horizontal #lc-progress").css("background-image", "linear-gradient(to right, lightblue, blue "+this.lc_progress+"%, white 0)");
		$(".bar.bar-vertical #lc-progress").css("background-image", "linear-gradient(to top, lightblue, blue "+this.lc_progress+"%, white 0)");
	}
}

let player = new Player();
let player_id;
let user_id;
let area;
let answers = [];
let dataPlayer;
let total = 0;
let xp = 0;
let quests = [false, false, false, false];
function update() {
	player.updateBored(dataPlayer.bored);
	player.updateStress(dataPlayer.stress);
	if(dataPlayer.xp == 100) {
		$.ajax({
	    url: "/players/"+player_id+".json",
	    method: "PUT",
	    dataType: "JSON",
	    data: {xp: 0, ce: 0, ch: 0, cb: 0, lc: 0, nivel: (dataPlayer.nivel+1)},
	    success: function(resource, status, xhr) {
	    	$("#newLv").html(dataPlayer.nivel+1);
	    	$("#lvUp").show();
				player.updateLv(dataPlayer.nivel+1);
	    	player.updateXp(0);
				player.updateCe(0);
				player.updateCh(0);
				player.updateCb(0);
				player.updateLc(0);
	    }
	  });
	} else {
		player.updateXp(dataPlayer.xp);
		player.updateLv(dataPlayer.nivel);
		player.updateCe(dataPlayer.ce);
		player.updateCh(dataPlayer.ch);
		player.updateCb(dataPlayer.cb);
		player.updateLc(dataPlayer.lc);
	}
}

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
	let bored = 0;
	if(dataPlayer.bored <= 75) {
		bored = dataPlayer.bored + 25;
	} else {
		bored = 100;
	}

	$.ajax({
    url: "/players/"+player_id+".json",
    method: "PUT",
    dataType: "JSON",
    data: {bored: bored, stress: 0},
    success: function(resource, status, xhr) {
    	player.updateBored(bored);
    	player.updateStress(0);
    }
  });
}

function recreacao() {
	let bored = 0;
	if(dataPlayer.bored >= 25) {
		let bored = dataPlayer.bored - 25;
	}

	let stress = 0;
	if(dataPlayer.stress >= 15) {
		let stress = dataPlayer.stress - 15;
	}

	$.ajax({
    url: "/players/"+player_id+".json",
    method: "PUT",
    dataType: "JSON",
    data: {bored: bored, stress: stress},
    success: function(resource, status, xhr) {
    	player.updateBored(bored);
    	player.updateStress(stress);
    }
  });
}

function error() {
	$(".card.card-error .close").click(function() {
		$(".card.card-error").hide("slow");
	});
}

function pagination() {
	$("#quest1-btn").click(function() {
		$("#quest1").removeClass("d-none");
		$("#quest2").addClass("d-none");
		$("#quest3").addClass("d-none");
		$("#quest4").addClass("d-none");
	});

	$("#quest2-btn").click(function() {
		$("#quest1").addClass("d-none");
		$("#quest2").removeClass("d-none");
		$("#quest3").addClass("d-none");
		$("#quest4").addClass("d-none");
	});

	$("#quest3-btn").click(function() {
		$("#quest1").addClass("d-none");
		$("#quest2").addClass("d-none");
		$("#quest3").removeClass("d-none");
		$("#quest4").addClass("d-none");
	});

	$("#quest4-btn").click(function() {
		$("#quest1").addClass("d-none");
		$("#quest2").addClass("d-none");
		$("#quest3").addClass("d-none");
		$("#quest4").removeClass("d-none");
	});
}

function question(questao, resposta) {
	for (let i = 1; i <= 4; i++) {
		if(i == resposta) {
			$("#btn-pergunta"+questao+"resposta"+i).removeClass("btn-secondary");
			$("#btn-pergunta"+questao+"resposta"+i).addClass("btn-primary");
		} else {
			$("#btn-pergunta"+questao+"resposta"+i).removeClass("btn-primary");
			$("#btn-pergunta"+questao+"resposta"+i).addClass("btn-secondary");
		}
	}

	$("#quest"+questao+"-btn").removeClass("text-dark");
	$("#quest"+questao+"-btn").addClass("bg-primary text-light");
	quests[questao-1] = true;
	validaEnvio();
}

function validaEnvio() {
	let temp = true;
	for (let i = 0; i < 4; i++) {
		if(!quests[i]) {
			temp = false;
		}
	}

	if(temp) {
		$("#enviar").prop("disabled", false);
	}
}

function cronometro(minutos, segundos) {
	let s = segundos;
	let m = minutos;
	total = segundos + (minutos * 60)

	var interval = window.setInterval(function() {
		if (s == -1) { m--; s = 59; }

		if (s < 10)
			$("#segundo").html("0" + s);
		else
			$("#segundo").html(s);

		if (m < 10)
			$("#minuto").html("0" + m);
		else
			$("#minuto").html(m);

		s--;
		total--;

		verify();
	},1000);

	var verify = function() {
		if(m == 0 && s == -1) {
			window.clearInterval(interval);
			gameOver();
		}
	}
}

function load(id) {
	$.ajax({
		url: "/players/"+id+".json",
		method: "GET",
		success: function(response, status, xhr) {
			var result  = [];
			result.push(response);
			result.push({finish: true});
			console.log(result);
			return result;
		}
	});
}

function gameOver() {
	let acertos = 0;

	for(let i = 0; i < 4; i++) {
		if(answers[i] == $("input[name='resposta"+(i+1)+"']:checked").val()) {
			acertos++;
		}
	}

	let score = dataPlayer.nivel * ((total * 333 + 1) / (dataPlayer.bored + dataPlayer.stress + 1) * acertos);
	score += dataPlayer.score;
	
	let progress = (100 / (2 + (dataPlayer.nivel * 2))) * acertos;

	let stress = 0;
	let bored = 1;

	if(dataPlayer.stress <= 85) {
		stress = dataPlayer.stress + 15;
	} else {
		stress = 100;
	}

	if(dataPlayer.bored <= 75) {
		bored = dataPlayer.bored + 25;
	} else {
		bored = 100;
	}

	let data;
	let temp;
	switch(area) {
    case "ce":
    	xp = dataPlayer.xp;

    	temp = (100 - dataPlayer.ce) / 100;
  		xp = progress / 4 * temp;
  		xp += dataPlayer.xp;

    	if(dataPlayer.ce + progress <= 100) {
				progress += dataPlayer.ce;
    	} else {
    		progress = 100;
    	}

    	if(xp > 100) {
    		xp = 100;
    	}

    	if(xp % 25 != 0) {
    		xp++;
    	}

    	data = {score: score, ce: progress, xp: xp, stress: stress, bored: bored}
    	break;

    case "ch":
    	xp = dataPlayer.xp;

    	temp = (100 - dataPlayer.ch) / 100;
  		xp = progress / 4 * temp;
  		xp += dataPlayer.xp;

    	if(dataPlayer.ch + progress <= 100) {
				progress += dataPlayer.ch;
    	} else {
    		progress = 100;
    	}

    	if(xp > 100) {
    		xp = 100;
    	}

    	if(xp % 25 != 0) {
    		xp++;
    	}

    	data = {score: score, ch: progress, xp: xp, stress: stress, bored: bored}
    	break;

    case "cb":
    	xp = dataPlayer.xp;

    	temp = (100 - dataPlayer.cb) / 100;
  		xp = progress / 4 * temp;
  		xp += dataPlayer.xp;

    	if(dataPlayer.cb + progress <= 100) {
				progress += dataPlayer.cb;
    	} else {
    		progress = 100;
    	}

    	if(xp > 100) {
    		xp = 100;
    	}

    	if(xp % 25 != 0) {
    		xp += 2;
    	}

    	data = {score: score, cb: progress, xp: xp, stress: stress, bored: bored}
    	break;

    case "lc":
    	xp = dataPlayer.xp;

    	temp = (100 - dataPlayer.lc) / 100;
  		xp = progress / 4 * temp;
  		xp += dataPlayer.xp;

    	if(dataPlayer.lc + progress <= 100) {
				progress += dataPlayer.lc;
    	} else {
    		progress = 100;
    	}

    	if(xp > 100) {
    		xp = 100;
    	}

    	if(xp % 25 != 0) {
    		xp++;
    	}

    	data = {score: score, lc: progress, xp: xp, stress: stress, bored: bored}
    	break;
  }

  $.ajax({
    url: "/players/"+player_id+".json",
    method: "PUT",
    dataType: "JSON",
    data: data,
    success: function(resource, status, xhr) {
    	window.location = "/game";
    }
  });
}
