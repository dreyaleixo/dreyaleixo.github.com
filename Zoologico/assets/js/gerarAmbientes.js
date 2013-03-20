/* 

	Script que e rodado para gerar ambientes aleatorios no jogo
			Andrey Pereira Aleixo

*/

//Container dos ambientes
var ambientes_ = new createjs.Container();
var zonasAlvo_ = new createjs.Container();
var amb_;
var placas_ = new createjs.Container();
var placa;

//Funcao principal da classe
function gerarAmbientes(d){

	ambientes_.removeAllChildren();

	for(this.l = 0; this.l < d; this.l++){
		this.x = Math.floor(Math.random() * 9.9);

			switch(x){
				case 1:
					this.amb_ = deserto_small.clone();
					this.amb_.ambAnimal = 1;
					geraZona(this.x);
				break;
				case 8:
					this.amb_ = aquario_small.clone();
					this.amb_.ambAnimal = 8;
					geraZona(this.x);
				break;
				case 2:
					this.amb_ = lago_small.clone();
					this.amb_.ambAnimal = 2;
					geraZona(this.x);
				break;
				case 9:
					this.amb_ = arvores_small.clone();
					this.amb_.ambAnimal = 9;
					geraZona(this.x);
				break;
				case 0:
					this.amb_ = montanhas_small.clone();
					this.amb_.ambAnimal = 0;
					geraZona(this.x);
				break;
				case 3:
					this.amb_ = geleira_small.clone();
					this.amb_.ambAnimal = 3;
					geraZona(this.x);
				break;
				case 5:
					this.amb_ = floresta_small.clone();
					this.amb_.ambAnimal = 5;
					geraZona(this.x);
				break;
				case 7:
					this.amb_ = fazenda_small.clone();
					this.amb_.ambAnimal = 7;
					geraZona(this.x);
				break;
				case 6:
					this.amb_ = lama_small.clone();
					this.amb_.ambAnimal = 6;
					geraZona(this.x);
				break;
				case 4:
					this.amb_ = savana_small.clone();
					this.amb_.ambAnimal = 4;
					geraZona(this.x);
				break;
				
			}
			
			this.amb_.scaleX = this.amb_.scaleY = 0.44;
			this.amb_.regX = this.amb_.image.width /2;
			this.amb_.regY = this.amb_.image.height /2;
			this.amb_.x = (canvas.width /2) + (900 * this.l);
			this.amb_.y = canvas.height /2;
			ambientes_.addChildAt(this.amb_, this.l);
	}
		moveArea.addChildAt(zonasAlvo_, 0);
		moveArea.addChildAt(ambientes_, 1);
		arrumaPlacas(d);

}

//Funcao que gera a zona alvo onde o animal vai ser arrastado
function geraZona(x){
	
	switch(x){
		case 1:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 380 + (900 * this.l);
			this.zooAlvo.y = 410;
			
		break;
		case 2:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 520 + (900 * this.l);
			this.zooAlvo.y = 540;
			
		break;
		case 3:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 475 + (900 * this.l);
			this.zooAlvo.y = 390;
			
		break;
		case 4:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 545 + (900 * this.l);
			this.zooAlvo.y = 540;
			
		break;
		case 5:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 370 + (900 * this.l);
			this.zooAlvo.y = 440;
			
		break;
		case 6:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 515 + (900 * this.l);
			this.zooAlvo.y = 560;
			
		break;
		case 7:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 465 + (900 * this.l);
			this.zooAlvo.y = 370;
			
		break;
		case 8:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 455 + (900 * this.l);
			this.zooAlvo.y = 380;
			
		break;
		case 9:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 390 + (900 * this.l);
			this.zooAlvo.y = 440;
			
		break;
		case 0:
			this.zooAlvo = zona_alvo.clone(true);
			this.zooAlvo.x = 470 + (900 * this.l);
			this.zooAlvo.y = 530;
			
		break;
		
	}
	zonasAlvo_.addChild(this.zooAlvo);
	
}

//Funcao que instancia placas e coloca elas na posicao divididas igualmente no palco
function arrumaPlacas(d){
	
	placas_.removeAllChildren();
	
	var p;
	for (p = 0; p < d; p++){
		
		this.placa = plcAmb.clone();
		this.placa.y = 0;
		this.placa.x = (675/(d+1)) + ((675/(d+1)) * p);
		this.placa.completo = false;
		placas_.addChild(this.placa);
	}
	underScale(placas_);
	placas_.y = 608;
	placas_.x = 60;
	interface_.addChild(placas_);
}

//Funcao que eh chamada para mostrar em qual ambiente o jogador atualmente est‡
function ajustaPlacas(a){
	
	var l;
	
	for( l = 0; l < _dificuldade; l++){
		
				
			if(a == l)
			{
				
				this.placas_.getChildAt(a).image = setaAmb.image;
			
			} else if (!placas_.getChildAt(l).completo){
		
				this.placas_.getChildAt(l).image = plcAmb.image;
			
			}
			
			else if (a != l)
			{
				if(placas_.getChildAt(l).completo){
				
				this.placas_.getChildAt(l).image = null;
				
				}
			}
	
		
	}
}