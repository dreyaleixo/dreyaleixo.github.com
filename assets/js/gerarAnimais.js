/*

	Script que eh rodado para gerar e instanciar os animais no palco durante o gameplay.
		Andrey Pereira Aleixo

*/

//Containers que contems os containers dos animais nos respectivos objetivos
var animal_atual = new createjs.Container();
var animal_alvo = new createjs.Container();
var animal_montando = new createjs.Container();
var alvos_ = new createjs.Container();
var completos_ = new createjs.Container();
var _sombras = new createjs.Container();

var rabos = new createjs.Container();
var corpos = new createjs.Container();
var cabecas = new createjs.Container();
var sons = new createjs.Container();

//Variaveis usadas para o controle das partes do animal_montando
var z,y,x;

//Sombras dos animais
var sombra_;

//Variaveis usadas para o controle das partes do animal_alvo
var k,u,p;
var idxX, idxY, idxZ;

//Variaveis que carregaram sprites extra para o palco
//Montando
var rM, bM, cM;

//Atual
var rA, bA, cA;

//Alvo
var rAl, bAl, cAl;

//Funcao que organiza todos os rabos e corpos e cabecas dentro de containeres para serem utilizados.
function organizaAnimais(){
	
	rabos = new createjs.Container();
	corpos = new createjs.Container();
	cabecas = new createjs.Container();
	sons = new createjs.Container();
	
	//Rabos
	rabos.addChildAt(bode_rbo, 0);
	rabos.addChildAt(camelo_rbo, 1);
	rabos.addChildAt(croc_rbo, 2);
	rabos.addChildAt(foca_rbo, 3);
	rabos.addChildAt(leao_rbo, 4);
	rabos.addChildAt(macaco_rbo, 5);
	rabos.addChildAt(rino_rbo, 6);
	rabos.addChildAt(pavao_rbo, 7);
	rabos.addChildAt(peixe_rbo, 8);
	rabos.addChildAt(tucano_rbo, 9);
	
	//Corpos
	corpos.addChildAt(bode_crp, 0);
	corpos.addChildAt(camelo_crp, 1);
	corpos.addChildAt(croc_crp, 2);
	corpos.addChildAt(foca_crp, 3);
	corpos.addChildAt(leao_crp, 4);
	corpos.addChildAt(macaco_crp, 5);
	corpos.addChildAt(rino_crp, 6);
	corpos.addChildAt(pavao_crp, 7);
	corpos.addChildAt(peixe_crp, 8);
	corpos.addChildAt(tucano_crp, 9);
	
	//Cabecas
	cabecas.addChildAt(bode_cba, 0);
	cabecas.addChildAt(camelo_cba, 1);
	cabecas.addChildAt(croc_cba, 2);
	cabecas.addChildAt(foca_cba, 3);
	cabecas.addChildAt(leao_cba, 4);
	cabecas.addChildAt(macaco_cba, 5);
	cabecas.addChildAt(rino_cba, 6);
	cabecas.addChildAt(pavao_cba, 7);
	cabecas.addChildAt(peixe_cba, 8);
	cabecas.addChildAt(tucano_cba, 9);
	
	//Sons dos respectivos animais
	sons.addChildAt(som_bode, 0);
	sons.addChildAt(som_camelo, 1);
	sons.addChildAt(som_croc, 2);
	sons.addChildAt(som_foca, 3);
	sons.addChildAt(som_leao, 4);
	sons.addChildAt(som_macaco, 5);
	sons.addChildAt(som_rino, 6);
	sons.addChildAt(som_pavao, 7);
	sons.addChildAt(som_peixe, 8);
	sons.addChildAt(som_tucano, 9);

	underScale(rabos);
	underScale(corpos);
	underScale(cabecas);
	
}

//Gera o animal que eh separado e controlado pelas setas na parte superior da tela, eh gerado aleatoriamente
function gerarMontando(){
	
	x = Math.floor(Math.random() * 9.9); y = Math.floor(Math.random() * 9.9); z = Math.floor(Math.random() * 9.9);
	idxX = x; idxY = y; idxZ = z;
	
	animal_montando.removeAllChildren();
	
	this.rM = rabos.getChildAt(x).clone(true);
	animal_montando.addChildAt(rM, 0);
	this.rM.x = raboUp.x;
	this.rM.y = ((raboUp.y + raboDown.y) /2) + 20;
	this.rM.scaleX = this.rM.scaleY = 0.24;
	
	this.bM = corpos.getChildAt(y).clone(true);
	animal_montando.addChildAt(bM, 1);
	this.bM.x = crpUp.x;
	this.bM.y = ((crpUp.y + crpDown.y) /2) + 50;
	this.bM.scaleX = this.bM.scaleY = 0.24;
	
	this.cM = cabecas.getChildAt(z).clone(true);
	animal_montando.addChildAt(cM, 2);
	this.cM.x = cbaUp.x;
	this.cM.y = ((cbaUp.y + cbaDown.y) /2) + 30;
	this.cM.scaleX = this.cM.scaleY = 0.24;
	gerarAtual();
	
}

