/*
 * 			Script principal do jogo Tem crianca na Cozinha
 * 					Andrey Pereira Aleixo
 * 
 * 
 */

var stage;

var fpsText;

var pontos;
var multiplicador = 1;

var qtdElementos = 50;

var gameContainer = new createjs.Container();
var moveContainer = new createjs.Container();

function main() {
	stage = new createjs.Stage(canvas);

	setupStage(stage);
		setupEsteira(qtdElementos);
			setupTicker(update);	
			
	createjs.Touch.enable(stage);

}

function update() {
	// FPS
	fpsText.text = Math.round(createjs.Ticker.getMeasuredFPS());
	stage.update();
}

function setupTicker(update) {	
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", update);
}



function setupStage(stage) {
	
	//Set Bg
	gameContainer.addChild(new createjs.Bitmap(queue.getResult("bg_cozinha")));
	
	// FPS
	fpsText = new createjs.Text(null, "bold 36px Arial");
	fpsText.x = 10;
	fpsText.y = 10;
	gameContainer.addChild(fpsText);

	//Elementos destino dos produtos que sao controlados
	elem_e = circulo.clone(true);
	elem_e.x = elem_e.regX + 80;
	elem_d = triangulo.clone(true);
	elem_d.x = 725;
	elem_d.y = 550;
	elem_b = baixo.clone(true);
	elem_b.y = 520;
	elem_c = cima.clone(true);
	elem_c.y = 140;
	elem_c.x = 525;
	
	elementosContainer = new createjs.Container();
	elementosContainer.addChild(elem_e, elem_d, elem_c, elem_b);
	elementosContainer.alpha = 0;
	
	//Pontos do Jogo
	pontos = new createjs.Text(0, "bold 36px Arial");
	pontos.x = canvas.width/2;
	pontos.y = 620;
	gameContainer.addChild(pontos);
	
	//Multiplicador dos Pontos
	multiTxt = new createjs.Text(multiplicador, "bold 36px Arial");
	multiTxt.x = canvas.width/2 - 300;
	multiTxt.y = 620;
	gameContainer.addChild(multiTxt);
	
	gameContainer.addChild(faberto1, gaberto1, aaberto1, elementosContainer);
	gaberto1.x = 190; gaberto2.x = 218;
	faberto1.x = 743; faberto2.x = 750;
	aaberto1.x = 530; aaberto2.x = 525; 
	paberto.x = 440;
	
	gaberto1.y = 463.5; gaberto2.y = 443.5;
	faberto1.y = 583.5; faberto2.y = 561.5;
	aaberto1.y = 139.5; aaberto2.y = 129.5; 
	paberto.y = 444.5;
	
	faberto1.alpha = faberto2.alpha = 0;
	gaberto1.alpha = gaberto2.alpha = 0;
	aaberto1.alpha = aaberto2.alpha = 0;
	paberto.alpha = 0;
	
	stage.addChild(gameContainer);
}

function handleChange(event) {
	alert("ok");
}

Function.prototype.context = function(ctx) {
	
	var self = this;
	return function() {
		self.apply(ctx);
	}
	
}