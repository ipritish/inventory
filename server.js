var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var server = http.createServer(app);
var dbconnect = require('./services/persistence/database.js');
var argv = require('yargs').argv;

app.get('/getanimes',function(req,res){
	var data = dbconnect.getAnimeRows(process.env.PASS);
	//console.log(data);
	res.send(data);
});

app.get('/getshows',function(req,res){
	var data = dbconnect.getShowRows(process.env.PASS);
	//console.log(data);
	res.send(data);
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

app.get('/addAnime', function(req, res) {

  res.sendFile('public/index.html' , { root : __dirname});

});

app.get('/addShow', function(req, res) {

  res.sendFile('public/index.html' , { root : __dirname});

});
app.get('/editAnime', function(req, res) {

  res.sendFile('public/index.html' , { root : __dirname});

});

app.get('/editShow', function(req, res) {

  res.sendFile('public/index.html' , { root : __dirname});

});

app.listen(3000, function() {
  console.log('Express server started on port');
});
