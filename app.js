var express = require('express');
var body_parser = require('body-parser').urlencoded({extended: true});

var fake = require('./routes/fake');
var fakePost = require('./routes/fakePost');
var bienvenu = require('./routes/bienvenu');
var accessPoint = require('./routes/accessPoint');
var venue = require('./routes/venue');
var nearby = require('./routes/nearby');
var redirect = require('./routes/redirect');
var logger = require('./routes/logger');
app = express();


app.use(body_parser, logger);
app.use(express.static('public'));
app.use('/api/get',fake);
app.use('/api/post',fakePost);
app.use('/api/bienvenu/:params', bienvenu);
app.use('/api/accessPoint/:params', accessPoint);
app.use('/api/venue/:params', venue);
app.use('/api/nearby', nearby);
app.use('/api/redirect:params', redirect);



app.listen(3000, function(){
	console.log("listening in port 3000");
});