//Gera o animal que eh o objetivo do ambiente
function gerarAlvo(d){
	
	alvos_.removeAllChildren();
	animal_alvo.removeAllChildren();
	
	for(this.l = 0; this.l < d; this.l++){
		x = Math.floor(Math.random() * 9); y = ambientes_.getChildAt(this.l).ambAnimal; z = Math.floor(Math.random() * 9);
		k = x; u = y; p = z;
			if( this.l > 0 ) { this.rAl = this.bAl = this.cAl = null; this.animal_alvo = new createjs.Container(); }
			

					this.rAl = rabos.getChildAt(k).clone(true);
					this.rAl.scaleX = this.rAl.scaleY = 0.30;
					alinhaRabo(this.rAl, u, k);
					this.animal_alvo.addChildAt(rAl, 0);
			
					this.bAl = corpos.getChildAt(u).clone(true);
					this.bAl.x = 0;this.bAl.y = 50;
					this.bAl.scaleX = this.bAl.scaleY = 0.30;
					this.animal_alvo.addChildAt(bAl, 1);

					this.cAl = cabecas.getChildAt(p).clone(true);
					this.cAl.scaleX = this.cAl.scaleY = 0.30;
					alinhaCabeca(this.cAl, u, p);
					this.animal_alvo.addChildAt(cAl, 2);
					
			
			this.animal_alvo.rotation = 350;
			//this.animal_alvo.scaleX = this.animal_alvo.scaleY = 0.60;
			this.animal_alvo.regX = 0;
			this.animal_alvo.regY = 0;
			this.animal_alvo.x = 120 + (900 * this.l);
			this.animal_alvo.y = 530;
			alvos_.addChildAt(this.animal_alvo, this.l);
	}
	moveArea.addChildAt(alvos_, 2);
}

//Gera o animal que esta sendo montado. eh o mesmo animal do gerarMontando, porem, este eh encaixado nos pontos para formar o animal. Tambem pode ser arrastado.
function gerarAtual(){
	if(stage.contains(gameCaixa)){
		interface_.removeChild(animal_atual);
	}
	this.animal_atual.removeAllChildren();
	this.rA = this.rM.clone(true);
	this.bA = this.bM.clone(true);
	this.cA = this.cM.clone(true);
	
	alinhaRabo(this.rA, idxY, idxX);
	this.bA.x = 0;this.bA.y = 50;
	alinhaCabeca(this.cA, idxY, idxZ);

	this.rA.scaleX = 0.30; this.rA.scaleY = 0.30;
	this.bA.scaleX = 0.30; this.bA.scaleY = 0.30;
	this.cA.scaleX = 0.30; this.cA.scaleY = 0.30;
	
	this.animal_atual.addChildAt(this.rA, 0);
	this.animal_atual.addChildAt(this.bA, 1);
	this.animal_atual.addChildAt(this.cA, 2);
	
	if(stage.contains(criarArea)){
		this.animal_atual.y = 253;
		this.animal_atual.x = 665;
	} else {
		this.animal_atual.x = 665;
		this.animal_atual.y = 95;
	}	
	
	if(!stage.contains(criarArea)){
			animal_atual.rotation = 0;
		interface_.addChild(animal_atual);
	}
}

