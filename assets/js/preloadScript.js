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
		
	//Tela de Load
	if(carregando1 != null
		&& !loadCaixa.contains(carregando1)){
		
		loadCaixa.addChild(carregando1);
		underScale(loadCaixa);
		stage.addChild(loadCaixa);
		
	}
}

//Funcao que eh ativada quando todos os arquivos sao carregados
function handleComplete(event){
	
		stage.removeAllChildren();
		
		//Se a quantidade de arquivos carregados eh igual ao tamanho do manifesto, chama o menu
		if((m.length) == totalLoaded){
			
					chamaMenu();
					this.totalLoaded = 0;
		}
		
}

//Funcao que eh chamada quando um arquivo eh carregado
function handleLoadComplete(event){
	
	totalLoaded++;

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