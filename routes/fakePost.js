var fakePost = function(request, response, next){
	var data = request.body;
	data.id = "28934";
	response.status(201).json(data);
	next();
}

module.exports = fakePost;