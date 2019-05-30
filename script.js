$(document).ready(() => {
	//selecioanando link documentação e suporte
	$('#documentacao').on('click', () => {
		//console.log('documentação')
		//$('#pagina').load('documentacao.html') // request de recurso que esta no servidor da aplicação
		// $.get('documentacao.html', data => {
		// 	$('#pagina').html(data)
		// })
		$.post('documentacao.html', data => {
			$('#pagina').html(data)
		})
	})
	$('#suporte').on('click', () => {
		//console.log('suporte')
		// $('#pagina').load('suporte.html')
		// $.get('suporte.html', data => {
		// 	$('#pagina').html(data)
		// })
		$.post('suporte.html', data => {
			$('#pagina').html(data)
		})
	})

	//ajax
	$('#competencia').on('change', (e) => {

		let competencia = $(e.target).val()


		$.ajax({//@param1 método de req, @param2 url, @param3 dados ,@param4 oq acontece caso de suc. @param5 o que acontece caso de erro
			type : 'GET',
			url : 'app.php',//enviando parametros via get
			data : `competencia=${competencia}`, //x-www fotm url encoded xx=x&y=y...
			success : (dados) => {console.log(dados)},
			error : (erro) => {console.log(erro)}
		})
	})

	
})