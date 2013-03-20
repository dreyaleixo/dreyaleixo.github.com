/*

	Script que vai carregar e entender e interpretar os comandos do mouse durante todo o jogo.closed
		Andrey Pereira Aleixo

*/

//Funcao que recebe um evento de mouse "e" e interpreta em qual objeto ele clicou, baseado no seu event.target.id
function handleClick(e){

	switch(e.target.id){
		
		//BGM 
		case "bgm_hit":
			tkr = createjs.Ticker.getTicks();
			if( (tkr - tkr_old) > 30){
				if(interface_.contains(bgmoff_bttn)){
					som_bttn_menu.stop();
					som_bttn_menu.play();
					mainMusic.play();
						interface_.removeChild(bgmoff_bttn);
						interface_.addChild(bgmon_bttn);
						tkr_old = tkr;
				}
				else if(interface_.contains(bgmon_bttn)){
					som_bttn_menu.stop();
					som_bttn_menu.play();
					mainMusic.stop();
						interface_.removeChild(bgmon_bttn);
						interface_.addChild(bgmoff_bttn);
						tkr_old = tkr;
				}
			} else { break; }
		break;
		
		//SFX 
		case "sfx_hit":
			if(interface_.contains(sfxoff_bttn)){
				som_bttn_menu.stop();
				som_bttn_menu.play();
				Howler.unmute();
					interface_.removeChild(sfxoff_bttn);
					interface_.addChild(sfxon_bttn);
			}
			else if(interface_.contains(sfxon_bttn)){
				som_bttn_menu.stop();
				som_bttn_menu.play();
				Howler.mute();
					interface_.removeChild(sfxon_bttn);
					interface_.addChild(sfxoff_bttn);
			}
		break;
		
		//IDS DOS OBJETOS QUE SAO UTLIZADOS NO MENU PRINCIPAL
		//
		//-----------------------------------------------------
		
		//Criar Bixo
		case "criarBixo_bttn":
			e.target.image.src = criarBixo_bttn_press.image.src;
			som_bttn_menu.stop();
			som_bttn_menu.play();
			e.onMouseUp = function(){ e.target.image.src = criarBixo_bttn_up.image.src; criarBixo_main();};
		break;
		
		//Como Jogar
		case "comoJogar_bttn":
			e.target.image.src = comoJogar_bttn_press.image.src;
			som_bttn_menu.stop();
			som_bttn_menu.play();
			e.onMouseUp = function(){ e.target.image.src = comoJogar_bttn_up.image.src; montaTuto();};
		break;
		
		//JOGAR
		case "jogar_bttn":
			e.target.image.src = jogar_bttn_press.image.src;
			som_bttn_menu.stop();
			som_bttn_menu.play();
			e.onMouseUp = function(){ e.target.image.src = jogar_bttn_up.image.src; mapaPreJogo();};
		break;
		
		//IDS DOS OBJETOS UTLIZADOS NO LOOP DO GAME PRINCIPAL
		//
		//-----------------------------------------------------
		
		//pause_bttn
		case "pause_bttn":
			som_bttn_menu.stop();
			som_bttn_menu.play();
			chamaPause();
		break;
			
		//play_bttn
		case "play_bttn":
			som_bttn_menu.stop();
			som_bttn_menu.play();
			chamaPlay();
		break;
		
		//duvida_bttn
		case "duvida_hit":
			som_bttn_menu.stop();
			som_bttn_menu.play(); 
			montaTuto();
		break;
		
		//FUNCOES QUE MANIPULAM OS BOTOES DE CONTROLE DO ANIMAL
		//raboUp
		case "raboUp": 
			som_troca_animal.stop();
			som_troca_animal.play();
			e.target.image.src = up_pressed.image.src;
			trocaRabo(idxX, 1);
			e.onMouseUp = function(){ e.target.image.src = crpUp.image.src;};
			
		break;

		//raboDown
		case "raboDown":
			som_troca_animal.stop();
			som_troca_animal.play();
			e.target.image.src = down_pressed.image.src;
			trocaRabo(idxX, -1);
			e.onMouseUp = function(){ e.target.image.src = crpDown.image.src;};
		break;
		
		//crpUp
		case "crpUp": 
			som_troca_animal.stop();
			som_troca_animal.play();
			e.target.image.src = up_pressed.image.src;
			trocaCorpo(idxY, 1);
			e.onMouseUp = function(){ e.target.image.src = cbaUp.image.src;};
		break;
		
		//crpDown
		case "crpDown": 
			som_troca_animal.stop();
			som_troca_animal.play();
			e.target.image.src = down_pressed.image.src;
			trocaCorpo(idxY, -1);
			e.onMouseUp = function(){ e.target.image.src = cbaDown.image.src;};
		break;
		
		//cbaUp
		case "cbaUp": 
			som_troca_animal.stop();
			som_troca_animal.play();
			e.target.image.src = up_pressed.image.src;
			trocaCabeca(idxZ, 1);
			e.onMouseUp = function(){ e.target.image.src = raboUp.image.src;};
		break;
		
		//cbaDown
		case "cbaDown": 
			som_troca_animal.stop();
			som_troca_animal.play();
			e.target.image.src = down_pressed.image.src;
			trocaCabeca(idxZ, -1);
			e.onMouseUp = function(){ e.target.image.src = raboDown.image.src;};
		break;
		
		case "ambNext_hit":
			som_deslize.stop();
			som_deslize.play();
			if(ambAtivo == (_dificuldade - 1)) { break; }
			if((createjs.Tween.hasActiveTweens()) == 0){
				
				createjs.Tween.get(moveArea).to({x: ( moveArea.x - 900)}, 1200, createjs.Ease.circOut);
				ambAtivo ++;
				gerarMontando();
			}
			interface_.removeChild(ambNext, ambNext_hit);
		break;

		
		//Casos das telas de Win e Lose do jogo
		//LOSE
		case "ok_bttn":
			som_bttn_menu.stop();
			som_bttn_menu.play();
			srcold = ok_bttn.image.src;
			ok_bttn.image.src = ok_bttn_press.image.src;
			e.onMouseUp = function(e){ ok_bttn.image.src = srcold; zooGame(); timeOffset = Math.floor(createjs.Ticker.getTime());};
		break;
		
		//X DA JANELA 
		case "voltaMenu":
			som_bttn_menu.stop();
			som_bttn_menu.play();
			e.onMouseUp = function(e){ chamaMenu(); };
		break;
		
		//WIN
		case "sim_bttn":
			som_bttn_menu.stop();
			som_bttn_menu.play();
			srcold = sim_bttn.image.src;
			sim_bttn.image.src = sim_bttn_press.image.src;
			e.onMouseUp = function(e){ sim_bttn.image.src = srcold; _dificuldade++; zooGame(); timeOffset = Math.floor(createjs.Ticker.getTime()); 
			mainMusic.play(); };
		break;
		
		case "nao_bttn":
			som_bttn_menu.stop();
			som_bttn_menu.play();
			srcold = nao_bttn.image.src;
			nao_bttn.image.src = nao_bttn_press.image.src;
			e.onMouseUp = function(e){ nao_bttn.image.src = srcold; chamaMenu(); };
		break;
		
		//Casos do tutorial
		case "tiraTuto":
			som_bttn_menu.stop();
			som_bttn_menu.play();
			tutoArea.removeAllChildren();
			if(stage.contains(gameCaixa)){
				gameCaixa.removeChild(tutoArea);
				gameCaixa.addChild(cursor);
				gameCaixa.onTick = atualiza;
			}
			else if(stage.contains(tituloCaixa)){
				tituloCaixa.removeChild(tutoArea);
				tutoArea.addChild(cursor);
				tituloCaixa.onTick = menuAtualiza;
				
			}
			for(this.x = 0; this.x < 4; this.x++){
				
				tutos_.getChildAt(this.x).alpha = 0;
				
			}
			tempoAntigo = tempoDecorrido;
			timeOffset = Math.floor(Math.floor(createjs.Ticker.getTime()));
		break;
		
		case "tuto_next_bttn":
			som_bttn_menu.stop();
			som_bttn_menu.play();
			srcold = tuto_next_bttn.image.src;
			tuto_next_bttn.image.src = tuto_next_bttn_press.image.src;
			e.onMouseUp = function(e){ 
				tuto_next_bttn.image.src = srcold;
				trocaTuto(1);
				};
		break; 
		
		case "tuto_prev_bttn":
			som_bttn_menu.stop();
			som_bttn_menu.play();
			srcold = tuto_prev_bttn.image.src;
			tuto_prev_bttn.image.src = tuto_prev_bttn_press.image.src;
			e.onMouseUp = function(e){ tuto_prev_bttn.image.src = srcold;
			trocaTuto(-1);
			};
		break;
	
	}
	
}