//Funcao que vai conferir se as arrays animal_atual e animal_alvo sao iguais, declarando que o animal esta correto
function confereAnimal(ev){
	
	if(alvos_.getChildAt(ambAtivo).getChildAt(0).spriteSheet._images == animal_atual.getChildAt(0).spriteSheet._images
		&& alvos_.getChildAt(ambAtivo).getChildAt(1).spriteSheet._images == animal_atual.getChildAt(1).spriteSheet._images
		&& alvos_.getChildAt(ambAtivo).getChildAt(2).spriteSheet._images == animal_atual.getChildAt(2).spriteSheet._images){
				
				sons.getChildAt(idxZ).stop();
				sons.getChildAt(idxZ).play();
				this.animal_atual.x = ev.target.x + ( 900 * ambAtivo); 
				createjs.Tween.get(this.animal_atual).to({x:(zonasAlvo_.getChildAt(ambAtivo).x ),
													 y:(zonasAlvo_.getChildAt(ambAtivo).y - 50)}, 500, createjs.Ease.circOut); 
				this.animal_atual.ambOrig = ambAtivo; 
				this.animal_atual.onPress = null;
				this.animal_atual.onMouseOver = null;
				this.animal_atual.onMouseOut = null;
				completos_.removeChildAt(ambAtivo);
				completos_.addChildAt(animal_atual, ambAtivo);
				completouAnimal = true;
				setaScala = true;
				if(ambientes_.getChildAt(ambAtivo).ambAnimal != 2
					&& ambientes_.getChildAt(ambAtivo).ambAnimal != 6
					&& ambientes_.getChildAt(ambAtivo).ambAnimal != 8){
					
						this.sombra_ = sombra_animal.clone();
						this.sombra_.x = zonasAlvo_.getChildAt(ambAtivo).x;
						if(ambientes_.getChildAt(ambAtivo).ambAnimal == 1){ this.sombra_.y = zonasAlvo_.getChildAt(ambAtivo).y -5; }
					
						else if(ambientes_.getChildAt(ambAtivo).ambAnimal == 7){ this.sombra_.y = zonasAlvo_.getChildAt(ambAtivo).y- 5 ;}
						
						else if(ambientes_.getChildAt(ambAtivo).ambAnimal == 3){ this.sombra_.y = zonasAlvo_.getChildAt(ambAtivo).y- 10 ;} 
						
						else if(ambientes_.getChildAt(ambAtivo).ambAnimal == 4){ this.sombra_.y = zonasAlvo_.getChildAt(ambAtivo).y- 5 ; this.sombra_.scaleX = 1.4;}
							else {this.sombra_.y = zonasAlvo_.getChildAt(ambAtivo).y - 5;}
						this.sombra_.alpha = 0.4;
						_sombras.addChild(this.sombra_);
				
				} else {
					
					this.sombra_ = sombra_animal.clone();
					this.sombra_.x = zonasAlvo_.getChildAt(ambAtivo).x;
					this.sombra_.y = zonasAlvo_.getChildAt(ambAtivo).y;
					this.sombra_.alpha = 0.4;
					_sombras.addChild(this.sombra_);
					
				}
				this.animal_atual = new createjs.Container(); 
				animais_completos++;
				this.animal_atual.onPress = arrastaMonstro;
				this.animal_atual.onMouseOver = maoCursor_ativa;
				this.animal_atual.onMouseOut = maoCursor_desativa;
				placas_.getChildAt(ambAtivo).completo = true;
				
				seta_ss.gotoAndStop(-1);
				
			} else {
				createjs.Tween.get(this.animal_atual).to({x:660, y:95}, 500, createjs.Ease.circOut);
			}
	
}

//Funcao que eh chamada para trocar o rabo do animal_montando
function trocaRabo(idx, i){
	
	animal_montando.removeChildAt(0);

	idxX += i;
	if(idx == 9 && i > 0) { idxX = 0; }
	if (idx == 0 && i < 0 ) { idxX = 9; }
	
	this.rM = rabos.getChildAt(idxX).clone(true);

	this.rM.x = raboUp.x;
	this.rM.y = ((raboUp.y + raboDown.y) /2) + 20;
	this.rM.scaleX = this.rM.scaleY = 0.3;
	animal_montando.addChildAt(rM, 0);

	if(gameCaixa.contains(animal_atual)){
		gerarAtual();
	}
	
}

//Funcao que eh chamada para trocar o corpo do animal_montando
function trocaCorpo(idx, i){

	animal_montando.removeChildAt(1);

	idxY += i;
	if(idx == 9 && i == 1) { idxY = 0; }
	if (idx == 0 && i == -1 ) { idxY = 9; }
	
	this.bM = corpos.getChildAt(idxY).clone(true);

	this.bM.x = crpUp.x;
	this.bM.y = ((crpUp.y + crpDown.y) /2) + 50;
	this.bM.scaleX = this.bM.scaleY = 0.3;
	animal_montando.addChildAt(bM, 1);

	if(gameCaixa.contains(animal_atual)){
		gerarAtual();
	}
	
}

//Funcao que eh chamada para trocar a cabeca do animal_montando
function trocaCabeca(idx, i){

	animal_montando.removeChildAt(2);

	idxZ += i;
	if(idx == 9 && i == 1) { idxZ = 0; }
	if(idx == 0 && i == -1 ) { idxZ = 9; }

	this.cM = cabecas.getChildAt(idxZ).clone(true);

	this.cM.x = cbaUp.x;
	this.cM.y = ((cbaUp.y + cbaDown.y) /2) + 30;
	this.cM.scaleX = this.cM.scaleY = 0.3;
	animal_montando.addChildAt(cM, 2);
	
	if(gameCaixa.contains(animal_atual)){
		gerarAtual();
	}
	
}

function alinhaRabo(ct, idxRbo, idxCpo){
	ct.x = 0;
	ct.y = 0;
	ct.x = corpos.getChildAt(idxRbo).off_rboX - rabos.getChildAt(idxCpo).off_crpX;
	ct.y = corpos.getChildAt(idxRbo).off_rboY - rabos.getChildAt(idxCpo).off_crpY + 50;
}

function alinhaCabeca(ct, idxCba, idxCpo){
	ct.x = 0;
	ct.y = 0;
	ct.x = corpos.getChildAt(idxCba).off_cbaX - cabecas.getChildAt(idxCpo).off_crpX;
	ct.y = corpos.getChildAt(idxCba).off_cbaY - cabecas.getChildAt(idxCpo).off_crpY + 60;
}