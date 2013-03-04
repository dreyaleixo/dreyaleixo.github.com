/*
	Funcao principal de carregamento e inicializacao do canvas e do stage
			Andrey Aleixo


*/

//Variaveis que vao carregar o palco e o canvas
var ctx, stage, canvas, atualiza;

//Variaveis globais
var bgmon_bttn, bgmoff_bttn, sfxon_bttn, sfxoff_bttn, greyBg;
var zona_alvo;

//Inicializacao de todas as "caixas" do jogo
var ajudaCaixa = new createjs.Container();
var gameCaixa = new createjs.Container();
var loadCaixa = new createjs.Container();

//Variaveis usadas para controle de objetos, preloader e um ticker
var tkr, tkr_old;
var preloader;
var manifest;

//Variaveis Menu
var titulo, loadText, comoJogar_bttn, jogar_bttn, criarBixo_bttn;
var som_bttn, bg_music;

//Variaveis Menu Ajuda
var back_bttn, ajudaTxt, ajudaTit;
var ajudaPrevPg, ajudaProxPg, ajudaPgs;

//Variavel usada para controlar formas dos botoes
var srcold;

function main() {
	
	//Inicia o canvas e o palco no HTML, e tambem inicia a captura de movimentos do mouse
	canvas = document.getElementById("cnvs");
	stage = new createjs.Stage(canvas);
	ctx = canvas.getContext("2d");
	stage.mouseEventsEnabled = true;
	stage.enableMouseOver();
	
	//Preloader, que sera utilizado para carregar todos os arquivos e instalar o plugin de som
	preloader = new createjs.PreloadJS();
	preloader.installPlugin(createjs.Sound);
	preloader.onFileProgress = handleProgress;
	preloader.onComplete = handleComplete;
	preloader.onFileLoad = handleFileLoad;
	
	//Inicia o Graphics do CreateJs
	g = new createjs.Graphics();
		
	//MANIFESTO PARA OS ASSETS DO LOADING
	manifest = [

					{src:"assets/bg/Carregando.gif", id:"carregando1"},
					
				];
	
	callPreload(manifest);

	initSounds();
	
	//Ticker do FPS que sera utilizado para controlar a velocidade do jogo
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(stage);
	
}



	