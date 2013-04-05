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
	    {src:"assets/img/cenario/PiaAberta.png", id:"paberto1"},
	    {src:"assets/img/cenario/Pia.png", id:"paberto2"},
	    {src:"assets/img/cenario/ArmarioMascara.png", id:"aaberto3"},
	    
	    
	    //BGs
	    {src:"assets/img/cenario/Cozinha.png", id:"bg_cozinha"},
	    //Comidas 
	    {src:"assets/img/items/comida0001.png", id:"comida1"},
	    {src:"assets/img/items/comida0002.png", id:"comida2"},
	    {src:"assets/img/items/comida0003.png", id:"comida3"},
	    {src:"assets/img/items/comida0004.png", id:"comida4"},
	    {src:"assets/img/items/comida0005.png", id:"comida5"},
	    {src:"assets/img/items/comida0006.png", id:"comida6"},
	    {src:"assets/img/items/comida0007.png", id:"comida7"},
	    {src:"assets/img/items/comida0008.png", id:"comida8"},
	    {src:"assets/img/items/comida0009.png", id:"comida9"},
	    {src:"assets/img/items/comida0010.png", id:"comida10"},
	    {src:"assets/img/items/comida0011.png", id:"comida11"},
	    {src:"assets/img/items/comida0012.png", id:"comida12"},
	    {src:"assets/img/items/comida0013.png", id:"comida13"},
	    {src:"assets/img/items/comida0014.png", id:"comida14"},
	    {src:"assets/img/items/comida0015.png", id:"comida15"},
	    {src:"assets/img/items/comida0016.png", id:"comida16"}
	    
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