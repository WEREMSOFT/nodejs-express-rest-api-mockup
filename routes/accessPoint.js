var returnValue = '{"access_points":[],"status":"success"}';

var accessPoints = function(request, response, next){
	response.send(returnValue);
	next();
}

module.exports = accessPoints;