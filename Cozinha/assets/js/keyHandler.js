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
	
	keyboard.dispatchEvent("keydown",e.keyCode);
	
};

function keyboardHandler(){
	
	this.initialize();
	
}

keyboardHandler.prototype = new createjs.Container();
keyboardHandler.prototype.containerInitialize = createjs.Container.prototype.initialize;
keyboardHandler.prototype.initialize = function(){
	
	
	
};

//Funcao que disponibiliza a funcao de touch pra portateis
function clickStage(e){

	x = e.stageX;
	y = e.stageY; 
	console.log(e);
	
	e.onMouseUp = function(e){
		newx = x - e.stageX;
		newy = y - e.stageY;
		newax = Math.abs(newx);
		neway = Math.abs(newy);
		
		console.log(e);
		
		if(newax > neway){
			
			if(newx > 0){
				var e = [];
				e.target = 37;
				Comidas.prototype.handle_key(e);
				
			} else if(newx < 0){
				var e = [];
				e.target = 39;
				Comidas.prototype.handle_key(e);
				
			}
			
		} else if(newax < neway){
			
			if(newy > 0){
				var e = [];
				e.target = 38;
				Comidas.prototype.handle_key(e);
				
			} else if(newy < 0){
				var e = [];
				e.target = 40;
				Comidas.prototype.handle_key(e);
				
			}
			
		}
	};
}

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
