/*

	Funcao do jogo Principal
		Andrey Pereira Aleixo

*/

/*  VARIAVEIS SENDO UTLIZADAS DENTRO DO JOGO */
//Variaveis do Jogo
var timeOffset, tempoDecorrido = 0;
var tempoAntigo = 0;
var pause_bttn; var play_bttn;
var win, lose;
var zooAlvo;
var _dificuldade = 3;
var animais_completos = 0;
var patucara_sprite;
var ss;
var patucara;
var completouAnimal = false;
var setaScala = false;
var tempoRestante = 180;
var gameScaler = 0.05;
var placaScala = 0.01;
var animalScala = 0.01;

//Containeres do Menu e da interface
var pauseMenu = new createjs.Container();
var gameOver = new createjs.Container();
var interface_ = new createjs.Container();
var moveArea = new createjs.Container();
var pauseArea = new createjs.Container();
var mapaArea = new createjs.Container();
var loseGame = new createjs.Container();
var winGame = new createjs.Container();

//Backgrounds
var headerGame;
var aquario_small, arvores_small, deserto_small, lago_small, montanhas_small, 
	fazenda_small, floresta_small, geleira_small, lama_small, savana_small;

//Variaveis do jogo, controle do mosntro
var up_pressed, down_pressed;

//Rabo
var raboUp, raboDown;
var raboAtual;

//Corpo
var crpUp, crpDown;
var crpAtual;

//Cabeca
var cbaUp, cbaDown;
var cbaAtual;

//Controle do ambiente
var ambNext, ambPrev;
var ambNext_hit, ambPrev_hit;
var duvida_hit, bgm_hit, sfx_hit;

//Vars para trocas dos animais
var idxX, idxY, idxZ;

//Funcao que eh chamada quando o jogo eh inicializado
function gameNovo(){
	
	 organizaAnimais(); gerarMontando(); gerarAmbientes(_dificuldade, null); gerarAlvo(_dificuldade);
	
}

//Funcao que vai instanciar e colocar na tela os botoes, bgs e vai chamar as funcoes de gameloopss
function zooGame(){
	
	//Funcoes de reboot no jogo
	zonasAlvo_.removeAllChildren();
	completos_.removeAllChildren();
	_sombras.removeAllChildren();
	stage.removeAllChildren();
	
	gameCaixa.removeAllChildren();
	ambAtivo = 0;
	moveArea.x = 0;
	tempoDecorrido = 0;
	animais_completos = 0;
	tempoAntigo = 0;

	initSheets();
	initGame_vars();
	
	interface_.removeAllChildren();
	//Coloca tudo no gameCaixa e instancia eles no stage
	this.interface_.addChild(headerGame,
							ambAtivos,
							pause_bttn,
							duvida_bttn,
							duvida_hit,
							crpDown, crpUp, cbaDown, cbaUp, raboDown, raboUp,
							up_pressed, down_pressed);
	
	underScale(interface_);
	this.interface_.addChild(animal_montando,
							patucara,
							bgmon_bttn,
							sfxon_bttn,
							bgm_hit,
							sfx_hit,
							balao_patu);
	
	this.gameCaixa.addChild(moveArea,
							b,
							interface_);
	this.pauseArea.addChild(pauseOverlay, play_bttn);
	
	underScale(pauseArea);
	
	
	gameNovo();
	animal_atual.onPress = arrastaMonstro;
	
	this.stage.addChild(gameCaixa);
	gameCaixa.onTick = atualiza;
	
	this.ambAtivo = 0;
	
	moveArea.addChild(_sombras);
	moveArea.addChild(completos_);
	gameCaixa.addChild(cursor, mao_fechada, mao_aberta);
	
	animal_atual.onMouseOver = maoCursor_ativa;
	animal_atual.onMouseOut = maoCursor_desativa;

	moveArea.addChildAt(plaquinhaAnim, 2);
	plaquinhaAnim.scaleX = plaquinhaAnim.scaleY = 0.5;
}

