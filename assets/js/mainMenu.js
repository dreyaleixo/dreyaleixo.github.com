/*
 * 
 *		Funcao do menu principal do jogo Zoologico do Patucara
 *			Andrey Pereira Aleixo 
 * 
 * 
 * 
 */

//Variavel do cursor custom
var cursor;

//Container do Tutorial
var tutoArea = new createjs.Container();
var tutos_ = new createjs.Container();
var tutoAtual = 0;
var textLose = new createjs.Text();

//Funcao que vai chamar o menu quando todos os arquivos do manifesto estiverem carregados
function chamaMenu(){
	
	//Shape que vai cobrir o stage quando o jogo estiver pausado.
	g = new createjs.Graphics().beginFill("#000000").drawRect(0, 0, 2048, 1536);
	pauseOverlay = new createjs.Shape(g);
	pauseOverlay.alpha = 0.7;
	
	//Xzinho das telas de Win e Lose que sao usados para voltar ao menu
	tiraTuto = new createjs.Shape();
	tiraTuto.graphics.beginFill("black").rect(0,0,50,50);
	tiraTuto.alpha = 0.01;
	tiraTuto.id = "tiraTuto";
	
	stage.removeAllChildren();
	tituloCaixa.removeAllChildren();
	_dificuldade = 3;
	
	tutos_.removeAllChildren();
	tuto1.alpha = tuto2.alpha =
		tuto3.alpha = tuto4.alpha = 0.0001;
	tutos_.addChild(tuto1, tuto2, tuto3, tuto4);
	tutos_.y = canvas.height/4;
	tutos_.x = 252;
	
	//Adiciona os items do main menu no palco e manda o palco atualizar
	this.tituloCaixa.addChild(bgImg, jogar_bttn, criarBixo_bttn, comoJogar_bttn);
	underScale(tituloCaixa, cursor);
	this.stage.update();
	
	//Inicia a Musica
	mainMusic.stop();
	mainMusic.play();
	
	this.jogar_bttn.x = canvas.width /2;
	this.jogar_bttn.y = 370;
	
	this.criarBixo_bttn.x = canvas.width /2;
	this.criarBixo_bttn.y = 440;
	
	this.comoJogar_bttn.x = canvas.width /2;
	this.comoJogar_bttn.y = 510;
	
	//Calls para as funcoes quando os botoes ssao clicados
	this.jogar_bttn.onPress = 
	this.criarBixo_bttn.onPress =
	this.comoJogar_bttn.onPress = handleClick;
	
	this.sfx_hit.onClick = 
	this.bgm_hit.onClick = handleClick;
	
	//TICKERS USADO PARA RESPONDER AO BUG DA MUSICA INFINITA
	this.tkr_old =  1;
	this.tkr = createjs.Ticker.getTicks();

	this.stage.addChild(tituloCaixa);
	this.tituloCaixa.addChild(cursor);
	
	this.tituloCaixa.onTick = menuAtualiza;
	
}

//Function update do Menu para trabalhar com o mouse
function menuAtualiza(){
	
	cursor.x = stage.mouseX + cursor.regX - 20;
	cursor.y = stage.mouseY + cursor.regY - 20;
	cursor.scaleX = cursor.scaleY = 0.7;
	
}

//Function que monta o tutorial para utilizacao no menu e dentro do jogo
function montaTuto(){
	
	tutoArea.removeAllChildren();
	tutoAtual = 0;
	tutos_.getChildAt(tutoAtual).alpha = 1;
	stage.getChildAt(0).removeChild(cursor);
	tutoArea.addChild(pauseOverlay);
	stage.addChild(tutoArea);
	tutoArea.onTick = pauseAtualiza;
	pauseOverlay.onMouseOver = function(){ return; };
	pauseOverlay.onClick = function(){ return; };
	
	//Texto do Tutorial
	tutoNums = (tutoAtual+1);
	tutoQnt = new createjs.Text( tutoNums + "      4", "20px CCCLTS", "#000000");
	tutoQnt.x = 416;
	tutoQnt.y = 505;
	tutoQnt.textBaseline = "alphabetic";
	
	tutoArea.addChild(tuto_screen, tutos_, tuto_prev_bttn, tuto_prev_bttn_press, tuto_next_bttn, tuto_next_bttn_press);
	tuto_prev_bttn.y = 495;
	tuto_prev_bttn.x = 360;
	tuto_next_bttn.y = 495;
	tuto_next_bttn.x = 540;
	tuto_next_bttn.onPress =
		tuto_prev_bttn.onPress = handleClick;
	underScale(tutoArea);
	
	tutoArea.removeChild(tuto_prev_bttn_press, tuto_next_bttn_press);
	tutoArea.addChild(tiraTuto, tutoQnt, cursor);
	tiraTuto.x = 735;
	tiraTuto.y = 110;
	
	tiraTuto.onPress = handleClick; 
	
}

//Funcao que troca o tuto quando o botao eh apertado
function trocaTuto(idx){
	
	tutos_.getChildAt(tutoAtual).alpha = 0;
	if(idx == -1 && tutoAtual == 0){
		tutoAtual = 3;
	} 
	else if (idx == 1 && tutoAtual == 3){
		tutoAtual = 0;	
	} else {
		tutoAtual += idx;
	}
	tutos_.getChildAt(tutoAtual).alpha = 1;
	
	tutoNums = (tutoAtual+1);
	tutoQnt.text = tutoNums + "      4";
	
}




