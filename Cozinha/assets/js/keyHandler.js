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

document.onkeyup = function(e) {
	
	switch(e.keyCode) {
		
		
		//ESQUERDA
		case 37:
			if(esteiraContainer.getNumChildren() > 0){
					if(elem_e.image.src == esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).image.src) {
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
					if(elem_d.image.src == esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).image.src) {
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
						createjs.Tween.get(move).to({x : elem_d.x, y : elem_d.y}, 1000, createjs.Ease.backOut).set({visible:false}).call(onComplete).call(apagaDireita, [faberto1 , faberto2], this);
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
					if(elem_c.image.src == esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).image.src) {
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
						createjs.Tween.get(move).to({x : elem_c.x, y : elem_c.y- 10}, 1000, createjs.Ease.backOut).set({visible:false}).call(onComplete).call(apagaCima, [aaberto1, aaberto2], this);
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
					if(elem_b.image.src == esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).image.src) {
						if (esteira.getNumChildren() > 0) {
							esteiraContainer.addChildAt(esteira.getChildAt(esteira.getNumChildren()-1), 0);
						}
						refreshEsteira();
						move = null;
						move = esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1);
						esteiraContainer.removeChild(this.move);
						paberto.alpha = 1;
						contB ++;
						moveContainer.addChild(move);
						createjs.Tween.get(move).to({x : elem_b.x, y : elem_b.y}, 1000, createjs.Ease.backOut).set({visible:false}).call(onComplete).call(apagaBaixo, [paberto], this);
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
