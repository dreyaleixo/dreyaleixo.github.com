var stage;

var fpsText;

var pontos;
var multiplicador = 1;
var qtdElementos = 20;

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
	stage.addChild(fpsText);
	
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
	
	pontos = new createjs.Text("0", "bold 36px Arial");
	pontos.x = 930;
	pontos.y = 710;
	stage.addChild(pontos);
	
	stage.addChild(elementosContainer, setasContainer);
}

function handleChange(event) {
	alert("ok");
}