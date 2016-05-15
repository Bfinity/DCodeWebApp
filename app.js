var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static(__dirname + '/public'));
app.use('/pdf', express.static(__dirname + '/pdf'));
app.use('/view', express.static(__dirname + '/view'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'view', '/index.html'));
});

app.get('/displayday5', function(req, res) {
  res.sendFile(path.join(__dirname, 'view', '/displayday5.html'));
});

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
