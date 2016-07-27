var url = require('url');

var redirect = function(request, response, next){
	var url_parts = url.parse(request.url, true);
	var query = request.originalUrl.split('?')[1];

	response.redirect(301, 'http://localhost:3000/api/bienvenu/' + query);
	next();
}

module.exports = redirect;