var noti_mod;

//Funcao carregada quando a pagina completa o download
function onLoad(){
	
	//Clicar nos nomes dos usuarios
	$('.notifica').click(function (){
		
		$('.settings_noti').hide();
		$(this).children().children('.settings_noti').show();
		
	});
	
	//Botao Editar Usuaario
	$('.editar_btn').click(function(){
		
		$('#sombra').show();
		$('.editar_noti').show();
		
	});
	
	//Botao de fecharo Editar noti
	$('#fexa_editnoti').click(function(){
		
		$('#sombra2').show();
		$('.certeza_cancelar').show();
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
	
	//Botao de fechar a janela de erro
	$('#fexa_erro_info').click(function(){
		
		$('#sombra').hide();
		$('.error_noti').hide();
		
	});
	
	//Botao de fecharo Visualizar noti
	$('#fexa-exibe-noti').click(function(){
		
		$('#sombra').hide();
		$('.exibeNoti').hide();
		
	});
	//Botao de salvar o Editar o usuario
	$('#salvar_noti').click(function(){
		
		$('#sombra').hide();
		$('.editar_noti').hide();
		//CODIGO PARA ALTERAR O NOTI AQUI
	});
	
	
	//Botao apagar usuario
	$('.apagar_btn').click(function(){
		
		$('#sombra').show();
		$('.apagar_noti').show();
		
	});
	
	//Confirmou o apagamento
	$('#sim_apagar').click(function(){
		
		$('#sombra').hide();
		$('.apagar_noti').hide();
		//CODIGOS PARA APAGAR A NOTI
		
	});
	
	//Clickou em Visualizar
	$('.visualizar_btn').click(function(){
		
		$('#sombra').show();
		$('.exibeNoti').show();
	});
	
	
	//Cancelou o apagamento
	$('#nao_apagar').click(function(){
		
		$('#sombra').hide();
		$('.apagar_noti').hide();
		
	});
	
	//botao Nova notificavao
	$('#new_noti').click(function(){
		
		$('#sombra').show();
		$('.nova_noti').show();
		
	});

	//botao notificacoes
	$('#usuarios').click(function(){
	
		//LINKS PARA A PAGINA DE USUARIOS
		
		
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
	
}

