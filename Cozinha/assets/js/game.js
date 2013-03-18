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
		switch(Math.round(Math.random())) {
		case 0:
			esteira.addChild(Circulo = circulo.clone(true));
			break;
			
		case 1:
			esteira.addChild(Triangulo = triangulo.clone(true));
			break;
		}
	}
	
	var qtdToRender = (esteira.getNumChildren() < 10) ? esteira.getNumChildren() : 10;
	
	if(esteira.getNumChildren() > qtdToRender) {
		for(i = 9; i >= 0; i--) {
			esteira.getChildAt(i).y = (canvas.height / 2) - ( 30 * i );
			esteira.getChildAt(i).scaleX = 1 - (i * 0.06);
			esteira.getChildAt(i).scaleY = 1 - (i * 0.06);
			
			esteiraContainer.addChild(esteira.getChildAt(i));
		}
	}
	
	else {	for(i = esteira.getNumChildren() - 1; i >= 0; i--) {
			esteira.getChildAt(i).y = (canvas.height / 2) - ( 30 * i );
			esteira.getChildAt(i).scaleX = 1 - (i * 0.06);
			esteira.getChildAt(i).scaleY = 1 - (i * 0.06);
			
			esteiraContainer.addChild(esteira.getChildAt(i));
			}
	}
	
	
	stage.addChild(esteiraContainer);
}

function refreshEsteira() {
	
	var qtdToRender = (esteiraContainer.getNumChildren() < 10) ? esteiraContainer.getNumChildren() : 10;
	
	if(qtdToRender == 10){
		esteiraContainer.getChildAt(0).y = (canvas.height / 10);
		esteiraContainer.getChildAt(0).scaleX = 0.4;
		esteiraContainer.getChildAt(0).scaleY = 0.4;
	}
	
	if(qtdToRender >= 10){
		
		for(var i = 0; i < qtdToRender; i++) {
			createjs.Tween.get(esteiraContainer.getChildAt(i)).to({y : canvas.height/10 + (30 *  i), 
											   scaleX : (0.4 + (i * 0.06)), 
										       scaleY : (0.4 + (i * 0.06))},
											   300,
											   createjs.Ease.Linear
											);
		}
		
	} else{
		
		for(var i = 0; i < qtdToRender; i++) {
			createjs.Tween.get(esteiraContainer.getChildAt(i)).to({y : (canvas.height/2 + 30) - (30 *  ( qtdToRender - i )), 
											   scaleX : (1 - (( qtdToRender - i ) * 0.05)), 
										       scaleY : (1 - (( qtdToRender - i ) * 0.05))},
											   300,
											   createjs.Ease.Linear
											);
		}
		
	}
}