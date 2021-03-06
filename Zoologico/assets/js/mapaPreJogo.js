/*


q		Mapa que vai ser aberto quando o jogador clica em Jogar
			Andrey Pereira Aleixo


*/

//Variaveis exclusivas do mapa
var mapaArea = new createjs.Container();
var mapa_bg;
var enterZoo;
var setasMapa = new createjs.Container();
var scaler = 0.005;

//Funcao principal do script
function mapaPreJogo(){
	
	stage.removeAllChildren();
	mapaArea.removeAllChildren();
	stage.enableMouseOver();
	
	enterZoo.alpha = 1;
	enterZoo.x = 480;
	enterZoo.y = 610;
	
	mapaArea.addChild(mapa_bg, enterZoo, plaquinha_mapa, bussola);
	underScale(mapaArea);
	mapaArea.removeChild(plaquinha_mapa, bussola);
	stage.addChild(mapaArea, setasMapa, plaquinha_mapa, bussola, cursor, mao_fechada, mao_aberta);
	
	mao_fechada.alpha = 0;
	mao_aberta.alpha = 0;
	
	mapa_bg.onPress = arrastaMapa;
	mapaArea.x = 0;
	
	enterZoo.onClick = function (e) {
		
		som_bttn_menu.stop();
		som_bttn_menu.play();
		zooGame();
		timeOffset = Math.floor(createjs.Ticker.getTime());
		
	};
	
	mapaArea.onTick = mapaUpdate;
	
	setasMapa.addChild(ambNext, ambPrev);
	underScale(setasMapa);
	
	ambNext.y = ambPrev.y = canvas.height/2;
	ambNext.x = canvas.width - 20;
	ambNext.rotation = 180;
	ambPrev.x = 20;
	
	plaquinha_mapa.y = 585;
	plaquinha_mapa.x = 150;
	
	bussola.x = 100;
	bussola.y = 85;
	
}

//funcao que roda a cada tick dentro do mapa
function mapaUpdate(){
	
	cursor.x = stage.mouseX + cursor.regX - 20;
	cursor.y = stage.mouseY + cursor.regY - 20;
	mao_fechada.x = stage.mouseX + cursor.regX - 20;
	mao_fechada.y = stage.mouseY + cursor.regY - 20;
	mao_aberta.x = stage.mouseX + cursor.regX - 20;
	mao_aberta.y = stage.mouseY + cursor.regY - 20;
	
	cursor.scaleX = cursor.scaleY = 0.7;
	mao_fechada.scaleX = mao_fechada.scaleY = 0.7;
	mao_aberta.scaleX = mao_aberta.scaleY = 0.7;
	if(mapaArea.x >= 450){
		mapaArea.x = 450;
		setasMapa.removeChild(ambPrev);
	}
	if(mapaArea.x <= -450){
		mapaArea.x = -450;
		setasMapa.removeChild(ambNext);
	}
	
	if(mapaArea.x < 450){
		if(!setasMapa.contains(ambPrev)){
			setasMapa.addChild(ambPrev);
		}
	}
	if(mapaArea.x > -450){
		if(!setasMapa.contains(ambNext)){
			setasMapa.addChild(ambNext);
		}
	}
	
	if(enterZoo.scaleX >= 0.54 && enterZoo.scaleY >= 0.54){
		
		scaler = -0.005;
		
	}
	
	if(enterZoo.scaleX <= 0.44 && enterZoo.scaleY <= 0.44){
		
		scaler = 0.005; 
		
	}
	
	enterZoo.scaleX += scaler; 
	enterZoo.scaleY += scaler;
	
}

//Funcao que eh chamada para arrastar o mapa
function arrastaMapa(e){
	
	cursor.alpha = 0;
	mao_fechada.alpha = 1;

	var offset = { x : mapaArea.x - e.stageX };

		e.onMouseMove = function(ev) {

				if(mapaArea.x <= 450){
					mapaArea.x = ev.stageX + offset.x;
				} else { mapaArea.x = 450;}

				if(mapaArea.x >= -450){
					mapaArea.x = ev.stageX + offset.x;
				} else { mapaArea.x = -450;}
			
		};
	
	e.onMouseUp = function(ev){
		cursor.alpha = 1;
		mao_fechada.alpha = 0;
	};
	
}