/*

		Script que vai rodar quando os spritesheets forem carregados,
		a funcao deste Ž organizar animacoes e sprites dos respectivos animais em variaveis que podemos utilizar
				Andrey Pereira Aleixo

*/
var anim;
var anima;

//Funcao que inicia os Sheets
function initSheets(){
	
	//Patucara
	patu_sheet ={"animations": {
		"pisca": {frames: [0, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 0]},
		"asa": {frames: [0, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13]},
		"asa3": {frames: [0, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13,
		                  0, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13,
		                  0, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13]}
		},
	"images": [patucara_sheet.image.src],
	"frames": {"regX": 66.5, "height": 207, "regY": 103.5, "width": 123}};
	ss = new createjs.SpriteSheet(patu_sheet);
	patucara = new createjs.BitmapAnimation(ss);
	patucara.y = 105;
	patucara.x = 160;
	patucara.gotoAndPlay("asa");
	patucara.scaleX = patucara.scaleY = 0.75;
	patucara.onAnimationEnd = pauseAnim;
	
	//Bode
	
		//Cabeca
			bode_cabeca_sheet ={"animations": { anim: [0, 8, anim, 2] },
					"images": [bode_cabeca_spritesheet.image.src],
					"frames": {"regX": (bode_cabeca_spritesheet.image.width/9)/2, "height": bode_cabeca_spritesheet.image.height, "regY": bode_cabeca_spritesheet.image.height, "width": bode_cabeca_spritesheet.image.width/9}};
					ss = new createjs.SpriteSheet(bode_cabeca_sheet);
			bode_cba = new createjs.BitmapAnimation(ss);
			bode_cba.gotoAndStop(0);
			bode_cba.onAnimationEnd = pauseAnim;
			bode_cba.off_crpX = 0;
			bode_cba.off_crpY = -30;
			
		//Corpo
			bode_corpo_sheet ={"animations": { anim: [0, 0, anim, 2] },
					"images": [bode_corpo_spritesheet.image.src],
					"frames": {"regX": (bode_corpo_spritesheet.image.width)/2, "height": bode_corpo_spritesheet.image.height, "regY": bode_corpo_spritesheet.image.height, "width": bode_corpo_spritesheet.image.width}};
					ss = new createjs.SpriteSheet(bode_corpo_sheet);
			ss = new createjs.SpriteSheet(bode_corpo_sheet);
			bode_crp = new createjs.BitmapAnimation(ss);
			bode_crp.gotoAndStop(0);
			bode_crp.onAnimationEnd = pauseAnim;
			bode_crp.off_rboX = -25;
			bode_crp.off_rboY = -55;
			bode_crp.off_cbaX = 30;
			bode_crp.off_cbaY = -75;
	
		//Rabo
			bode_rabo_sheet ={"animations": { anim: [ 0, 7, anim, 2] },
					"images": [bode_rabo_spritesheet.image.src],
					"frames": {"regX": (bode_rabo_spritesheet.image.width/8)/2, "height": bode_rabo_spritesheet.image.height, "regY": bode_rabo_spritesheet.image.height, "width": bode_rabo_spritesheet.image.width/8}};
			ss = new createjs.SpriteSheet(bode_rabo_sheet);
			bode_rbo = new createjs.BitmapAnimation(ss);
			bode_rbo.gotoAndStop(0);
			bode_rbo.onAnimationEnd = pauseAnim;
			bode_rbo.off_crpX = 10;
			bode_rbo.off_crpY = -5;
	
	//Camelo
	
		//Cabeca
			camelo_cabeca_sheet ={"animations": { anim: [ 0, 9, anim, 2] },
					"images": [camelo_cabeca_spritesheet.image.src],
					"frames": {"regX": (camelo_cabeca_spritesheet.image.width/10)/2, "height": camelo_cabeca_spritesheet.image.height, "regY": camelo_cabeca_spritesheet.image.height, "width": camelo_cabeca_spritesheet.image.width/10}};
					ss = new createjs.SpriteSheet(camelo_cabeca_sheet);
			ss = new createjs.SpriteSheet(camelo_cabeca_sheet);
			camelo_cba = new createjs.BitmapAnimation(ss);
			camelo_cba.gotoAndStop(0);
			camelo_cba.onAnimationEnd = pauseAnim;
			camelo_cba.off_crpX = -15;
				camelo_cba.off_crpY = -15;
			
		//Corpo
			camelo_corpo_sheet ={"animations": { anim: [ 0, 0, anim, 2] },
					"images": [camelo_corpo_spritesheet.image.src],
					"frames": {"regX": (camelo_corpo_spritesheet.image.width)/2, "height": camelo_corpo_spritesheet.image.height, "regY": camelo_corpo_spritesheet.image.height, "width": camelo_corpo_spritesheet.image.width}};
					ss = new createjs.SpriteSheet(camelo_corpo_sheet);
			ss = new createjs.SpriteSheet(camelo_corpo_sheet);
			camelo_crp = new createjs.BitmapAnimation(ss);
			camelo_crp.gotoAndStop(0);
			camelo_crp.onAnimationEnd = pauseAnim;
			camelo_crp.off_rboX = -35;
				camelo_crp.off_rboY = -60;
				camelo_crp.off_cbaX = 30;
				camelo_crp.off_cbaY = -110;
	
		//Rabo
			camelo_rabo_sheet ={"animations": { anim: [ 0, 8, anim, 2] },
					"images": [camelo_rabo_spritesheet.image.src],
					"frames": {"regX": (camelo_rabo_spritesheet.image.width/9)/2, "height": camelo_rabo_spritesheet.image.height, "regY": camelo_rabo_spritesheet.image.height, "width": camelo_rabo_spritesheet.image.width/9}};
					ss = new createjs.SpriteSheet(camelo_rabo_sheet);
			ss = new createjs.SpriteSheet(camelo_rabo_sheet);
			camelo_rbo = new createjs.BitmapAnimation(ss);
			camelo_rbo.gotoAndStop(0);
			camelo_rbo.onAnimationEnd = pauseAnim;
			camelo_rbo.off_crpX = 10;
				camelo_rbo.off_crpY = -40;
			
	//Crocodilo
	
		//Cabeca
			croc_cabeca_sheet ={"animations": { anim: [ 0, 11, anim, 2] },
					"images": [croc_cabeca_spritesheet.image.src],
					"frames": {"regX": (croc_cabeca_spritesheet.image.width/12)/2, "height": croc_cabeca_spritesheet.image.height, "regY": croc_cabeca_spritesheet.image.height, "width": croc_cabeca_spritesheet.image.width/12}};
					ss = new createjs.SpriteSheet(croc_cabeca_sheet);
			ss = new createjs.SpriteSheet(croc_cabeca_sheet);
			croc_cba = new createjs.BitmapAnimation(ss);
			croc_cba.gotoAndStop(0);
			croc_cba.onAnimationEnd = pauseAnim;
			croc_cba.off_crpX = -20;
				croc_cba.off_crpY = -5;
			
		//Corpo
			croc_corpo_sheet ={"animations": { anim: [ 0, 0, anim, 2] },
					"images": [croc_corpo_spritesheet.image.src],
					"frames": {"regX": (croc_corpo_spritesheet.image.width)/2, "height": croc_corpo_spritesheet.image.height, "regY": croc_corpo_spritesheet.image.height, "width": croc_corpo_spritesheet.image.width}};
					ss = new createjs.SpriteSheet(croc_corpo_sheet);
			ss = new createjs.SpriteSheet(croc_corpo_sheet);
			croc_crp = new createjs.BitmapAnimation(ss);
			croc_crp.gotoAndStop(0);
			croc_crp.onAnimationEnd = pauseAnim;
			croc_crp.off_rboX = -45;
				croc_crp.off_rboY = -45;
				croc_crp.off_cbaX = 45;
				croc_crp.off_cbaY = -50;
	
		//Rabo
			croc_rabo_sheet ={"animations": { anim: [ 0, 5, anim, 2] },
					"images": [croc_rabo_spritesheet.image.src],
					"frames": {"regX": (croc_rabo_spritesheet.image.width/6)/2, "height": croc_rabo_spritesheet.image.height, "regY": croc_rabo_spritesheet.image.height, "width": croc_rabo_spritesheet.image.width/6}};
					ss = new createjs.SpriteSheet(croc_rabo_sheet);
			ss = new createjs.SpriteSheet(croc_rabo_sheet);
			croc_rbo = new createjs.BitmapAnimation(ss);
			croc_rbo.gotoAndStop(0);
			croc_rbo.onAnimationEnd = pauseAnim;
			croc_rbo.rotation = 10;
			croc_rbo.off_crpX = 25;
				croc_rbo.off_crpY = -10;
	
	//Foca
	
		//Cabeca
			foca_cabeca_sheet ={"animations": { anim: [ 0, 7, anim, 2] },
					"images": [foca_cabeca_spritesheet.image.src],
					"frames": {"regX": (foca_cabeca_spritesheet.image.width/8)/2, "height": foca_cabeca_spritesheet.image.height, "regY": foca_cabeca_spritesheet.image.height, "width": foca_cabeca_spritesheet.image.width/8}};
					ss = new createjs.SpriteSheet(foca_cabeca_sheet);
			ss = new createjs.SpriteSheet(foca_cabeca_sheet);
			foca_cba = new createjs.BitmapAnimation(ss);
			foca_cba.gotoAndStop(0);
			foca_cba.onAnimationEnd = pauseAnim;
			foca_cba.off_crpX = -15;
				foca_cba.off_crpY = -10;
			
		//Corpo
			foca_corpo_sheet ={"animations": { anim: [ 0, 13, anim, 2] },
					"images": [foca_corpo_spritesheet.image.src],
					"frames": {"regX": (foca_corpo_spritesheet.image.width/14)/2, "height": foca_corpo_spritesheet.image.height, "regY": foca_corpo_spritesheet.image.height, "width": foca_corpo_spritesheet.image.width/14}};
					ss = new createjs.SpriteSheet(foca_corpo_sheet);
			ss = new createjs.SpriteSheet(foca_corpo_sheet);
			foca_crp = new createjs.BitmapAnimation(ss);
			foca_crp.gotoAndStop(0);
			foca_crp.onAnimationEnd = pauseAnim;
			foca_crp.off_rboX = -45;
				foca_crp.off_rboY = -35;
				foca_crp.off_cbaX = 20;
				foca_crp.off_cbaY = -85;
			
		//Rabo
			foca_rabo_sheet ={"animations": { anim: [ 0, 12, anim, 2] },
					"images": [foca_rabo_spritesheet.image.src],
					"frames": {"regX": (foca_rabo_spritesheet.image.width/13)/2, "height": foca_rabo_spritesheet.image.height, "regY": foca_rabo_spritesheet.image.height, "width": foca_rabo_spritesheet.image.width/13}};
					ss = new createjs.SpriteSheet(foca_rabo_sheet);
			ss = new createjs.SpriteSheet(foca_rabo_sheet);
			foca_rbo = new createjs.BitmapAnimation(ss);
			foca_rbo.gotoAndStop(0);
			foca_rbo.onAnimationEnd = pauseAnim;
			foca_rbo.rotation = 15;
			foca_rbo.off_crpX = 30;
				foca_rbo.off_crpY = -5;
			
	//Leao
	
		//Cabeca
			leao_cabeca_sheet ={"animations": { anim: [ 0, 7, anim, 2] },
					"images": [leao_cabeca_spritesheet.image.src],
					"frames": {"regX": (leao_cabeca_spritesheet.image.width/8)/2, "height": leao_cabeca_spritesheet.image.height, "regY": leao_cabeca_spritesheet.image.height, "width": leao_cabeca_spritesheet.image.width/8}};
					ss = new createjs.SpriteSheet(leao_cabeca_sheet);
			ss = new createjs.SpriteSheet(leao_cabeca_sheet);
			leao_cba = new createjs.BitmapAnimation(ss);
			leao_cba.gotoAndStop(0);
			leao_cba.onAnimationEnd = pauseAnim;
			leao_cba.off_crpX = -5;
				leao_cba.off_crpY = -25;
			
		//Corpo
			leao_corpo_sheet ={"animations": { anim: [ 0, 0, anim, 2] },
					"images": [leao_corpo_spritesheet.image.src],
					"frames": {"regX": (leao_corpo_spritesheet.image.width)/2, "height": leao_corpo_spritesheet.image.height, "regY": leao_corpo_spritesheet.image.height, "width": leao_corpo_spritesheet.image.width}};
					ss = new createjs.SpriteSheet(leao_corpo_sheet);
			ss = new createjs.SpriteSheet(leao_corpo_sheet);
			leao_crp = new createjs.BitmapAnimation(ss);
			leao_crp.gotoAndStop(0);
			leao_crp.onAnimationEnd = pauseAnim;
			leao_crp.off_rboX = -35;
				leao_crp.off_rboY = -60;
				leao_crp.off_cbaX = 45;
				leao_crp.off_cbaY = -45;
				
		//Rabo
			leao_rabo_sheet ={"animations": { anim: [ 0, 5, anim, 2] },
					"images": [leao_rabo_spritesheet.image.src],
					"frames": {"regX": (leao_rabo_spritesheet.image.width/6)/2, "height": leao_rabo_spritesheet.image.height, "regY": leao_rabo_spritesheet.image.height, "width": leao_rabo_spritesheet.image.width/6}};
					ss = new createjs.SpriteSheet(leao_rabo_sheet);
			ss = new createjs.SpriteSheet(leao_rabo_sheet);
			leao_rbo = new createjs.BitmapAnimation(ss);
			leao_rbo.gotoAndStop(0);
			leao_rbo.onAnimationEnd = pauseAnim;
			leao_rbo.off_crpX = 15;
				leao_rbo.off_crpY = -10;
				
	//Macaco
	
		//Cabeca
			macaco_cabeca_sheet ={"animations": { anim: [ 0, 10, anim, 2] },
					"images": [macaco_cabeca_spritesheet.image.src],
					"frames": {"regX": (macaco_cabeca_spritesheet.image.width/11)/2, "height": macaco_cabeca_spritesheet.image.height, "regY": macaco_cabeca_spritesheet.image.height, "width": macaco_cabeca_spritesheet.image.width/11}};
					ss = new createjs.SpriteSheet(macaco_cabeca_sheet);
			ss = new createjs.SpriteSheet(macaco_cabeca_sheet);
			macaco_cba = new createjs.BitmapAnimation(ss);
			macaco_cba.gotoAndStop(0);
			macaco_cba.onAnimationEnd = pauseAnim;
			macaco_cba.off_crpX = -5;
				macaco_cba.off_crpY = -15;
			
		//Corpo
			macaco_corpo_sheet ={"animations": { anim: [ 0, 0, anim, 2] },
					"images": [macaco_corpo_spritesheet.image.src],
					"frames": {"regX": (macaco_corpo_spritesheet.image.width)/2, "height": macaco_corpo_spritesheet.image.height, "regY": macaco_corpo_spritesheet.image.height, "width": macaco_corpo_spritesheet.image.width}};
					ss = new createjs.SpriteSheet(macaco_corpo_sheet);
			ss = new createjs.SpriteSheet(macaco_corpo_sheet);
			macaco_crp = new createjs.BitmapAnimation(ss);
			macaco_crp.gotoAndStop(0);
			macaco_crp.onAnimationEnd = pauseAnim;
			macaco_crp.off_rboX = -25;
				macaco_crp.off_rboY = -50;
				macaco_crp.off_cbaX = 20;
				macaco_crp.off_cbaY = -55;
				
		//Rabo
			macaco_rabo_sheet ={"animations": { anim: [ 0, 7, anim, 2] },
					"images": [macaco_rabo_spritesheet.image.src],
					"frames": {"regX": (macaco_rabo_spritesheet.image.width/8)/2, "height": macaco_rabo_spritesheet.image.height, "regY": macaco_rabo_spritesheet.image.height, "width": macaco_rabo_spritesheet.image.width/8}};
					ss = new createjs.SpriteSheet(macaco_rabo_sheet);
			ss = new createjs.SpriteSheet(macaco_rabo_sheet);
			macaco_rbo = new createjs.BitmapAnimation(ss);
			macaco_rbo.gotoAndStop(0);
			macaco_rbo.onAnimationEnd = pauseAnim;
			macaco_rbo.off_crpX = 20;
				macaco_rbo.off_crpY = -5;
				
	//Rino
	
		//Cabeca
			rino_cabeca_sheet ={"animations": { anim: [ 0, 12, anim, 2] },
					"images": [rino_cabeca_spritesheet.image.src],
					"frames": {"regX": (rino_cabeca_spritesheet.image.width/13)/2, "height": rino_cabeca_spritesheet.image.height, "regY": rino_cabeca_spritesheet.image.height, "width": rino_cabeca_spritesheet.image.width/13}};
					ss = new createjs.SpriteSheet(rino_cabeca_sheet);
			ss = new createjs.SpriteSheet(rino_cabeca_sheet);
			rino_cba = new createjs.BitmapAnimation(ss);
			rino_cba.gotoAndStop(0);
			rino_cba.onAnimationEnd = pauseAnim;
			rino_cba.off_crpX = -15;
				rino_cba.off_crpY = -25;
			
		//Corpo
			rino_corpo_sheet ={"animations": { anim: [ 0, 0, anim, 2] },
					"images": [rino_corpo_spritesheet.image.src],
					"frames": {"regX": (rino_corpo_spritesheet.image.width)/2, "height": rino_corpo_spritesheet.image.height, "regY": rino_corpo_spritesheet.image.height, "width": rino_corpo_spritesheet.image.width}};
					ss = new createjs.SpriteSheet(rino_corpo_sheet);
			ss = new createjs.SpriteSheet(rino_corpo_sheet);
			rino_crp = new createjs.BitmapAnimation(ss);
			rino_crp.gotoAndStop(0);
			rino_crp.onAnimationEnd = pauseAnim;
			rino_crp.off_rboX = -35;
				rino_crp.off_rboY = -55;
				rino_crp.off_cbaX = 30;
				rino_crp.off_cbaY = -70;
	
		//Rabo
			rino_rabo_sheet ={"animations": { anim: [ 0, 11, anim, 2] },
					"images": [rino_rabo_spritesheet.image.src],
					"frames": {"regX": (rino_rabo_spritesheet.image.width/12)/2, "height": rino_rabo_spritesheet.image.height, "regY": rino_rabo_spritesheet.image.height, "width": rino_rabo_spritesheet.image.width/12}};
					ss = new createjs.SpriteSheet(rino_rabo_sheet);
			ss = new createjs.SpriteSheet(rino_rabo_sheet);
			rino_rbo = new createjs.BitmapAnimation(ss);
			rino_rbo.gotoAndStop(0);
			rino_rbo.onAnimationEnd = pauseAnim;
			rino_rbo.off_crpX = 10;
				rino_rbo.off_crpY = -5;
			
	//Pavao
	
		//Cabeca
			pavao_cabeca_sheet ={"animations": { anim: [ [0, 2], anim, 2] },
					"images": [pavao_cabeca_spritesheet.image.src],
					"frames": {"regX": (pavao_cabeca_spritesheet.image.width/6)/2, "height": pavao_cabeca_spritesheet.image.height, "regY": pavao_cabeca_spritesheet.image.height, "width": pavao_cabeca_spritesheet.image.width/6}};
					ss = new createjs.SpriteSheet(pavao_cabeca_sheet);
			ss = new createjs.SpriteSheet(pavao_cabeca_sheet);
			pavao_cba = new createjs.BitmapAnimation(ss);
			pavao_cba.gotoAndStop(0);
			pavao_cba.onAnimationEnd = pauseAnim;
			pavao_cba.off_crpX = -5;
				pavao_cba.off_crpY = 0;
			
		//Corpo
			pavao_corpo_sheet ={"animations": { anim: [ 0, 1, anim, 5] },
					"images": [pavao_corpo_spritesheet.image.src],
					"frames": {"regX": (pavao_corpo_spritesheet.image.width/2)/2, "height": pavao_corpo_spritesheet.image.height, "regY": pavao_corpo_spritesheet.image.height, "width": pavao_corpo_spritesheet.image.width/2}};
					ss = new createjs.SpriteSheet(pavao_corpo_sheet);
			ss = new createjs.SpriteSheet(pavao_corpo_sheet);
			pavao_crp = new createjs.BitmapAnimation(ss);
			pavao_crp.gotoAndStop(0);
			pavao_crp.onAnimationEnd = pauseAnim;
			pavao_crp.off_rboX = -20;
				pavao_crp.off_rboY = -45;
				pavao_crp.off_cbaX = 20;
				pavao_crp.off_cbaY = -75;
	
		//Rabo
			pavao_rabo_sheet ={"animations": { anim: [ 0, 12, anim, 2] },
					"images": [pavao_rabo_spritesheet.image.src],
					"frames": {"regX": (pavao_rabo_spritesheet.image.width/13)/2, "height": pavao_rabo_spritesheet.image.height, "regY": pavao_rabo_spritesheet.image.height, "width": pavao_rabo_spritesheet.image.width/13}};
					ss = new createjs.SpriteSheet(pavao_rabo_sheet);
			ss = new createjs.SpriteSheet(pavao_rabo_sheet);
			pavao_rbo = new createjs.BitmapAnimation(ss);
			pavao_rbo.gotoAndStop(0);
			pavao_rbo.onAnimationEnd = pauseAnim;
			pavao_rbo.off_crpX = 23;
				pavao_rbo.off_crpY = -15;
	
	//Peixe
	
		//Cabeca
			peixe_cabeca_sheet ={"animations": { anim: [ 0, 8, anim, 2] },
					"images": [peixe_cabeca_spritesheet.image.src],
					"frames": {"regX": (peixe_cabeca_spritesheet.image.width/9)/2, "height": peixe_cabeca_spritesheet.image.height, "regY": peixe_cabeca_spritesheet.image.height, "width": peixe_cabeca_spritesheet.image.width/9}};
					ss = new createjs.SpriteSheet(peixe_cabeca_sheet);
			ss = new createjs.SpriteSheet(peixe_cabeca_sheet);
			peixe_cba = new createjs.BitmapAnimation(ss);
			peixe_cba.gotoAndStop(0);
			peixe_cba.onAnimationEnd = pauseAnim;
			peixe_cba.off_crpX = -10;
				peixe_cba.off_crpY = -20;
	
		//Corpo
			peixe_corpo_sheet ={"animations": { anim: [ 0, 6, anim, 2] },
					"images": [peixe_corpo_spritesheet.image.src],
					"frames": {"regX": (peixe_corpo_spritesheet.image.width/7)/2, "height": peixe_corpo_spritesheet.image.height, "regY": peixe_corpo_spritesheet.image.height, "width": peixe_corpo_spritesheet.image.width/7}};
					ss = new createjs.SpriteSheet(peixe_corpo_sheet);
			ss = new createjs.SpriteSheet(peixe_corpo_sheet);
			peixe_crp = new createjs.BitmapAnimation(ss);
			peixe_crp.gotoAndStop(0);
			peixe_crp.onAnimationEnd = pauseAnim;
			peixe_crp.off_rboX = -20;
				peixe_crp.off_rboY = -30;
				peixe_crp.off_cbaX = 15;
				peixe_crp.off_cbaY = -30;
	
		//Rabo
			peixe_rabo_sheet ={"animations": { anim: [ 0, 9, anim, 2] },
					"images": [peixe_rabo_spritesheet.image.src],
					"frames": {"regX": (peixe_rabo_spritesheet.image.width/10)/2, "height": peixe_rabo_spritesheet.image.height, "regY": peixe_rabo_spritesheet.image.height, "width": peixe_rabo_spritesheet.image.width/10}};
					ss = new createjs.SpriteSheet(peixe_rabo_sheet);
			ss = new createjs.SpriteSheet(peixe_rabo_sheet);
			peixe_rbo = new createjs.BitmapAnimation(ss);
			peixe_rbo.gotoAndStop(0);
			peixe_rbo.onAnimationEnd = pauseAnim;
			peixe_rbo.off_crpX = 16;
				peixe_rbo.off_crpY = -20;
	
	//Tucano
	
			//Cabeca
			tucano_cabeca_sheet ={"animations": { anim: [ 0, 6, anim, 2] },
					"images": [tucano_cabeca_spritesheet.image.src],
					"frames": {"regX": (tucano_cabeca_spritesheet.image.width/7)/2, "height": tucano_cabeca_spritesheet.image.height, "regY": tucano_cabeca_spritesheet.image.height, "width": tucano_cabeca_spritesheet.image.width/7}};
					ss = new createjs.SpriteSheet(tucano_cabeca_sheet);
			ss = new createjs.SpriteSheet(tucano_cabeca_sheet);
			tucano_cba = new createjs.BitmapAnimation(ss);
			tucano_cba.gotoAndStop(0);
			tucano_cba.onAnimationEnd = pauseAnim;
			tucano_cba.off_crpX = -20;
				tucano_cba.off_crpY = -15;
	
		//Corpo
			tucano_corpo_sheet ={"animations": { anim: [ 0, 1, anim, 5] },
					"images": [tucano_corpo_spritesheet.image.src],
					"frames": {"regX": (tucano_corpo_spritesheet.image.width/2)/2, "height": tucano_corpo_spritesheet.image.height, "regY": tucano_corpo_spritesheet.image.height, "width": tucano_corpo_spritesheet.image.width/2}};
					ss = new createjs.SpriteSheet(tucano_corpo_sheet);
			ss = new createjs.SpriteSheet(tucano_corpo_sheet);
			tucano_crp = new createjs.BitmapAnimation(ss);
			tucano_crp.gotoAndStop(0);
			tucano_crp.onAnimationEnd = pauseAnim;
			tucano_crp.off_rboX = -20;
				tucano_crp.off_rboY = -40;
				tucano_crp.off_cbaX = 10;
				tucano_crp.off_cbaY = -80;
	
		//Rabo
			tucano_rabo_sheet ={"animations": { anim: [ 0, 4, anim, 2] },
					"images": [tucano_rabo_spritesheet.image.src],
					"frames": {"regX": (tucano_rabo_spritesheet.image.width/5)/2, "height": tucano_rabo_spritesheet.image.height, "regY": tucano_rabo_spritesheet.image.height, "width": tucano_rabo_spritesheet.image.width/5}};
					ss = new createjs.SpriteSheet(tucano_rabo_sheet);
			ss = new createjs.SpriteSheet(tucano_rabo_sheet);
			tucano_rbo = new createjs.BitmapAnimation(ss);
			tucano_rbo.gotoAndStop(0);
			tucano_rbo.onAnimationEnd = pauseAnim;
			tucano_rbo.off_crpX = 15;
				tucano_rbo.off_crpY = -5; 
				
		//Seta alvo para mostrar onde os animais sao colocados
				seta_sheet ={"animations": { "set": { frames : [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]} },
						"images": [seta_Spritesheet.image.src],
						"frames": {"regX": (seta_Spritesheet.image.width/4)/2, "height": seta_Spritesheet.image.height, "regY": seta_Spritesheet.image.height, "width": seta_Spritesheet.image.width/4}};
						ss = new createjs.SpriteSheet(seta_sheet);
				ss = new createjs.SpriteSheet(seta_sheet);
				seta_ss = new createjs.BitmapAnimation(ss);
				seta_ss.gotoAndStop(0);

}

