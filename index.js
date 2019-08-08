var path = require('path');

module.exports = function(folder){
	
	var diretorio = /*path.resolve(__dirname, '../');*/ './';
	//var folder = '/teste/';
	
	var dir = path.join(diretorio, folder + '/');
	//console.log(path.join(diretorio, folder));
	
	var app = require('./app/app')(dir);
	


}