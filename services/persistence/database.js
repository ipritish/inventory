var exports = module.exports = {};

exports.getAnimeRows = function(password,cb){
	var mysql      = require('mysql');
	var connectionParams = {};
	var EncyptionServices = require('../encryption/Encryption.js');
	var econfs      = new EncyptionServices();
	var ef         = "./services/persistence/enc_conf.json";

 
	econfs.decryptFile(password, ef, function(err, file, content) {
		if (err) {
			console.log('Unable to retrieve the configuration contents.');
		} else {
			var config = JSON.parse(content);
			connectionParams = config;
			var connection = mysql.createConnection(connectionParams);
			connection.connect();

			connection.query('SELECT * from animes', function(err, rows, fields) {
				if (!err){
					//console.log('The solution is: ', rows);
					cb(JSON.stringify(rows));
				}
				else {
					console.log('Error while performing Query.');
					cb(require("./resources/anime/anime.json"));
				}
			});

			connection.end();
		}
	});
};

exports.getShowRows = function(password,cb){

	var mysql      = require('mysql');
	var connectionParams = {};
	var EncyptionServices = require('../encryption/Encryption.js');
	var econfs      = new EncyptionServices();
	var ef         = "./services/persistence/enc_conf.json";

	econfs.decryptFile(password, ef, function(err, file, content) {
		if (err) {
			console.log('Unable to retrieve the configuration contents.');
		} else {
			var config = JSON.parse(content);
			connectionParams = config;
			var connection = mysql.createConnection(connectionParams);
			connection.connect();

			connection.query('SELECT * from shows', function(err, rows, fields) {
				if (!err) {
						cb(JSON.stringify(rows));
					}
				else {
					console.log('Error while performing Query.');
					cb(require("./resources/show/show.json"));
				}
			});

			connection.end();
		}
	});
};