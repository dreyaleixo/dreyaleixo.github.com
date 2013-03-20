var stage;

var fpsText;

var pontos;
var multiplicador = 1;
var qtdElementos = 50;
var gameContainer = new createjs.Container();

function main() {
	stage = new createjs.Stage(canvas);
	
	setupEsteira(qtdElementos);
		setupStage(stage);
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
	// FPS
	fpsText = new createjs.Text(null, "bold 36px Arial");
	fpsText.x = 10;
	fpsText.y = 10;
	gameContainer.addChild(fpsText);
	
	setaEsquerda = seta.clone(true);
	setaDireita = seta.clone(true);
	setaDireita.rotation = 180;
	
	elem_e = circulo.clone(true);
	elem_e.x = elem_e.regX + 80;
	elem_d = triangulo.clone(true);
	elem_d.x = stage.canvas.width - triangulo.regX - 80;
	elementosContainer = new createjs.Container();
	elementosContainer.addChild(elem_e, elem_d);
	
	setaEsquerda.x = setaEsquerda.regX + 260;
	setaDireita.x = stage.canvas.width - setaDireita.regX - 260;
	setasContainer = new createjs.Container();
	setasContainer.addChild(setaEsquerda, setaDireita);
	
	pontos = new createjs.Text(0, "bold 36px Arial");
	pontos.x = canvas.width/2;
	pontos.y = 620;
	gameContainer.addChild(pontos);
	
	multiTxt = new createjs.Text(multiplicador, "bold 36px Arial");
	multiTxt.x = canvas.width/2 - 300;
	multiTxt.y = 620;
	gameContainer.addChild(multiTxt);
	
	gameContainer.addChild(elementosContainer, setasContainer);
	
	stage.addChild(gameContainer);
}

function handleChange(event) {
	alert("ok");
}