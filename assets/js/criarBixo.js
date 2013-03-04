/*

	Script que vai ser rodado para utilizar a funcao Criar Bixo do jogo
		Andrey Pereira Aleixo

*/

//Container do CB
var criarArea = new createjs.Container();
var criarInterface = new createjs.Container();
var ambCriar = new createjs.Container();
var zcAlvos_ = new createjs.Container();
var contador = 0;
var prep = 0;
var prep2 = 0;
var flagFazer = 0;
var ambNum;
var telaCriar = new createjs.Shape();

//Funcao main do Criar Meu Bicho
function criarBixo_main(){

	stage.removeAllChildren();
	criarArea.removeAllChildren();
	criarInterface.removeAllChildren();
	contador = 0;
	
	criarArea.x = 0;
	criarArea.y = 0;
	frameImprimir.y = 0;
	
	stage.addChild(criarArea);
	initPos_criar();
	initSheets();
	organizaAnimais();
	gerarMontando();
	gerarAtual();
	zonasAlvo_.removeAllChildren();
	
	
	underScale(criarArea);
	
	criarInterface.addChild(frameCriar,
							crpDown, crpUp,
							cbaDown, cbaUp,
							raboDown, raboUp,
							avcCriar_bttn,
							avcCriar_bttn_press,
							retornar_bttn,
							retornar_bttn_press,
							criarVoltar_bttn,
							criarVoltar_bttn_press,
							cursor);
	
	underScale(criarInterface);
	criarInterface.removeChild( crpDown, crpUp,
							cbaDown, cbaUp,
							raboDown, raboUp,
							avcCriar_bttn,
							avcCriar_bttn_press,
							retornar_bttn,
							retornar_bttn_press,
							criarVoltar_bttn,
							criarVoltar_bttn_press,
							frameCriar,
							cursor);
	
	criarInterface.addChild(imprimeBttn,
						salvaBttn,
						animal_atual,
						frameCriar,
						crpDown, crpUp,
						cbaDown, cbaUp,
						raboDown, raboUp,
						avcCriar_bttn,
						retornar_bttn,
						criarVoltar_bttn,
						animal_montando,
						ambNum,
						cursor);
	
	
	criarArea.addChild(ambCriar,
			criarInterface);
	
	criarArea.onTick = criarAtualiza;
	
	orgAmbs();
}

//Funcao atualiza do criarBixo
function criarAtualiza(){
	
	//Faz o cursor custom seguir o mouse
	cursor.x = stage.mouseX + cursor.regX - 20;
	cursor.y = stage.mouseY + cursor.regY - 20;
	cursor.scaleX = cursor.scaleY = 0.7;
	
	ambNum.text = (contador + 1) + " / 10";
	
	if(criarArea.contains(retornar_bttn)){
		animal_atual.rotation = 350;
		animal_atual.x = 150;
		animal_atual.y = 465;
	}

}

//Funcao que organiza os botoes e posicoes do criarBixo
function initPos_criar(){
	
	ambNum = new createjs.Text( contador + " / 10", "20px CCCLTS", "#000000");
	ambNum.x = 710;
	ambNum.y = 540;
	ambNum.textBaseline = "alphabetic";
	
	retornar_bttn.x = 120;
	retornar_bttn.y = 100;
	
	criarVoltar_bttn.x = 670;
	criarVoltar_bttn.y = 535;
	
	avcCriar_bttn.x = 800;
	avcCriar_bttn.y = 535;
	
	imprimeBttn = new createjs.Shape();
	imprimeBttn.graphics.beginFill("black").rect(0,0,70,70);
	imprimeBttn.alpha = 0.01;
	imprimeBttn.id = "imprimeBttn";
	imprimeBttn.x = 93;
	imprimeBttn.y = 583;
	
	salvaBttn = new createjs.Shape();
	salvaBttn.graphics.beginFill("black").rect(0,0,70,70);
	salvaBttn.alpha = 0.01;
	salvaBttn.id = "salvaBttn";
	salvaBttn.x = 188;
	salvaBttn.y = 583;
	
	crpUp.x = 419; crpUp.y = 185;
	raboUp.x = 314; raboUp.y = 185;
	cbaUp.x = 523; cbaUp.y = 185;
	
	crpDown.y = 335; crpDown.x = crpUp.x;
	cbaDown.y = 335; cbaDown.x = cbaUp.x;
	raboDown.y = 335; raboDown.x = raboUp.x;
	
	animal_montando.y = -5;
	
	//Funcoes que chamam o callback do click nos botoes EXCLUSIVO DO CRIAR MEU BICHO
	retornar_bttn.onPress = 
		criarVoltar_bttn.onPress =
			avcCriar_bttn.onPress =
				imprimeBttn.onPress = 
					salvaBttn.onPress = handleClick_criar;
	
	crpDown.onPress = crpUp.onPress =
		cbaDown.onPress = cbaUp.onPress =
			raboDown.onPress = raboUp.onPress = handleClick;
			
	
	
}