//Funcao que vai substituir a imagem quando os botoes de troca de rabo/corpo/cabeca sao pressionados
function trocaImagem(e, idx, imgProx){
	
	animal_montando.removeChildAt(idx); e.image = imgProx.image; animal_montando.addChildAt(e, idx);
	gerarAtual();
	
}

//Funcao para mover o animal atual para o stage
function arrastaMonstro(evt){
	
	cursor.image.src = mao_fechada_img.image.src;
	
	sons.getChildAt(idxZ).stop();
	sons.getChildAt(idxZ).play();
	
	var offset = {x : evt.target.x - evt.stageX,
				  y : evt.target.y - evt.stageY};
	
	evt.onMouseMove = function(ev) {
	
		ev.target.x = ev.stageX + offset.x;
		ev.target.y = ev.stageY + offset.y;
		
	};
	
	evt.onMouseUp = function(ev){
		cursor.image.src = cursor_img.image.src;
		p = zonasAlvo_.getChildAt(ambAtivo).globalToLocal(stage.mouseX, stage.mouseY);
		if(zonasAlvo_.getChildAt(ambAtivo).hitTest(p.x, p.y)){
			confereAnimal(ev);
		} else { 
			createjs.Tween.get(interface_.getChildAt(interface_.getChildIndex(animal_atual))).to({x:660, y:95}, 800, createjs.Ease.circOut); 
		}

	};
	
}

