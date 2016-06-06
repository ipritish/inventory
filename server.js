var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var server = http.createServer(app);
var dbconnect = require('./services/database.js');

app.get('/initshow',function(req,res){
	var data = dbconnect.getAnimeRows();
	console.log(data);
});

app.get('/initanime',function(req,res){
	var data = dbconnect.getShowRows();
	console.log(data);
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
