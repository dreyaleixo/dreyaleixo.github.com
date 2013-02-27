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
var tituloCaixa = new createjs.Container();
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
	
	createjs.FlashPlugin.BASE_PATH = "assets/libs/";
	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashPlugin]);
	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashPlugin]);
	 
	
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

					{src:"assets/bg/Patucara_carregando1.png", id:"carregando1"},
					{src:"assets/bg/Patucara_carregando2.png", id:"carregando2"},
					{src:"assets/bg/Patucara_carregando3.png", id:"carregando3"},
					
				];
	
	callPreload(manifest);
	
	manifest = [
				//Sheets de todos os animais e do Patucara
				
				{src:"assets/images/sheets/patucara_Spritesheet.png", id:"patucara_sheet"},
				{src:"assets/images/sheets/bode_cabeca_spritsheet.png", id:"bode_cabeca_spritesheet"},
				{src:"assets/images/sheets/bode_corpo.png", id:"bode_corpo_spritesheet"},
				{src:"assets/images/sheets/bode_rabo_spritsheet.png", id:"bode_rabo_spritesheet"},
				{src:"assets/images/sheets/camelo_cabeca_spritsheet.png", id:"camelo_cabeca_spritesheet"},
				{src:"assets/images/sheets/camelo_corpo.png", id:"camelo_corpo_spritesheet"},
				{src:"assets/images/sheets/camelo_rabo_spritsheet.png", id:"camelo_rabo_spritesheet"},
				{src:"assets/images/sheets/croc_cabeca_spritsheet.png", id:"croc_cabeca_spritesheet"},
				{src:"assets/images/sheets/croc_corpo.png", id:"croc_corpo_spritesheet"},
				{src:"assets/images/sheets/croc_rabo_spritsheet.png", id:"croc_rabo_spritesheet"},
				{src:"assets/images/sheets/foca_cabeca_spritsheet.png", id:"foca_cabeca_spritesheet"},
				{src:"assets/images/sheets/foca_corpo_spritsheet.png", id:"foca_corpo_spritesheet"},
				{src:"assets/images/sheets/foca_rabo_spritsheet.png", id:"foca_rabo_spritesheet"},
				{src:"assets/images/sheets/tucano_cabeca_spritsheet.png", id:"tucano_cabeca_spritesheet"},
				{src:"assets/images/sheets/tucano_corpo_spritsheet.png", id:"tucano_corpo_spritesheet"},
				{src:"assets/images/sheets/tucano_rabo_spritsheet.png", id:"tucano_rabo_spritesheet"},
				{src:"assets/images/sheets/pavao_cabeca_spritsheet.png", id:"pavao_cabeca_spritesheet"},
				{src:"assets/images/sheets/pavao_corpo_spritsheet.png", id:"pavao_corpo_spritesheet"},
				{src:"assets/images/sheets/pavao_rabo_spritsheet.png", id:"pavao_rabo_spritesheet"},
				{src:"assets/images/sheets/peixe_cabeca_spritsheet.png", id:"peixe_cabeca_spritesheet"},
				{src:"assets/images/sheets/peixe_corpo_spritsheet.png", id:"peixe_corpo_spritesheet"},
				{src:"assets/images/sheets/peixe_rabo_spritsheet.png", id:"peixe_rabo_spritesheet"},
				{src:"assets/images/sheets/leao_cabeca_spritsheet.png", id:"leao_cabeca_spritesheet"},
				{src:"assets/images/sheets/leao_corpo.png", id:"leao_corpo_spritesheet"},
				{src:"assets/images/sheets/leao_rabo_spritsheet.png", id:"leao_rabo_spritesheet"},
				{src:"assets/images/sheets/macaco_cabeca_spritsheet.png", id:"macaco_cabeca_spritesheet"},
				{src:"assets/images/sheets/macaco_corpo.png", id:"macaco_corpo_spritesheet"},
				{src:"assets/images/sheets/macaco_rabo_spritsheet.png", id:"macaco_rabo_spritesheet"},
				{src:"assets/images/sheets/rino_cabeca_spritsheet.png", id:"rino_cabeca_spritesheet"},
				{src:"assets/images/sheets/rino_corpo.png", id:"rino_corpo_spritesheet"},
				{src:"assets/images/sheets/rino_rabo_spritsheet.png", id:"rino_rabo_spritesheet"},

				//-----------------------------------------
				{src:"assets/images/sheets/seta_Spritesheet.png", id:"seta_Spritesheet"},
				{src:"assets/bg/bg_titulo.png", id:"bgImg"},
				{src:"assets/bg/zona_alvo.png", id:"zona_alvo"},
				{src:"assets/images/cursor_combrilho.png", id:"cursor"},
				{src:"assets/images/cursor_combrilho.png", id:"cursor_img"},
				{src:"assets/images/mao_aberta.png", id:"mao_aberta_img"},
				{src:"assets/images/mao_fechada.png", id:"mao_fechada_img"},
				{src:"assets/images/bgmoff_bttn.png", id:"bgmoff_bttn"},
				{src:"assets/images/bgmon_bttn.png", id:"bgmon_bttn"},
				{src:"assets/images/bgm_bttn_hit.png", id:"bgm_hit"},
				{src:"assets/images/Criar_btn.png", id:"criarBixo_bttn"},
				{src:"assets/images/Criar_btn.png", id:"criarBixo_bttn_up"},
				{src:"assets/images/Criar_press.png", id:"criarBixo_bttn_press"},
				{src:"assets/images/Jogar_btn.png", id:"jogar_bttn"},
				{src:"assets/images/Jogar_btn.png", id:"jogar_bttn_up"},
				{src:"assets/images/Jogar_press.png", id:"jogar_bttn_press"},
				{src:"assets/images/ComoJogar_btn.png", id:"comoJogar_bttn"},
				{src:"assets/images/ComoJogar_btn.png", id:"comoJogar_bttn_up"},
				{src:"assets/images/ComoJogar_press.png", id:"comoJogar_bttn_press"},
				{src:"assets/images/sfxoff_bttn.png", id:"sfxoff_bttn"},
				{src:"assets/images/sfxon_bttn.png", id:"sfxon_bttn"},
				{src:"assets/images/sfx_bttn_hit.png", id:"sfx_hit"},
				{src:"assets/images/ingame/topo_madeira.png", id:"headerGame"},
				{src:"assets/images/ingame/barraampulheta.png", id:"ambAtivos"},
				{src:"assets/images/ingame/placa_ampulheta.png", id:"plcAmb"},
				{src:"assets/images/ingame/seta_ampulheta.png", id:"setaAmb"},
				{src:"assets/bg/deserto.png", id:"deserto_small"},
				{src:"assets/bg/aquario.png", id:"aquario_small"},
				{src:"assets/bg/arvores.png", id:"arvores_small"},
				{src:"assets/bg/fazendinha.png", id:"fazenda_small"},
				{src:"assets/bg/floresta.png", id:"floresta_small"},
				{src:"assets/bg/geleira.png", id:"geleira_small"},
				{src:"assets/bg/lago.png", id:"lago_small"},
				{src:"assets/bg/lama.png", id:"lama_small"},
				{src:"assets/bg/montanhas.png", id:"montanhas_small"},
				{src:"assets/bg/savana.png", id:"savana_small"},
				{src:"assets/images/ingame/Sombra.png", id:"sombra_animal"},
				{src:"assets/images/ingame/botao_cenario.png", id:"ambPrev"},
				{src:"assets/images/ingame/botao_cenario_hitbox.png", id:"ambPrev_hit"},
				{src:"assets/images/ingame/botao_cenario.png", id:"ambNext"},
				{src:"assets/images/ingame/botao_cenario_hitbox.png", id:"ambNext_hit"},
				{src:"assets/images/ingame/botao_up.png", id:"cbaUp"},
				{src:"assets/images/ingame/botao_down.png", id:"cbaDown"},
				{src:"assets/images/ingame/botao_up_press.png", id:"up_pressed"},
				{src:"assets/images/ingame/botao_down_press.png", id:"down_pressed"},
				{src:"assets/images/ingame/botao_up.png", id:"crpUp"},
				{src:"assets/images/ingame/botao_down.png", id:"crpDown"},
				{src:"assets/images/ingame/botao_up.png", id:"raboUp"},
				{src:"assets/images/ingame/botao_down.png", id:"raboDown"},
				{src:"assets/images/botao_pausar.png", id:"pause_bttn"},
				{src:"assets/images/botao_duvida.png", id:"duvida_bttn"},
				{src:"assets/images/botao_duvida_hit.png", id:"duvida_hit"},
				{src:"assets/images/botao_play.png", id:"play_bttn"},
				{src:"assets/images/balaozinho.png", id:"balao_patu"},
				{src:"assets/images/Frame.png", id:"frameImprimir"},
				
				//Coisas do mapa que serao utilizadas antes do jogo comecar

				{src:"assets/mapaPreGame/mapa.png", id:"mapa_bg"},
				{src:"assets/mapaPreGame/entrar.png", id:"enterZoo"},

				//Imagens do Criar Meu Bicho

				{src:"assets/images/criarBixo/Avancar_btn.png", id:"avcCriar_bttn"},
				{src:"assets/images/criarBixo/Avancar_press.png", id:"avcCriar_bttn_press"},
				{src:"assets/images/criarBixo/Criar meu bicho.png", id:"frameCriar"},
				{src:"assets/images/criarBixo/retornar_btn.png", id:"retornar_bttn"},
				{src:"assets/images/criarBixo/retornar_press.png", id:"retornar_bttn_press"},
				{src:"assets/images/criarBixo/voltar_btn.png", id:"criarVoltar_bttn"},
				{src:"assets/images/criarBixo/voltar_press.png", id:"criarVoltar_bttn_press"},
				
				//Arquivos das telas de Win/Lose

				{src:"assets/images/ingame/winlose/Derrota.png", id:"derrota_pop"},
				{src:"assets/images/ingame/winlose/Vitoria.png", id:"vitoria_pop"},
				{src:"assets/images/ingame/winlose/ok_btn.png", id:"ok_bttn"},
				{src:"assets/images/ingame/winlose/ok_press.png", id:"ok_bttn_press"},
				{src:"assets/images/ingame/winlose/sim_btn.png", id:"sim_bttn"},
				{src:"assets/images/ingame/winlose/sim_press.png", id:"sim_bttn_press"},
				{src:"assets/images/ingame/winlose/nao_btn.png", id:"nao_bttn"},
				{src:"assets/images/ingame/winlose/nao_press.png", id:"nao_bttn_press"},
				
				//Arquivos do mapa ante-jogo
				{src:"assets/images/mapa.png", id:"mapa_zoo"},
				{src:"assets/images/entrar.png", id:"entrar_bttn"},
				
				//Telas do Tutorial
				{src:"assets/images/Tutorial.png", id:"tuto_screen"},
				{src:"assets/images/tutorial_1_4.png", id:"tuto1"},
				{src:"assets/images/tutorial_2_4.png", id:"tuto2"},
				{src:"assets/images/tutorial_3_4.png", id:"tuto3"},
				{src:"assets/images/tutorial_4_4.png", id:"tuto4"},
				{src:"assets/images/tuto_next_bttn_press.png", id:"tuto_next_bttn_press"},
				{src:"assets/images/tuto_next_bttn.png", id:"tuto_next_bttn"},
				{src:"assets/images/tuto_prev_bttn_press.png", id:"tuto_prev_bttn_press"},
				{src:"assets/images/tuto_prev_bttn.png", id:"tuto_prev_bttn"},
				
				//Dummy para nao buggar quando o pc carrega arquivos muito rapidos
				{src:"assets/images/botao_pausar.png", id:"dummy_pause"}
				
			];
	
		//Arquivos de Som
		soundManifest = [
			{src:"assets/sounds/musics/1-tema-zoologico-patucara.mp3|assets/sounds/musics/1-tema-zoologico-patucara.ogg", id:"bg_music"},
			
			{src:"assets/sounds/sfx/bode.ogg|assets/sounds/sfx/bode.mp3", id:"som_bode"},
			{src:"assets/sounds/sfx/botao-menu.ogg|assets/sounds/sfx/botao-menu.mp3", id:"som_bttn_menu"},
			{src:"assets/sounds/sfx/botao-selecao-animais.ogg|assets/sounds/sfx/botao-selecao-animais.mp3", id:"som_troca_animal"},
			{src:"assets/sounds/sfx/camelo.ogg|assets/sounds/sfx/camelo.mp3", id:"som_camelo"},
			{src:"assets/sounds/sfx/foca.ogg|assets/sounds/sfx/foca.mp3", id:"som_foca"},
			{src:"assets/sounds/sfx/leao.ogg|assets/sounds/sfx/leao.mp3", id:"som_leao"},
			{src:"assets/sounds/sfx/crocodilo.ogg|assets/sounds/sfx/crocodilo.mp3", id:"som_croc"},
			{src:"assets/sounds/sfx/macaco.ogg|assets/sounds/sfx/macaco.mp3", id:"som_macaco"},
			{src:"assets/sounds/sfx/pavao.ogg|assets/sounds/sfx/pavao.mp3", id:"som_pavao"},
			{src:"assets/sounds/sfx/peixe.ogg|assets/sounds/sfx/peixe.mp3", id:"som_peixe"},
			{src:"assets/sounds/sfx/rinoceronte.ogg|assets/sounds/sfx/rinoceronte.mp3", id:"som_rino"},
			{src:"assets/sounds/sfx/tela-deslizando.ogg|assets/sounds/sfx/tela-deslizando.mp3", id:"som_deslize"},
			{src:"assets/sounds/sfx/tucano.ogg|assets/sounds/sfx/tucano.mp3", id:"som_tucano"},
			
			//Sons de acerto e erro
			{src:"assets/sounds/sfx/som-acerto.ogg|assets/sounds/sfx/som-acerto.mp3", id:"som_acerto"},
			{src:"assets/sounds/sfx/som-erro.ogg|assets/sounds/sfx/som-erro.mp3", id:"som_erro"},
		];
		createjs.Sound.registerManifest(soundManifest);
		
	//Instances dos Sons

	som_bttn_menu = createjs.Sound.play("som_bttn_menu");
	som_troca_animal = createjs.Sound.play("som_troca_animal");
	som_deslize = createjs.Sound.play("som_deslize");
	som_acerto = createjs.Sound.play("som_acerto");
	som_erro = createjs.Sound.play("som_erro");
	som_bode = createjs.Sound.play("som_bode");
	som_camelo = createjs.Sound.play("som_camelo");
	som_foca = createjs.Sound.play("som_foca");
	som_leao = createjs.Sound.play("som_leao");
	som_croc = createjs.Sound.play("som_croc");
	som_macaco = createjs.Sound.play("som_macaco");
	som_pavao = createjs.Sound.play("som_pavao");
	som_peixe = createjs.Sound.play("som_peixe");
	som_rino = createjs.Sound.play("som_rino");
	som_tucano = createjs.Sound.play("som_tucano"),
	
	callPreload(manifest);
	
	//Ticker do FPS que sera utilizado para controlar a velocidade do jogo
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(stage);
	
}



	