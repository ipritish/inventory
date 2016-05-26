var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var server = http.createServer(app);

app.get('/test', function(req, res) {

  res.send('result');

});

app.get('/resulttest', function(req, res) {

  res.send('resulttest');

});

app.use(express.static(__dirname + '/src'));

app.listen(3000, function() {
  console.log('Express server started on port');
});
