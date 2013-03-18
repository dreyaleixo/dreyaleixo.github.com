/*

	Script dos comandos do Teclado e de Mouse
		Andrey pereira Aleixo


*/

document.onkeyup = function(e) {
	switch(e.keyCode) {
		case 37:
			if(elem_e.image == esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).image) {
				elementosContainer.addChildAt(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1), 0);
				createjs.Tween.get(elementosContainer.getChildAt(0)).to({x : elem_e.x, y : elem_e.y}, 1000, createjs.Ease.backOut);
				if (esteira.getNumChildren() > 0) {
					esteiraContainer.addChildAt(esteira.getChildAt(0), 0);
				}
				refreshEsteira();
			} else {
				createjs.Tween.get(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1)).to({  y : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).y, 
																										   x : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).x, 
																									     },
																										   2000,
																										   createjs.Ease.elasticInOut
																										);
			}
			break;
			
		case 39:
			if(elem_d.image == esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).image) {
				elementosContainer.addChildAt(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1), 0);
				createjs.Tween.get(elementosContainer.getChildAt(0)).to({x : elem_d.x, y : elem_d.y}, 1000, createjs.Ease.backOut);
				if (esteira.getNumChildren() > 0) {
					esteiraContainer.addChildAt(esteira.getChildAt(0), 0);
				}
				refreshEsteira();
			} else {
				createjs.Tween.get(esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1)).to({  y : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).y, 
					   x : esteiraContainer.getChildAt(esteiraContainer.getNumChildren()-1).x, 
				     },
					   2000,
					   createjs.Ease.elasticInOut
					);
			}
			break;
	}
};