//FUNCAO QUE ATUALIZA A CADA TICK DO STAGE, DEFINIDO PELA CLASSE TICKER DO CREATEJS
function atualiza(){
	
	if(completos_.getChildAt(ambAtivo).ambOrig >= 0){
		
			if(ambNext.scaleX >= 0.84){
				
				setaScala = -0.02;
				
			} else if(ambNext.scaleX <= 0.44){
				
				setaScala = 0.02;
			}
			
			ambNext.scaleX += setaScala;
			ambNext.scaleY += setaScala;
			
			
	} else {
		
		ambNext.scaleX = 0.44;
		ambNext.scaleY = 0.44;
		
	}
	
	plaquinhaAnim.y = alvos_.getChildAt(ambAtivo).y + 10;
	plaquinhaAnim.x = alvos_.getChildAt(ambAtivo).x + 7;
	
	if(completouAnimal){
		
		if(!interface_.contains(ambNext)){
			
			interface_.addChild(ambNext); interface_.addChild(ambNext_hit);
			
		}
		
		if(balao_patu.alpha == 0.0001){
			
			balao_aparece = 0.1;
			
		} else if(balao_patu.alpha > 3){
			
			balao_aparece = -0.1;
		}
		balao_patu.alpha += balao_aparece;
		
		if(balao_patu.alpha < 0){
			
			balao_patu.alpha = 0;
			
		}
		
	} else if (!completouAnimal){

		interface_.removeChild(ambNext); interface_.removeChild(ambNext_hit);
		
	}
	
	//Faz o cursor custom seguir o mouse
	cursor.x = stage.mouseX + cursor.regX - 20;
	cursor.y = stage.mouseY + cursor.regY - 20;
	mao_fechada.x = stage.mouseX + cursor.regX - 20;
	mao_fechada.y = stage.mouseY + cursor.regY - 20;
	mao_aberta.x = stage.mouseX + cursor.regX - 20;
	mao_aberta.y = stage.mouseY + cursor.regY - 20;
	cursor.scaleX = cursor.scaleY = 0.7;
	mao_fechada.scaleX = mao_fechada.scaleY = 0.7;
	mao_aberta.scaleX = mao_aberta.scaleY = 0.7;
	
	//Proibe o Jogador de arrastar animais caso o ambiente atual ja esteja completo.
	if(completos_.getChildAt(ambAtivo).ambOrig == ambAtivo){
		
		animal_atual.onPress = null;
		
	} else {
		
		animal_atual.onPress = arrastaMonstro;
		
	}
	
	//Calcula o tempo do jogo
	if(tempoDecorrido <= tempoRestante){
		
		b.scaleY = 1 - ( (1/tempoRestante) * tempoDecorrido);
		
	} else { chamaPerdeuJogo(); }
	
	if(animais_completos == _dificuldade){
		
		chamaGanhouLevel();
		
	}
	
	tempoDecorrido = (Math.floor(((Math.floor(createjs.Ticker.getTime()) - timeOffset) / 1000))) + tempoAntigo;

	// ------------------------ //
	
	//Mostra a seta para onde o animal deve ser arrastado assim que ele combinar com o animal alvo
	if(gameCaixa.contains(animal_atual)){
		if(alvos_.getChildAt(ambAtivo).getChildAt(0).spriteSheet._images == animal_atual.getChildAt(0).spriteSheet._images
			&& alvos_.getChildAt(ambAtivo).getChildAt(1).spriteSheet._images == animal_atual.getChildAt(1).spriteSheet._images
			&& alvos_.getChildAt(ambAtivo).getChildAt(2).spriteSheet._images == animal_atual.getChildAt(2).spriteSheet._images
			&& completos_.getChildAt(ambAtivo).ambOrig == -1 && ambAtivo < _dificuldade){
								moveArea.removeChild(plaquinhaAnim);
								alvos_.getChildAt(ambAtivo).scaleX = alvos_.getChildAt(ambAtivo).scaleY = 1;
								plaquinhaAnim.scaleX = plaquinhaAnim.scaleY = 0.44;
								moveArea.addChild(seta_ss);
								seta_ss.y = zonasAlvo_.getChildAt(ambAtivo).y;
								seta_ss.x = zonasAlvo_.getChildAt(ambAtivo).x;
								if(seta_ss.currentAnimation != "set"){
									seta_ss.gotoAndPlay("set");
								}
				} else { 
					moveArea.removeChild(seta_ss); 
					
					if(!moveArea.contains(plaquinhaAnim)){
						moveArea.addChildAt(plaquinhaAnim, 2);
					}
					
					if(plaquinhaAnim.scaleX >= 0.64){
						
						placaScala = -0.006;
						
					} else if(plaquinhaAnim.scaleX <= 0.44){
						
						placaScala = 0.006;
					}
					
					if(alvos_.getChildAt(ambAtivo).scaleX >= 1.2){
						
						animalScala = -0.01;
						
					} else if(alvos_.getChildAt(ambAtivo).scaleX <= 1){
						
						animalScala = 0.01;
					}
					
					plaquinhaAnim.scaleX += placaScala;
					plaquinhaAnim.scaleY += placaScala;
					alvos_.getChildAt(ambAtivo).scaleX = plaquinhaAnim.scaleX * 2 ;
					alvos_.getChildAt(ambAtivo).scaleY = plaquinhaAnim.scaleY * 2 ;
					
				}
	}
	
	//Animacao do Patucara
	if ( (createjs.Ticker.getTicks() % 200) == 0){
		
		animPatucara_random(patucara);
		
	}

	if(gameCaixa.contains(animal_atual)){
	
		//Animacao aleatoria do animal atual
		if ( (createjs.Ticker.getTicks() % 90) == 0){
			
			animAnimaisA_random(ambAtivo, animal_atual);
			
		}
		
	}
	//Animacao aleatoria dos animais Completos
	if ( (createjs.Ticker.getTicks() % 70) == 0){
			
			if(animais_completos > 0){
				animAnimaisC_random(ambAtivo, completos_, _dificuldade);
			}
		}
	
	ajustaPlacas(ambAtivo);
	
	
}

