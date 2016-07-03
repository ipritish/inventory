var exports = module.exports = {};

var SecureConf = require('secure-conf');
var sconf      = new SecureConf();
var ef         = "./enc_conf.json";

exports.getAnimeRows = function(){
	/*var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'root',
	  database : 'inventory'
	});*/
	
	/*connection.connect();

	connection.query('SELECT * from shows', function(err, rows, fields) {
	  if (!err)
		console.log('The solution is: ', rows);
	  else
		console.log('Error while performing Query.');
	});

	connection.end();*/
	/*sconf.decryptFile(ef, function(err, file, content) {
		if (err) 
		{
			console.log('Unable to retrieve the configuration contents.');
		} 
		else 
		{
			var config = JSON.parse(content);
			console.log(config);
		}
	});*/
	var animeData = require("./resources/anime/anime.json"); 
	return animeData;
};

exports.getShowRows = function(){
	/*var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'root',
	  database : 'inventory'
	});
	
	/*connection.connect();

	connection.query('SELECT * from shows', function(err, rows, fields) {
	  if (!err)
		console.log('The solution is: ', rows);
	  else
		console.log('Error while performing Query.');
	});

	connection.end();*/
	var showData = require("./resources/show/show.json");
	return showData;
};