/*

	Script dos comandos do Teclado e de Mouse
		Andrey pereira Aleixo


*/
var move;
var gaberto1, gaberto2;
var faberto1, faberto2;
var aaberto1, aaberto2;
var paberto;
var contC = 0, contB = 0, contE = 0, contD = 0;

document.onkeydown = function(e) {
	
	keyboard.dispatchEvent("keydown",e);
	
};

function keyboardHandler(){
	
	this.initialize();
	
}

keyboardHandler.prototype = new createjs.Container();
keyboardHandler.prototype.containerInitialize = createjs.Container.prototype.initialize;
keyboardHandler.prototype.initialize = function(){
	
	
	
};

keyboard = new keyboardHandler();

//funcao onComplete do Tween dos produtos
function onComplete(e){
	
	removePrd(move);
	
}

//funcao que apaga as partes abertas no final da animacao
function apagaCima(e, o){

	contC--;
	if(contC <= 0){
		e.alpha = 0;
			o.alpha = 0;
	}
}

//funcao que apaga as partes abertas no final da animacao
function apagaBaixo(e){

	contB--;
	if(contB <= 0){
		e.alpha = 0;
	}
}

//funcao que apaga as partes abertas no final da animacao
function apagaDireita(e, o){

	contD--;
	if(contD <= 0){
		e.alpha = 0;
			o.alpha = 0;
	}
}

//funcao que apaga as partes abertas no final da animacao
function apagaEsquerda(e, o){

	contE--;
	if(contE <= 0){
		e.alpha = 0;
			o.alpha = 0;
	}
}
