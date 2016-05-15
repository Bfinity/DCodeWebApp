var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static(__dirname + '/public'));
app.use('/pdf', express.static(__dirname + '/pdf'));
app.use('/view', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'view', '/DCodeHome.html'));
});

app.get('/displayday5', function(req, res) {
  res.sendFile(path.join(__dirname, 'view', '/displayday5.html'));
});

app.listen(8080);
