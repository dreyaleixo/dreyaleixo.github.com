var user_mod;

//Funcao carregada quando a pagina completa o download
function onLoad(){
	
	//Clicar nos nomes dos usuarios
	$('.users').click(function (){
		
		$('.settings_user').hide();
		$(this).children().children('.settings_user').show();
		
	});
	
	//Botao Editar Usuaario
	$('.editar_btn').click(function(){
		
		$('#sombra').show();
		$('.editar_user').show();
		
	});
	
	//Botao de fecharo Editar usuario
	$('#fexa_edituser').click(function(){
		
		$('#sombra').hide();
		$('.editar_user').hide();
		
	});
	
	//Botao de salvar o Editar o usuario
	$('#salvar_user').click(function(){
		
		$('#sombra').hide();
		$('.editar_user').hide();
		//CODIGO PARA ALTERAR O USUARIO AQUI
	});
	
	
	//Botao apagar usuario
	$('.apagar_btn').click(function(){
		
		$('#sombra').show();
		$('.apagar_user').show();
		
	});
	
	//Confirmou o apagamento
	$('#sim_apagar').click(function(){
		
		$('#sombra').hide();
		$('.apagar_user').hide();
		//CODIGOS PARA APAGAR O USUARIO
		
	});
	
	//Cancelou o apagamento
	$('#nao_apagar').click(function(){
		
		$('#sombra').hide();
		$('.apagar_user').hide();
		//CODIGO PRA DELETAR O USUARIO AQUI
		
	});
	
	//botao Nova notificavao
	$('#new_noti').click(function(){
		
		//LINK PARA A PAGINA de NOVAS notificacoes
		
	});

	//botao notificacoes
	$('#notis').click(function(){
	
		//LINKS PARA A PAGINA DE NOTIFICACOES
		
	});
	
	//vini muito loko, esse botao eh o de cadastro.
	$('#cadastrar').click(function(){
		
		$('#sombra').show();
		$('.new_user').show();
		
	});
	
	//Dentro do cadastro, esse eh o botao do radio USUARIO, modificado na variavel user_mod
	$('#user_usuario').click(function(){
		
		$('#user_adm').css("background-image", "none");
		$('#user_usuario').css("background-image", "url('assets/newuser/selecao.png')");
		user_mod = 1;
		
	});
	
	//Dentro do cadastro, esse eh o botao do radio ADM, modificado na variavel user_mod
	$('#user_adm').click(function(){
		
		$('#user_usuario').css("background-image", "none");
		$('#user_adm').css("background-image", "url('assets/newuser/selecao.png')");
		user_mod = 2;
		
		
	});
	
	//Dentro do EDITAR USUARIO, esse eh o botao do radio USUARIO, modificado na variavel user_mod
	$('#euser_usuario').click(function(){
		
		$('#euser_adm').css("background-image", "none");
		$('#euser_usuario').css("background-image", "url('assets/newuser/selecao.png')");
		user_mod = 1;
		
	});
	
	//Dentro do EDITAR USUARIO, esse eh o botao do radio ADM, modificado na variavel user_mod
	$('#euser_adm').click(function(){
		
		$('#euser_usuario').css("background-image", "none");
		$('#euser_adm').css("background-image", "url('assets/newuser/selecao.png')");
		user_mod = 2;
		
		
	});
	
	//E esse eh o botao que eh apertado quando se conclui o cadastro.
	$('#incluir_user').click(function(){
		
		$('#sombra').hide();
		$('.new_user').hide();
		$('#user_usuario').css("background-image", "none");
		$('#user_adm').css("background-image", "none");
		//CODIGO PRA GERAR UM ADM NERDAO OU UM USUARIO MTO LOKO AQUI
	});
	
	//Botao que fexa a janela de noso Usuario
	$('#fexa_newuser').click(function(){
		
		$('#sombra').hide();
		$('.new_user').hide();
		$('#user_usuario').css("background-image", "none");
		$('#user_adm').css("background-image", "none");
		
	});
	
	//PARTE DO SCRIPT DO NOVA rNOTI
	$('#fexa_novanoti').click(function(){
		
		$('#sombra2').show();
		$('.certeza_cancelar').show();
	});
	
	$('#newpublicar-agora').click(function(){
		
		$('#sombra').hide();
		$('.nova_noti').hide();
		
	});

	$('#salvar_novanoti').click(function(){
	
	$('#sombra').hide();
	$('.nova_noti').hide();
	
	});
	
	$('#new_noti').click(function(){
		
		$('#sombra').show();
		$('.nova_noti').show();
		
		});
	

	//Confirmou o apagamento
	$('#sim_cancel').click(function(){
		
		$('#sombra').hide();
		$('.editar_noti').hide();
		$('#sombra2').hide();
		$('.certeza_cancelar').hide();
		$('.nova_noti').hide();
		
	});
	
	//Confirmou o apagamento
	$('#nao_cancel').click(function(){
		
		$('#sombra2').hide();
		$('.certeza_cancelar').hide();
		
	});
}

