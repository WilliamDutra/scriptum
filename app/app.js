var repositorio = require('./repositorio/core_repositorio');

//var dir = __dirname + '/templates/';
var pattern =   /@(.[a-z]*)|(=)|(\[(.*?)\])/gm;
var dir_template = __dirname + '/pages/';

module.exports = function(dir){
	
	repositorio.lerDiretorio(dir, function(resultado){
		
		resultado.forEach(arquivos => {
			
			var nomes_arquivos = dir + '' + arquivos;
			
			repositorio.lerArquivo(nomes_arquivos, function(conteudo){
				
				var result = JSON.parse(conteudo.toString());
				
				repositorio.criarArquivo(dir_template, arquivos, result);
				
			});
			
			
		});
		
	});
	
	
	
}

