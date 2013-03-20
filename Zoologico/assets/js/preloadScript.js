/* 

	Script que funciona para carregar arquivos e organizalos
		Andrey Pereira Aleixo

*/

//Variavel para comparacao para ver se todos os arquivos foram carregados
var carregando1;
var loaders = new createjs.Container();

//Funcao que carrega o manifesto "m" e carrega os arquivos.
function callPreload(m){
	
	this.m = m;
	preloader.loadManifest(this.m);
}

//Funcao que vai trabalhar enquanto os arquivos estao sendo carregados
function handleProgress(event){
		
	$("#progressBar").html(Math.ceil((preloader.progress * 100)) + "%");
}

//Funcao que eh ativada quando todos os arquivos sao carregados
function handleComplete(event){
	
	chamaMenu();
	
	//Tira o div do Load
	$(".loadImg").hide();
	$("#progressBar").hide();
	
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