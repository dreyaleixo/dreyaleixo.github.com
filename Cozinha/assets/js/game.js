/* 


		Script do game principal
			Diego Mucciolo e Andrey Aleixo


*/

var Circulo, Triangulo;
var esteira = new createjs.Container();
var esteiraContainer = new createjs.Container();
//var comidas = [comida1, comida1, comida3, comida4, 
//               comida5, comida6, comida7, comida8, 
//               comida9, comida10, comida11, comida12, 
//               comida13, comida14, comida15, comida16];

function setupEsteira(qtdElementos) {
	esteira.removeAllChildren();
	esteiraContainer.removeAllChildren();
	
	for(var i = 0; i < qtdElementos; i++) {
		switch((Math.ceil(Math.random() * 17))) {
		case 1:
			esteira.addChild(new Comidas("comida1", 1));
			break;
			
		case 2:
			esteira.addChild(new Comidas("comida2", 1));
			break;
			
		case 3:
			esteira.addChild(new Comidas("comida3", 1));
			break;
			
		case 4:
			esteira.addChild(new Comidas("comida4", 1));
			break;
			
		case 5:
			esteira.addChild(new Comidas("comida5", 3));
			break;
			
		case 6:
			esteira.addChild(new Comidas("comida6", 3));
			break;
			
		case 7:
			esteira.addChild(new Comidas("comida7", 3));
			break;
			
		case 8:
			esteira.addChild(new Comidas("comida8", 3));
			break;
			
		case 9:
			esteira.addChild(new Comidas("comida9", 2));
			break;
			
		case 10:
			esteira.addChild(new Comidas("comida10", 2));
			break;
			
		case 11:
			esteira.addChild(new Comidas("comida11", 2));
			break;
			
		case 12:
			esteira.addChild(new Comidas("comida12", 4));
			break;
			
		case 13:
			esteira.addChild(new Comidas("comida13", 4));
			break;
			
		case 14:
			esteira.addChild(new Comidas("comida14", 4));
			break;
		
		case 15:
			esteira.addChild(new Comidas("comida15", 4));
			break;
			
		case 16:
			esteira.addChild(new Comidas("comida16", 2));
			break;
			
		}
	}
	
	var qtdToRender = (esteira.getNumChildren() < 4) ? esteira.getNumChildren() : 4;
	
	if(esteira.getNumChildren() > qtdToRender) {
		for(i = 4; i > 0; i--) {
			esteira.getChildAt(i).y = (canvas.height/2) - ( 15 * i ) + 20;
			esteira.getChildAt(i).x = (canvas.width/2) + 70; 
			esteira.getChildAt(i).scaleX = 1 - (i * 0.11);
			esteira.getChildAt(i).scaleY = 1 - (i * 0.11);
			
			esteiraContainer.addChild(esteira.getChildAt(i));
		}
	}
	
	else {	for(i = esteira.getNumChildren() - 1; i >= 0; i--) {
			esteira.getChildAt(i).y = (canvas.height/2) - ( 15 * i ) + 20;
			esteira.getChildAt(i).x = (canvas.width/2) + 70; 
			esteira.getChildAt(i).scaleX = 1 - (i * 0.11);
			esteira.getChildAt(i).scaleY = 1 - (i * 0.11);
			
			esteiraContainer.addChild(esteira.getChildAt(i));
			}
	}
	
	
	gameContainer.addChild(esteiraContainer, moveContainer);
	gameContainer.addChild(faberto2, gaberto2, aaberto2, paberto2, aaberto3);
	
}

function refreshEsteira() {
	
	var qtdToRender = (esteiraContainer.getNumChildren() < 4) ? esteiraContainer.getNumChildren() : 4;
	
	
	if(qtdToRender == 4){
		esteiraContainer.getChildAt(0).y = (canvas.height /3) + 40;
		esteiraContainer.getChildAt(0).x = (canvas.width/2) + 70; 
		esteiraContainer.getChildAt(0).scaleX = 0.4;
		esteiraContainer.getChildAt(0).scaleY = 0.4;
	}
	
	if(qtdToRender >= 4){
		
		for(var i = 0; i < qtdToRender; i++) {
			createjs.Tween.get(esteiraContainer.getChildAt(i)).to({y : (canvas.height/2) - (15 *  ( qtdToRender - i ) - 20),
																	x: (canvas.width/2) + 70,
											   scaleX : (1 - (( qtdToRender - i ) * 0.11)), 
										       scaleY : (1 - (( qtdToRender - i ) * 0.11))},
											   300,
											   createjs.Ease.Linear
											);
		}
		
	} else{
		
		for(var i = 0; i < qtdToRender; i++) {
			createjs.Tween.get(esteiraContainer.getChildAt(i)).to({y : (canvas.height/2) - (15 *  ( qtdToRender - i ) - 20), 
																	x: (canvas.width/2) + 70,
											   scaleX : (1 - (( qtdToRender - i ) * 0.11)), 
										       scaleY : (1 - (( qtdToRender - i ) * 0.11))},
											   300,
											   createjs.Ease.Linear
											);
		}
		
	}
	
}

Function.prototype.context = function(ctx) {
	
	var self = this;
	return function() {
		self.apply(ctx);
	};
	
};

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
	this.regX = bitmap.image.width/2;
	this.regY = bitmap.image.height/2;
	
	keyboard.addEventListener("keydown",this.handle_key);
};

