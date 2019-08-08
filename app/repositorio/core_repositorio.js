var fs = require('fs');

module.exports.lerArquivo = function(arquivo, callback){
	
	fs.readFile(arquivo, function(err, resultado){
		
		if(err)
			throw err;
		
		callback(resultado);
		
	});
	
}


module.exports.lerDiretorio = function(diretorio, callback){
	
	fs.readdir(diretorio, function(err, resultado){
		
		if(err)
			throw err;
		
		callback(resultado);
		
	});
	
}


module.exports.criarArquivo = function(diretorio, nome, conteudo){
	
		
	
		var template = `<!DOCTYPE html>
						<html>
							<head>#Titulo</head>
							
							<body>
								#Method #Name #Route #Description
							</body>
						</html>`;
						
						
						

		var temp = '';
		var body = '';
		
		for( var i = 0; i < conteudo.length; i++ ){
			
			temp = template.replace('#Method', conteudo[i].Metodo)
						   .replace('#Name', conteudo[i].Nome)
						   .replace('#Titulo', conteudo[i].Nome)
						   .replace('#Route', conteudo[i].Rota)
						   .replace('#Description', conteudo[i].Descricao);
			
			var nome_arquivo = diretorio + '/' + (conteudo[i].Nome).replace(' ', '_') + '.html';
			
			fs.writeFile(nome_arquivo, temp, function(err){
			
				if(err)
					throw err;
			
			});
					
		}
	
		
		
		
		/*fs.writeFile(nome_arquivo, temp, function(err){
			
			if(err)
				throw err;
			
		});*/

		
}