//Funcao que atualiza o pauseArea
function pauseAtualiza(){
	
	//Alinha o texto de lose
	textLose.x =  (canvas.width/2) - (textLose.getMeasuredWidth()/2);
	
	//Faz o cursor custom seguir o mouse
	cursor.x = stage.mouseX + cursor.regX - 20;
	cursor.y = stage.mouseY + cursor.regY - 20;
	mao_fechada.x = stage.mouseX + cursor.regX - 20;
	mao_fechada.y = stage.mouseY + cursor.regY - 20;
	mao_aberta.x = stage.mouseX + cursor.regX - 20;
	mao_aberta.y = stage.mouseY + cursor.regY - 20;
	cursor.scaleX = cursor.scaleY = 0.7;
	mao_fechada.scaleX = cursor.scaleY = 0.7;
	mao_aberta.scaleX = cursor.scaleY = 0.7;
	
}


//Funcoes de Win/Lose do jogo
function chamaPerdeuJogo(){
	
	loseGame.removeAllChildren();
	gameCaixa.onTick = null;
	gameCaixa.removeChild(cursor, mao_fechada, mao_aberta);
	loseGame.addChild(pauseOverlay);
	stage.addChild(loseGame);
	loseGame.onTick = pauseAtualiza;
	pauseOverlay.onMouseOver = function(){ };
	pauseOverlay.onClick = function(){ };
	
	if(animais_completos == 1 || animais_completos == 2){
		
		textLose.text = "Que pena! Voce completou so "+animais_completos+" bicho";
		acentoText = new createjs.Text();
		acentoText = textLose.clone(true);
		acentoText.text = ",";
		acentoText.y = 318;
		acentoText.x = 547;
		
		if(animais_completos == 2){
			textLose.text += "s";
		}
		textLose.y =  canvas.height/2;
		
	} 
	
	else if(animais_completos > 2){
		
		textLose.text = "Parabens! Voce completou "+animais_completos+" bichos";
		textLose.y =  canvas.height/2;
		
	} 
	else {
	
		textLose.text = "Que pena! Voce nao conseguiu completar nenhum bicho!";
		textLose.y =  canvas.height/2;
		
	}
	
	loseGame.addChild(derrota_pop, ok_bttn, ok_bttn_press);
	derrota_pop.x = canvas.width/2;
	derrota_pop.y = canvas.height/2;
	ok_bttn.y = 432;
	ok_bttn.x = 450;
	underScale(loseGame);
	loseGame.removeChild(ok_bttn_press);
	loseGame.addChild(textLose);
	
	if(animais_completos == 1 || animais_completos == 2) { loseGame.addChild(acentoText);}
	
	loseGame.addChild(cursor, mao_fechada, mao_aberta);
	
	ok_bttn.onPress = handleClick; 
	
	mainMusic.stop();
	som_erro.stop();
	som_erro.play();
	
}

function chamaGanhouLevel(){
	
	gameCaixa.onTick = null;
	gameCaixa.removeChild(cursor, mao_fechada, mao_aberta);
	winGame.addChild(pauseOverlay);
	stage.addChild(winGame);
	winGame.onTick = pauseAtualiza;
	pauseOverlay.onMouseOver = function(){ };
	pauseOverlay.onClick = function(){ };
	
	winGame.addChild(vitoria_pop, sim_bttn, sim_bttn_press, nao_bttn, nao_bttn_press);
	derrota_pop.x = canvas.width/2;
	derrota_pop.y = canvas.height/2;
	sim_bttn.x = 390;
	sim_bttn.y = 435;
	nao_bttn.x = 515;
	nao_bttn.y = 435;
	underScale(winGame);
	winGame.removeChild(sim_bttn_press, nao_bttn_press);
	winGame.addChild(voltaMenu, cursor, mao_fechada, mao_aberta);
	voltaMenu.x = 735;
	voltaMenu.y = 110;
	
	voltaMenu.onPress =
		sim_bttn.onPress =
		nao_bttn.onPress = handleClick;

	mainMusic.stop();
	som_acerto.stop();
	som_acerto.play();
	
	if(tempoRestante > 120){
		tempoRestante -= 10;
	}
	
}