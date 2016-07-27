var fake = function(request, response, next){
	response.send('hello world');
	next();
}

module.exports = fake;