//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
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
$(function(){
	player.updateBored(100);
	player.updateStress(100);
	player.updateXp(100);
	player.updateLv(3);
	player.updateCe(100);
	player.updateCh(100);
	player.updateCb(100);
	player.updateLc(100);
});

function error() {
	$(".card.card-error .close").click(function() {
		$(".card.card-error").hide("slow");
	});
}
