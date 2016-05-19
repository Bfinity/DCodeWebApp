var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static(__dirname + '/public'));
app.use('/pdf', express.static(__dirname + '/pdf'));
app.use('/view', express.static(__dirname + '/view'));
app.use('/Student_Presentations', express.static(__dirname + '/Student_Presentations'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'view', '/index.html'));
});

app.get('/displayStudentGallery', function(req, res) {
  res.sendFile(path.join(__dirname, 'view', '/studentGallery.html'));
});

app.get('/aliaCummings', function(req, res) {
  res.sendFile(path.join(__dirname, 'Student_Presentations', '/Alia/aliaCummingsJavascript.html'));
});

app.get('/Christian_Jaylen', function(req, res) {
  res.sendFile(path.join(__dirname, 'Student_Presentations', '/Christian_Jaylen/javascriptpopuptutorial.html'));
});

app.get('/Hijiri', function(req, res) {
  res.sendFile(path.join(__dirname, 'Student_Presentations', '/Hijiri/coding/Collapsing.html'));
});

app.get('/Micah_Jakobi', function(req, res) {
  res.sendFile(path.join(__dirname, 'Student_Presentations', '/Micah_Jakobi/Project.html'));
});

app.get('/Ricardo', function(req, res) {
  res.sendFile(path.join(__dirname, 'Student_Presentations', '/Ricardo/changingImage.html'));
});

app.get('/Tanai_Omari', function(req, res) {
  res.sendFile(path.join(__dirname, 'Student_Presentations', '/Tanai_Omari/Arrays/Project.html'));
});

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