Comidas.prototype.handle_key = function(key)
{
		
		switch(key.target) {
		
		
		//ESQUERDA
		case 37:
			if(esteiraContainer.getNumChildren() > 0){
					if(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).lado == 3 ) {
						if (esteira.getNumChildren() > 0) {
							esteiraContainer.addChildAt(esteira.getChildAt(esteira.getNumChildren()-1), 0);
						}
						refreshEsteira();
						move = null;
						move = esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1);
						esteiraContainer.removeChild(this.move);
						gaberto1.alpha = gaberto2.alpha = 1;
						contE ++;
						moveContainer.addChild(move);
						createjs.Tween.get(move).to({x : elem_e.x, y : elem_e.y}, 1000, createjs.Ease.backOut).set({visible:false}).call(onComplete).call(apagaEsquerda, [gaberto1 , gaberto2], this);
						pontos.text = pontos.text + 200*multiplicador;
						multiplicador += 0.1;
						multiTxt.text = Math.round(multiplicador * 10) /10;
					} else {
						createjs.Tween.get(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1)).to({  x : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).x - 10 },
																												   20,
																												   createjs.Ease.linear
																												).to({  x : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).x + 10},
																														   20,
																														   createjs.Ease.linear
																												).to({  x : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).x },
																															20,
																															createjs.Ease.linear
																												);
						multiplicador = 1;
						multiTxt.text = multiplicador;
					}
			}
			break;
			
		//DIREITA
		case 39:
			if(esteiraContainer.getNumChildren() > 0){
					if(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).lado == 2) {
						if (esteira.getNumChildren() > 0) {
							esteiraContainer.addChildAt(esteira.getChildAt(esteira.getNumChildren()-1), 0);
						}
						refreshEsteira();
						move = null;
						move = esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1);
						esteiraContainer.removeChild(this.move);
						faberto1.alpha = faberto2.alpha = 1;
						contD ++;
						moveContainer.addChild(move);
						createjs.Tween.get(move).to({x : 720}, 300, createjs.Ease.circOut).to({x : elem_d.x, y : elem_d.y}, 700, createjs.Ease.backOut).set({visible:false}).call(onComplete).call(apagaDireita, [faberto1 , faberto2], this);
						pontos.text = pontos.text + 200*multiplicador;
						multiplicador += 0.1;
						multiTxt.text = Math.round(multiplicador * 10) /10;
					} else {
						createjs.Tween.get(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1)).to({  x : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).x + 10 },
																													   20,
																													   createjs.Ease.linear
																													).to({  x : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).x - 10},
																															   20,
																															   createjs.Ease.linear
																															).to({  x : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).x },
																																	   20,
																																	   createjs.Ease.linear
																																	);
						multiplicador = 1;
						multiTxt.text = multiplicador;
					}
			}
		break;
			
		//CIMA
		case 38:
			if(esteiraContainer.getNumChildren() > 0){
					if(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).lado == 1) {
						if (esteira.getNumChildren() > 0) {
							esteiraContainer.addChildAt(esteira.getChildAt(esteira.getNumChildren()-1), 0);
						}
						refreshEsteira();
						move = null;
						move = esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1);
						esteiraContainer.removeChild(this.move);
						aaberto1.alpha = aaberto2.alpha = 1;
						contC ++;
						moveContainer.addChild(move);
						createjs.Tween.get(move).to({x : elem_c.x, y : elem_c.y}, 1000, createjs.Ease.backOut).set({visible:false}).call(onComplete).call(apagaCima, [aaberto1, aaberto2], this);
						pontos.text = pontos.text + 200*multiplicador;
						multiplicador += 0.1;
						multiTxt.text = Math.round(multiplicador * 10) /10;
					} else {
						createjs.Tween.get(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1)).to({  y : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).y + 10 },
																													   20,
																													   createjs.Ease.linear
																													).to({  y : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).y - 10},
																															   20,
																															   createjs.Ease.linear
																															).to({  y : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).y },
																																	   20,
																																	   createjs.Ease.linear
																																	);
						multiplicador = 1;
						multiTxt.text = multiplicador;
					}
			}
		break;
		
		//BAIXO
		case 40:
			if(esteiraContainer.getNumChildren() > 0){
					if(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).lado == 4) {
						if (esteira.getNumChildren() > 0) {
							esteiraContainer.addChildAt(esteira.getChildAt(esteira.getNumChildren()-1), 0);
						}
						refreshEsteira();
						move = null;
						move = esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1);
						esteiraContainer.removeChild(this.move);
						paberto1.alpha = 1; paberto2.alpha = 1;
						contB ++;
						moveContainer.addChild(move);
						createjs.Tween.get(move).to({x : 450}, 300, createjs.Ease.circOut).to({x : elem_b.x, y : elem_b.y}, 1000, createjs.Ease.backOut).set({visible:false}).call(onComplete).call(apagaBaixo, [paberto1, paberto2], this);
						pontos.text = pontos.text + 200*multiplicador;
						multiplicador += 0.1;
						multiTxt.text = Math.round(multiplicador * 10) /10;
					} else {
						createjs.Tween.get(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1)).to({  y : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).y + 10 },
																													   20,
																													   createjs.Ease.linear
																													).to({  y : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).y - 10},
																															   20,
																															   createjs.Ease.linear
																															).to({  y : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).y },
																																	   20,
																																	   createjs.Ease.linear
																																	);
						multiplicador = 1;
						multiTxt.text = multiplicador;
					}
			}
			break;
}
};

