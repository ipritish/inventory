var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var server = http.createServer(app);

app.get('/test', function(req, res) {

  // Toggle between serving public/index.html
  // and sending a text 'Ola Mundo!' to see
  // nodemon restarting the server upon edit

  res.send('result');
  //res.send('Ola Mundo!');

});

app.get('/resulttest', function(req, res) {

  // Toggle between serving public/index.html
  // and sending a text 'Ola Mundo!' to see
  // nodemon restarting the server upon edit

  res.send('resulttest');
  //res.send('Ola Mundo!');

});

app.use(express.static(__dirname + '/src'));

server.listen(3000, 'localhost');
server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
