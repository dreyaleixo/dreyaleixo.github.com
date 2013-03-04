/* 

	Script que funciona para carregar arquivos e organizalos
		Andrey Pereira Aleixo

*/

//Variavel para comparacao para ver se todos os arquivos foram carregados
var totalLoaded = 0;
var carregando1, carregando2, carregando3;
var loaders = new createjs.Container();

//Funcao que carrega o manifesto "m" e carrega os arquivos.
function callPreload(m){
	
	this.m = m;
	preloader.loadManifest(this.m);
}

//Funcao que vai trabalhar enquanto os arquivos estao sendo carregados
function handleProgress(event){
		
//	//Tela de Load
//	if(carregando1 != null
//		&& !loadCaixa.contains(carregando1)){
//		
//		loadCaixa.addChild(carregando1);
//		underScale(loadCaixa);
//		stage.addChild(loadCaixa);
//		
//	}
}

//Funcao que eh ativada quando todos os arquivos sao carregados
function handleComplete(event){
	
		stage.removeAllChildren();
		stage.addChild(carregando1);
		underScale(stage);
		
		manifest = null;
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

						{src:"assets/images/mapaPreGame/mapa.png", id:"mapa_bg"},
						{src:"assets/images/mapaPreGame/entrar.png", id:"enterZoo"},
						{src:"assets/images/mapaPreGame/bussola.png", id:"bussola"},
						{src:"assets/images/mapaPreGame/plaquinha_mapa.png", id:"plaquinha_mapa"},

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

		preloader.onComplete = callMenu;
		callPreload(manifest);
			
//		//Se a quantidade de arquivos carregados eh igual ao tamanho do manifesto, chama o menu
//		if((m.length + 1) == totalLoaded){
//			
//					chamaMenu();
//					this.totalLoaded = 0;
//		}
		
}

//Funcao que eh chamada quando um arquivo eh carregado
function handleLoadComplete(event){
	
//	totalLoaded++;

}

//Funcao que trabalha com o carregamento de arquivos
function handleFileLoad(event){
	
	switch(event.type){
		
		case createjs.PreloadJS.IMAGE:
			//Carregou uma imagem
			var img = new Image();
			img.src = event.src;
			img.onload = handleLoadComplete();
			window[event.id] = new createjs.Bitmap(img);
			
			//centralizando o ponto de registro das imagens (Para ser mais facil o posicionamento no palco)
			window[event.id].regY = img.height/2;
			window[event.id].regX = img.width/2;
			window[event.id].x = canvas.width/2;
			window[event.id].y = canvas.height/2;
			window[event.id].id = event.id;
		break;
	
	}
	
}

function callMenu(){
	
	chamaMenu();
	
}