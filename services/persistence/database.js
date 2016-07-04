var exports = module.exports = {};

exports.getAnimeRows = function(password){
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
	var EncyptionServices = require('../encryption/Encryption.js');
	var econfs      = new EncyptionServices();
	var ef         = "./services/persistence/enc_conf.json";

 
	econfs.decryptFile(password, ef, function(err, file, content) {
		if (err) {
			console.log('Unable to retrieve the configuration contents.');
		} else {
			var config = JSON.parse(content);
			console.log(config);
		}
	});
	var animeData = require("./resources/anime/anime.json"); 
	return animeData;
};

exports.getShowRows = function(password){
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
	var EncyptionServices = require('../encryption/Encryption.js');
	var econfs      = new EncyptionServices();
	var ef         = "./services/persistence/enc_conf.json";

 
	econfs.decryptFile(password, ef, function(err, file, content) {
		if (err) {
			console.log('Unable to retrieve the configuration contents.');
		} else {
			var config = JSON.parse(content);
			console.log(config);
		}
	});
	
	var showData = require("./resources/show/show.json");
	return showData;
};