var express = require('express');
var path = require('path');
AltContainer = require('alt/AltContainer');
var bodyParser = require('body-parser');
var Bookshelf = require('./db').Bookshelf;
var app = express();


//middleware
app.use(bodyParser());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(express.static('public'));
//configuration
app.set('view engine','jsx');
app.set('views', __dirname + '/views');
app.set('bookshelf',Bookshelf);
var options = { beautify: true };
app.engine('jsx', require('express-react-views').createEngine(options));

//define routes
app.use(require('./router'));
//start server
app.listen(1337,function(){
    console.log('Server started!!');
});


