var exports = module.exports = {};

exports.getAnimeRows = function(){
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'String@1',
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
	var row = {"test":"test"};
	return row;
};

exports.getShowRows = function(){
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'String@1',
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
	var row = {"test":"test"};
	return row;
};