//Funcoes que controlar o cursor personalizado do game
function maoCursor_ativa(e){
	
	cursor.image.src = mao_aberta_img.image.src;
	
}

function maoCursor_desativa(e){
	
	cursor.image.src = cursor_img.image.src;
	
}

//Funcao que pausa o game e chama a tela de pause
function chamaPause(){
	
	gameCaixa.onTick = null;
	gameCaixa.removeChild(cursor);
	pauseArea.addChild(pauseOverlay, cursor);
	stage.addChild(pauseArea);
	pauseArea.swapChildrenAt(0, 1);
	pauseArea.onTick = pauseAtualiza;
	pauseOverlay.onMouseOver = function(){ };
	pauseOverlay.onClick = function(){ };
	mainMusic.pause();
	
}

//Funcao que da um playo game e chama a tela de game
function chamaPlay(){
	
	gameCaixa.onTick = atualiza;
	pauseArea.removeChild(cursor);
	gameCaixa.addChild(cursor);
	stage.removeChild(pauseArea);
	pauseArea.onTick = null;
	pauseOverlay.onMouseOver = null;
	pauseOverlay.onClick = null;
	tempoAntigo = tempoDecorrido;
	timeOffset = Math.floor(Math.floor(createjs.Ticker.getTime()));
	mainMusic.play();
	
}