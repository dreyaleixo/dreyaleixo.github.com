/* 

	Script que funciona para carregar arquivos e organizalos
		Andrey Pereira Aleixo

*/

//Variavel para comparacao para ver se todos os arquivos foram carregados
var totalLoaded = 0;
var carregando1, carregando2, carregando3;
var loaders = new createjs.Container();
var loadNum = 0;

//Funcao que carrega o manifesto "m" e carrega os arquivos.
function callPreload(m){
	
	this.m = m;
	preloader.loadManifest(this.m);
}

//Funcao que vai trabalhar enquanto os arquivos estao sendo carregados
function handleProgress(event){
		
	//Tela de Load
	if(carregando3 != null){
		
		if(!loaders.contains(carregando1)){
			loaders.addChild(carregando1, carregando2, carregando3);
			underScale(loaders);
		}
		
		loadCaixa.addChild(loaders.getChildAt(loadNum));
		stage.addChild(loadCaixa);
		
	}
}

//Funcao que eh ativada quando todos os arquivos sao carregados
function handleComplete(event){
	
		stage.removeAllChildren();
		
		//Se a quantidade de arquivos carregados eh igual ao tamanho do manifesto, chama o menu
		if((m.length + 3) == totalLoaded){
			
					chamaMenu();
					this.totalLoaded = 0;
		}
		
}

//Funcao que eh chamada quando um arquivo eh carregado
function handleLoadComplete(event){
	
	totalLoaded++;
	if(carregando3 != null){
		
		if(loadNum == 3){
			
			loadNum = 0;
			loadCaixa.removeChildAt(0);
		}
		
		loadCaixa.addChild(loaders.getChildAt(loadNum));
		loadNum ++;
		
	}
	
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
		
		case createjs.PreloadJS.SOUND:
			//Carregou um som ou uma musica
			handleLoadComplete();
		break;
		
	}
	
}