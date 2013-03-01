/*

	Inicia todas as variaveisdo jogo, e cria a funcao que diminui os botoes
			Andrey Pereira Aleixo
			
*/

//Funcao principal
function initGame_vars(){
	var x = 0;
	
	//Inicia instancias dos containers no completos_ para poder fazer a contagem correta para mostrar a seta
	for(x;x < _dificuldade;x++){
		
		this.animal_holder = new createjs.Container();
		this.animal_holder.ambOrig = -1;
		completos_.addChildAt(this.animal_holder, x);
		
	}
	
	//Tamanho da seta do alvo
	seta_ss.scaleX = seta_ss.scaleY = 0.5;
	
	//Botao para pausar o jogo
	this.pause_bttn.x = 25;
	this.pause_bttn.y = 25;
	this.pause_bttn.onClick = handleClick;
	
	//Botao para dar play no jogo
	this.play_bttn.x = 25;
	this.play_bttn.y = 25;
	this.play_bttn.onClick = handleClick;
	
	//Botao de duvida
	this.duvida_bttn.x = 23;
	this.duvida_bttn.y = 70;
	this.duvida_hit.x = 23;
	this.duvida_hit.y = 70;
	this.duvida_hit.alpha = 0.01;
	
	//Botao de Musica
	this.bgmon_bttn.x = 23;
	this.bgmon_bttn.y = 125;
	this.bgmoff_bttn.x = 23;
	this.bgmoff_bttn.y = 125;
	this.bgmon_bttn.scaleX = this.bgmon_bttn.scaleY = 0.34;
	this.bgmoff_bttn.scaleX = this.bgmoff_bttn.scaleY = 0.34;
	this.bgm_hit.x = 23;
	this.bgm_hit.y = 125;
	this.bgm_hit.scaleX = this.bgm_hit.scaleY = 0.34;
	this.bgm_hit.alpha = 0.01;
	
	//Botao de Som
	this.sfxon_bttn.x = 28;
	this.sfxon_bttn.y = 175;
	this.sfxoff_bttn.x = 28;
	this.sfxoff_bttn.y = 175;
	this.sfxon_bttn.scaleX = this.sfxon_bttn.scaleY = 0.34;
	this.sfxoff_bttn.scaleX = this.sfxoff_bttn.scaleY = 0.34;
	this.sfx_hit.x = 28;
	this.sfx_hit.y = 175;
	this.sfx_hit.scaleX = this.sfx_hit.scaleY = 0.34;
	this.sfx_hit.alpha = 0.01;
	
	//Header do jogo
	this.headerGame.x = canvas.width /2;
	this.headerGame.y = this.headerGame.regY * 0.44;
	
	//Barra que mostra os ambientes ativos e nao ativos
	this.ambAtivos.x = canvas.width/2;
	this.ambAtivos.y = canvas.height - 330;
	
	//BOTOES DE CONTROLE DO AMBIENTE
	this.ambNext.x = canvas.width - 30;
	this.ambNext.y = canvas.height/2 + 90;
	this.ambNext_hit.x = canvas.width - 30;
	this.ambNext_hit.y = canvas.height/2 + 90;
	this.ambNext_hit.alpha = 0.01;
	this.ambNext.rotation = 180;
	this.ambPrev.x = 30;
	this.ambPrev.y = canvas.height/2+ 90;
	this.ambPrev_hit.x = 30;
	this.ambPrev_hit.y = canvas.height/2+ 90;
	this.ambPrev.rotation = 0;
	this.ambPrev_hit.alpha = 0.01;
	this.ambPrev_hit.onClick = this.ambNext_hit.onClick = handleClick;
	
	//Testando o timer
	g = new createjs.Graphics();
	g.beginFill("#ffdb7b");
	g.drawRect(0,0,50,50);
	b = new createjs.Shape(g);
	b.x = 810;
	b.y = 640;
	b.rotation = 0;
	b.regX = 25;
	b.regY = 60; 
	
	//Texto de lose
	textLose = new createjs.Text( "Que pena! Voc n‹o conseguiu completar nenhum bicho!" , "24px CCZOINKS", "#000000");
	textLose.textBaseline = "alphabetic";
	
	//POSICIONAMENTO DO CONTROLE DO MONSTRO
	this.raboUp.x = canvas.width/2 - 140;
	this.raboUp.y = 25;
	this.raboDown.x = canvas.width/2 - 140;
	this.raboDown.y = 175;
	
	this.crpUp.x = canvas.width/2 - 38;
	this.crpUp.y = 25;
	this.crpDown.x = canvas.width/2 - 38;
	this.crpDown.y = 175;
	
	this.cbaUp.x = canvas.width/2 + 70;
	this.cbaUp.y = 25;
	this.cbaDown.x = canvas.width/2 + 70;
	this.cbaDown.y = 175;
	
	//Xzinho das telas de Win e Lose que sao usados para voltar ao menu
	voltaMenu = new createjs.Shape();
	voltaMenu.graphics.beginFill("black").rect(0,0,50,50);
	voltaMenu.alpha = 0.01;
	voltaMenu.id = "voltaMenu";
	
	//Balao de Parabens
	balao_patu.scaleX = balao_patu.scaleY = 0.5;
	balao_patu.x = 260;
	balao_patu.y = 50;
	balao_patu.alpha = 0.0001;
	
	
	//Funcoes de click dos botoes
	this.cbaDown.onPress = this.cbaUp.onPress =
		this.crpDown.onPress = this.crpUp.onPress =
		this.raboDown.onPress = this.raboUp.onPress =  handleClick;
	
	this.ambNext.onClick = this.ambPrev.onClick = handleClick;
	
	this.duvida_hit.onClick = handleClick;
	
	montanhas_small.alpha = 1;
	deserto_small.alpha = 1;
	lago_small.alpha = 1;
	geleira_small.alpha = 1;
	savana_small.alpha = 1;
	floresta_small.alpha = 1;
	lama_small.alpha = 1;
	fazenda_small.alpha = 1;
	aquario_small.alpha = 1;
	arvores_small.alpha = 1;
	
}

//Funcao que da um underscale em todos os objetos dentro do Container.
function underScale(ct){
	var x;
	for(x = 0; x < ct.children.length; x++){
		//Corta pela metade o size dos objetos.
		(ct.getChildAt(x)).scaleX = (ct.getChildAt(x)).scaleY = 0.44;
	}
}