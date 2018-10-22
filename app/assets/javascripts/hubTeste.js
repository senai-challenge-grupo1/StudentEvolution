class Teste {
	constructor(id, nome) {
		this.id = id;
		this.nome = nome;
		this.acertos = 0;
		this.concluido = false;
	}

	updatePercentual(value) {
		this.acertos = value;
		$("#"+this.id+" #teste-percentual").html(this.acertos);
	}

	finish() {
		if(this.concluido) {
			$("#"+this.id).css("background-color","#9be6ac");
		}
	}
}

var teste = new Teste("teste2", "Teste 1");
