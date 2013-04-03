/*
 * 			Script do preload dos arquivos
 * 				Diego Mucciolo & Andrey Pereira Aleixo
 * 
 */
var queue = new createjs.LoadQueue();

function preload() {
	var manifest = [
	    {src:"assets/img/circulo.png", id:"circulo"},
	    {src:"assets/img/triangulo.png", id:"triangulo"},
	    {src:"assets/img/cima.jpg", id:"cima"},
	    {src:"assets/img/baixo.gif", id:"baixo"},
	    //Assets das animacoes

	    {src:"assets/img/cenario/ArmarioAberto1.png", id:"aaberto1"},
	    {src:"assets/img/cenario/ArmarioAberto2.png", id:"aaberto2"},
	    {src:"assets/img/cenario/FornoAberto1.png", id:"faberto1"},
	    {src:"assets/img/cenario/FornoAberto2.png", id:"faberto2"},
	    {src:"assets/img/cenario/GeladeiraAberta1.png", id:"gaberto1"},
	    {src:"assets/img/cenario/GeladeiraAberta2.png", id:"gaberto2"},
	    {src:"assets/img/cenario/PiaAberta.png", id:"paberto"},
	    
	    //BGs
	    {src:"assets/img/cenario/Cozinha.png", id:"bg_cozinha"},
	    //Comidas 
	    {src:"assets/img/items/comida0001.png", id:"comida1"}
	    
    ];
	
	queue.addEventListener("fileload", handleFileLoad);
	queue.addEventListener("complete", handleComplete);
	queue.loadManifest(manifest);
}

function handleFileLoad(e) {
	switch (e.item.type) {
		case createjs.LoadQueue.IMAGE:
			var img = new Image();
			img.src = e.item.src;
			window[e.item.id] = new createjs.Bitmap(img);
			window[e.item.id].regX = img.width / 2;
			window[e.item.id].regY = img.height / 2;
			window[e.item.id].x = canvas.width / 2;
			window[e.item.id].y = canvas.height / 2;
			break;
	}
}

function handleComplete(e) {
	main();
}