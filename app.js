var express = require('express');


var PORT = 3000;
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(PORT, function(){
  console.log('Listening to Port:' + PORT)
});
