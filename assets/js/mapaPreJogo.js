/*


		Mapa que vai ser aberto quando o jogador clica em Jogar
			Andrey Pereira Aleixo


*/

//Variaveis exclusivas do mapa
var mapaArea = new createjs.Container();
var mapa_bg;
var enterZoo;
var setasMapa = new createjs.Container();

//Funcao principal do script
function mapaPreJogo(){
	
	stage.removeAllChildren();
	mapaArea.removeAllChildren();
	stage.enableMouseOver();
	
	enterZoo.alpha = 0.01;
	enterZoo.x = 1140;
	enterZoo.y = 610;
	
	mapaArea.addChild(mapa_bg, enterZoo);
	underScale(mapaArea);
	stage.addChild(mapaArea, setasMapa, cursor);
	
	mapa_bg.onPress = arrastaMapa;
	mapaArea.x = 450;
	
	enterZoo.onMouseOver = function (e) {
		e.target.alpha = 1;
		e.target.onMouseOut = function (evt){
			evt.target.alpha = 0.01;
		};
	};
	
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
	
}

//funcao que roda a cada tick dentro do mapa
function mapaUpdate(){
	
	cursor.x = stage.mouseX + cursor.regX - 20;
	cursor.y = stage.mouseY + cursor.regY - 20;
	cursor.scaleX = cursor.scaleY = 0.7;
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
	
}

//Funcao que eh chamada para arrastar o mapa
function arrastaMapa(e){
	
	cursor.image.src = mao_fechada_img.image.src;

	var offset = { x : mapaArea.x - e.stageX };

		e.onMouseMove = function(ev) {
			
			if(ev.nativeEvent.webkitMovementX > 0){
				if(mapaArea.x <= 450){
					mapaArea.x = ev.stageX + offset.x;
				} else { mapaArea.x = 450;}
			}
			else if(ev.nativeEvent.webkitMovementX < 0){
				if(mapaArea.x >= -450){
					mapaArea.x = ev.stageX + offset.x;
				} else { mapaArea.x = -450;}
			}
			
		};
	
	e.onMouseUp = function(ev){
		cursor.image.src = cursor_img.image.src;
	};
	
}