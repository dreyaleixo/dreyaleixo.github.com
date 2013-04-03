/* 


		Script do game principal
			Diego Mucciolo e Andrey Aleixo


*/

var Circulo, Triangulo;
var esteira = new createjs.Container();
var esteiraContainer = new createjs.Container();

function setupEsteira(qtdElementos) {
	esteira.removeAllChildren();
	esteiraContainer.removeAllChildren();
	
	for(var i = 0; i < qtdElementos; i++) {
		switch(Math.floor(Math.random() * 4)) {
		case 0:
			esteira.addChild(circulo.clone(true));
			break;
			
		case 1:
			esteira.addChild(triangulo.clone(true));
			break;
			
		case 2:
			esteira.addChild(baixo.clone());
			break;
			
		case 3:
			esteira.addChild(cima.clone());
			break;
		}
	}
	
	var qtdToRender = (esteira.getNumChildren() < 4) ? esteira.getNumChildren() : 4;
	
	if(esteira.getNumChildren() > qtdToRender) {
		for(i = 4; i > 0; i--) {
			esteira.getChildAt(i).y = (canvas.height/2) - ( 15 * i ) + 20;
			esteira.getChildAt(i).x = (canvas.width/2) + 70; 
			esteira.getChildAt(i).scaleX = 1 - (i * 0.055);
			esteira.getChildAt(i).scaleY = 1 - (i * 0.055);
			
			esteiraContainer.addChild(esteira.getChildAt(i));
		}
	}
	
	else {	for(i = esteira.getNumChildren() - 1; i >= 0; i--) {
			esteira.getChildAt(i).y = (canvas.height/2) - ( 15 * i ) + 20;
			esteira.getChildAt(i).x = (canvas.width/2) + 70; 
			esteira.getChildAt(i).scaleX = 1 - (i * 0.055);
			esteira.getChildAt(i).scaleY = 1 - (i * 0.055);
			
			esteiraContainer.addChild(esteira.getChildAt(i));
			}
	}
	
	
	gameContainer.addChild(esteiraContainer, moveContainer);
	gameContainer.addChild(faberto2, gaberto2, aaberto2, paberto);
	
}

function refreshEsteira() {
	
	var qtdToRender = (esteiraContainer.getNumChildren() < 4) ? esteiraContainer.getNumChildren() : 4;
	
	
	if(qtdToRender == 4){
		esteiraContainer.getChildAt(0).y = (canvas.height /3) - 7.5 + 20;
		esteiraContainer.getChildAt(0).x = (canvas.width/2) + 70; 
		esteiraContainer.getChildAt(0).scaleX = 0.4;
		esteiraContainer.getChildAt(0).scaleY = 0.4;
	}
	
	if(qtdToRender >= 4){
		
		for(var i = 0; i < qtdToRender; i++) {
			createjs.Tween.get(esteiraContainer.getChildAt(i)).to({y : (canvas.height/2) - (15 *  ( qtdToRender - i ) - 20),
																	x: (canvas.width/2) + 70,
											   scaleX : (1 - (( qtdToRender - i ) * 0.055)), 
										       scaleY : (1 - (( qtdToRender - i ) * 0.055))},
											   300,
											   createjs.Ease.Linear
											);
		}
		
	} else{
		
		for(var i = 0; i < qtdToRender; i++) {
			createjs.Tween.get(esteiraContainer.getChildAt(i)).to({y : (canvas.height/2) - (15 *  ( qtdToRender - i ) - 20), 
																	x: (canvas.width/2) + 70,
											   scaleX : (1 - (( qtdToRender - i ) * 0.055)), 
										       scaleY : (1 - (( qtdToRender - i ) * 0.055))},
											   300,
											   createjs.Ease.Linear
											);
		}
		
	}
}

function Comidas(num, lado){
	
	this.initialize(num, lado);
	
}

Comidas.prototype = new createjs.Container();
Comidas.prototype.containerInitialize = createjs.Container.prototype.initialize;
Comidas.prototype.initialize = function(num, lado){
	
	this.containerInitialize();
	
	var bitmap = this.addChild(new createjs.Bitmap(queue.getResult(num)));
	this.lado = lado;
	this.ativo = false;
	
	createjs.Ticker.addEventListener("tick",this.comer.context(this));
	keyboardHandler.addEventListener("keydown",this.handle_key);
};
Comidas.prototype.handle_key(key)
{
	if(this.ativo)
	{
		andar();
		dispatchEvent("mexi");
	}
}
Comidas.prototype.comer = function() {
	//console.log(this);
	this.lado = "nenhum";
	
}