/*
 * 			Script do preload dos arquivos
 * 				Diego Mucciolo & Andrey Pereira Aleixo
 * 
 */

function preload() {
	var manifest = [
	    {src:"assets/img/circulo.png", id:"circulo"},
	    {src:"assets/img/triangulo.png", id:"triangulo"},
	    {src:"assets/img/seta_e.png", id:"seta"}
    ];
	
	var queue = new createjs.LoadQueue();
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