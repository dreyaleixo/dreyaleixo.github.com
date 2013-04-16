//Funcao carregada quando a pagina completa o download
function onLoad(){
	
	//Faz o menu Erro desaparecer quando clickado no X
	$('#fechar_erro').mouseup(function(){
		
		$('#erro').hide();
		$('#sombra').hide();
		$('#fechar_erro').hide();
		
	});
	
}

//Funcao que chama o erro
function onError(){
	
	$('#erro').show();
	$('#sombra').show();
	$('#fechar_erro').show();
	
}