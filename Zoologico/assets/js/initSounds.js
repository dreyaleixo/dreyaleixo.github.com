/*

		Script que vai rodar e instanciar os sons do jogo
			Andrey Pereira Aleixo

*/

//Variaveis de som
var mainMusic, som_bttn_menu, som_troca_animal,
	som_deslize, som_acerto, som_erro,
	som_bode, som_camelo, som_foca, som_croc,
	som_macaco, som_pavao, som_peixe, som_rino,
	som_tucano;

//Funcao Principal
function initSounds(){
	
	//Musica
	mainMusic = new Howl({
			urls : ["assets/sounds/musics/1-tema-zoologico-patucara.mp3","assets/sounds/musics/1-tema-zoologico-patucara.ogg"],
			loop : true,
			volume : 0.1,
	});
	
	//Sons de Botoes e Interface
	som_bttn_menu = new Howl({
		urls : ["assets/sounds/sfx/botao-menu.ogg","assets/sounds/sfx/botao-menu.mp3"],
		volume : 0.1,
	});
	
	som_deslize = new Howl({
		urls : ["assets/sounds/sfx/tela-deslizando.ogg","assets/sounds/sfx/tela-deslizando.mp3"],
		volume : 0.1,
	});
	
	som_troca_animal = new Howl({
		urls : ["assets/sounds/sfx/botao-selecao-animais.ogg","assets/sounds/sfx/botao-selecao-animais.mp3"],
		volume : 0.1,
	});
	
	//Sons de Vitoria e Derrota
	som_acerto = new Howl({
		urls : ["assets/sounds/sfx/som-acerto.ogg","assets/sounds/sfx/som-acerto.mp3"],
		volume : 0.1,
	});
	
	som_erro = new Howl({
		urls : ["assets/sounds/sfx/som-erro.ogg","assets/sounds/sfx/som-erro.mp3"],
		volume : 0.1,
	});
	
	//Sons dos Animais
	som_bode = new Howl({
		urls : ["assets/sounds/sfx/bode.ogg","assets/sounds/sfx/bode.mp3"],
		volume : 0.1,
	});
	
	som_camelo = new Howl({
		urls : ["assets/sounds/sfx/camelo.ogg","assets/sounds/sfx/camelo.mp3"],
		volume : 0.1,
	});
	
	som_foca = new Howl({
		urls : ["assets/sounds/sfx/foca.ogg","assets/sounds/sfx/foca.mp3"],
		volume : 0.1,
	});
	
	som_leao = new Howl({
		urls : ["assets/sounds/sfx/leao.ogg","assets/sounds/sfx/leao.mp3"],
		volume : 0.1,
	});
	
	som_croc = new Howl({
		urls : ["assets/sounds/sfx/crocodilo.ogg","assets/sounds/sfx/crocodilo.mp3"],
		volume : 0.1,
	});
	
	som_macaco = new Howl({
		urls : ["assets/sounds/sfx/macaco.ogg","assets/sounds/sfx/macaco.mp3"],
		volume : 0.1,
	});
	
	som_pavao = new Howl({
		urls : ["assets/sounds/sfx/pavao.ogg","assets/sounds/sfx/pavao.mp3"],
		volume : 0.1,
	});
	
	som_peixe = new Howl({
		urls : ["assets/sounds/sfx/peixe.ogg","assets/sounds/sfx/peixe.mp3"],
		volume : 0.1,
	});
	
	som_rino = new Howl({
		urls : ["assets/sounds/sfx/rinoceronte.ogg","assets/sounds/sfx/rinoceronte.mp3"],
		volume : 0.1,
	});
	
	som_tucano = new Howl({
		urls : ["assets/sounds/sfx/tucano.ogg","assets/sounds/sfx/tucano.mp3"],
		volume : 0.1,
	});
	
	
}