//Funcao que segura os clicks somente da area do Criar Meu Bicho
function handleClick_criar(e){
	
	switch(e.target.id){
	
		case "retornar_bttn":
			
			srcold = e.target.image.src;
			e.target.image.src = retornar_bttn_press.image.src;
			som_bttn_menu.stop();
			som_bttn_menu.play();
			e.onMouseUp = function(){e.target.image.src = srcold; chamaMenu();};
			
			break;
				
		case "criarVoltar_bttn":
			
			srcold = e.target.image.src;
			e.target.image.src = criarVoltar_bttn_press.image.src;
			som_deslize.stop();
			som_deslize.play();
			ambCriar.getChildAt(contador).alpha = 0;
			if(contador == 0){
				
				contador = 9;
				
			} else { contador--;}
			ambCriar.getChildAt(contador).alpha = 1;
			e.onMouseUp = function(){e.target.image.src = srcold;};
			
			break;
				
		case "avcCriar_bttn":
			
			srcold = e.target.image.src;
			e.target.image.src = avcCriar_bttn_press.image.src;
			som_deslize.stop();
			som_deslize.play();
			ambCriar.getChildAt(contador).alpha = 0;
			if(contador == 9){
				
				contador = 0;
				
			} else { contador++;}
			ambCriar.getChildAt(contador).alpha = 1;
			e.onMouseUp = function(){e.target.image.src = srcold;};
		
			break;
			
		case "imprimeBttn":

			arrumaAnimal(1);
			som_bttn_menu.stop();
			som_bttn_menu.play();
			
		break;
			
		case "salvaBttn":

			arrumaAnimal(-1);
			som_bttn_menu.stop();
			som_bttn_menu.play();
			
		break;
		
		case "telaCriar":
			
			if(flagFazer == 1){
				window.print();
			} 
			if(flagFazer == -1){

				salvaImagem();
			}
			som_bttn_menu.stop();
			som_bttn_menu.play();
			animal_atual.rotation = 350;
			animal_atual.x = 150;
			animal_atual.y = 465;
			criarArea.removeAllChildren();
			criarArea.addChild(ambCriar,
								animal_atual,
								criarInterface);
			criarArea.y = 0;
			gZona(contador);
			ambCriar.getChildAt(contador).scaleY = 1;
			ambCriar.getChildAt(contador).scaleX = 1;
			ambCriar.y = 150;
			frameImprimir.y = 0;
		break;
	
	}
	
}

//Funcao que salva a imagem do Criar meu Bicho
function salvaImagem(){
	
	var oCanvas = document.getElementById("cnvs");
	Canvas2Image.saveAsPNG(oCanvas);
	
}

//Organiza os ambientes para navegaçao
function orgAmbs(){

	montanhas_small.alpha = 1;
	deserto_small.alpha = 0;
	lago_small.alpha = 0;
	geleira_small.alpha = 0;
	savana_small.alpha = 0;
	floresta_small.alpha = 0;
	lama_small.alpha = 0;
	fazenda_small.alpha = 0;
	aquario_small.alpha = 0;
	arvores_small.alpha = 0;
	
	ambCriar.addChildAt(montanhas_small,0);
	ambCriar.addChildAt(deserto_small,1);
	ambCriar.addChildAt(lago_small,2);
	ambCriar.addChildAt(geleira_small,3);
	ambCriar.addChildAt(savana_small,4);
	ambCriar.addChildAt(floresta_small,5);
	ambCriar.addChildAt(lama_small,6);
	ambCriar.addChildAt(fazenda_small,7);
	ambCriar.addChildAt(aquario_small,8);
	ambCriar.addChildAt(arvores_small,9);
	
	ambCriar.scaleY = ambCriar.scaleX = 0.41;
	ambCriar.x = 260;
	ambCriar.y = 150;
	
}

//Funcao que gera a zona alvo onde o animal vai ser arrastado
function gZona(x){
	
	switch(x){
		case 1:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 380;
			this.zooAlvo.y = 410;
			
		break;
		case 2:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 520 ;
			this.zooAlvo.y = 540;
			
		break;
		case 3:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 475;
			this.zooAlvo.y = 390;
			
		break;
		case 4:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 545;
			this.zooAlvo.y = 540;
			
		break;
		case 5:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 370;
			this.zooAlvo.y = 440;
			
		break;
		case 6:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 515;
			this.zooAlvo.y = 560;
			
		break;
		case 7:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 465;
			this.zooAlvo.y = 370;
			
		break;
		case 8:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 455;
			this.zooAlvo.y = 380;
			
		break;
		case 9:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 390;
			this.zooAlvo.y = 440;
			
		break;
		case 0:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 470;
			this.zooAlvo.y = 530;
			
		break;
		
	}
	zcAlvos_.removeAllChildren();
	zcAlvos_.addChild(this.zooAlvo);
	
}

//Funcao que arruma o animal e o ambiente para imprimir/salvar
function arrumaAnimal(e){
	
	gZona(contador);
				
	this.sombra_ = sombra_animal.clone();
	this.sombra_.x = zcAlvos_.getChildAt(0).x;
	this.sombra_.y = zcAlvos_.getChildAt(0).y - 14;
	this.sombra_.scaleX = 1.4;
	this.sombra_.alpha = 0.4;
	
	this.cloneAnimal = new createjs.Container();
	this.cloneAnimal = animal_atual.clone(true);
	
	criarArea.removeAllChildren();
	criarArea.addChild( zcAlvos_,
						ambCriar,
						sombra_,
						animal_atual,
						cloneAnimal,
						frameImprimir);
	
	animal_atual.x = sombra_.x;
	animal_atual.y = sombra_.y - 50;
	animal_atual.rotation = 0;
	
	cloneAnimal.x = 115;
	cloneAnimal.y = 525;
	
	ambCriar.getChildAt(contador).scaleY = 1.1;
	ambCriar.getChildAt(contador).scaleX = 1.1;
	
	ambCriar.y = 185;

	frameImprimir.scaleX = 0.44;
	frameImprimir.scaleY = 0.44;
	
	criarArea.y = -100;
	frameImprimir.y += 430;

	telaCriar.graphics.beginFill("black").rect(0,0,canvas.width,canvas.height);
	telaCriar.alpha = 0.01;
	telaCriar.id = "telaCriar";
	telaCriar.onClick = handleClick_criar;

	criarArea.addChild(telaCriar);
	flagFazer = e;
	
}