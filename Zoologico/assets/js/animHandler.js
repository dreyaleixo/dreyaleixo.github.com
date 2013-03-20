/*

	Este .js é encacarregado de alterar, carregar e utilizar animaçoes fora do default do Jogo
			Andrey Pereira Aleixo

*/

//Variaves que vao carregar numeros aleatorios
var x, y;

//Funcao que chama uma animaacao aleatoria do Patucara
function animPatucara_random(p){
	
	this.x = Math.ceil(Math.random() * 3);
	
	switch(this.x){
	
	case 1:
		p.gotoAndPlay("pisca");
	break;
	case 2:
		p.gotoAndPlay("asa");
	break;
	case 3:
		p.gotoAndPlay("asa3");
	break;
	
	}
	
}

//Funcao que carrega uma animacao aleatoria baseada nos animais na tela
function animAnimaisA_random(a, aa){

	this.x = Math.ceil(Math.random() *3 );
	
	switch(x){
	
	case 1:
		aa.getChildAt(0).gotoAndPlay("anim");
	break;
	
	case 2:
		aa.getChildAt(1).gotoAndPlay("anim");
	break;
	
	case 3:
		aa.getChildAt(2).gotoAndPlay("anim");
	break;
	
	}

}

//Funcao que carrega uma animacao aleatoria baseada nos animais na tela
function animAnimaisC_random(a, c, d){

	this.y = Math.ceil(Math.random() *3 );
	
	switch(y){
	
	case 1:
		for(var z = 0; z < c.getNumChildren(); z++){
				if(c.getChildAt(z).ambOrig >= 0){
					c.getChildAt(z).getChildAt(0).gotoAndPlay("anim");
				}
		}
	break;
	
	case 2:
		for(var z = 0; z < c.getNumChildren(); z++){
			if(c.getChildAt(z).ambOrig >= 0){
					c.getChildAt(z).getChildAt(1).gotoAndPlay("anim");
			}
		}	
	break;
	
	case 3:
		for(var z = 0; z < c.getNumChildren(); z++){
			if(c.getChildAt(z).ambOrig >= 0){
					c.getChildAt(z).getChildAt(2).gotoAndPlay("anim");
			}
		}
	break;
	
	}
}

function pauseAnim(e){
	
	e.gotoAndStop(0);
	
}