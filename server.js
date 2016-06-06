var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var server = http.createServer(app);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'String@1',
  database : 'inventory'
});

app.get('/initshow',function(req,res){
	
	connection.connect();

	connection.query('SELECT * from shows', function(err, rows, fields) {
	  if (!err)
		console.log('The solution is: ', rows);
	  else
		console.log('Error while performing Query.');
	});

	connection.end();
	
});

app.get('/initanime',function(req,res){
	
	connection.connect();

	connection.query('SELECT * from anime', function(err, rows, fields) {
	  if (!err)
		console.log('The solution is: ', rows);
	  else
		console.log('Error while performing Query.');
	});

	connection.end();
	
});



app.get('/test', function(req, res) {

  res.send('result');

});

app.get('/resulttest', function(req, res) {

  res.send('resulttest');

});

app.use(express.static(__dirname + '/public'));

app.get('/home', function(req, res) {

  res.sendFile('public/index.html' , { root : __dirname});

});

app.get('/shows', function(req, res) {

  res.sendFile('public/index.html' , { root : __dirname});

});

app.get('/anime', function(req, res) {

  res.sendFile('public/index.html' , { root : __dirname});

});

app.listen(3000, function() {
  console.log('Express server started on port');
});
