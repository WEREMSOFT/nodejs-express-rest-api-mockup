var logger = function(request, response, next){
	var start = +new Date();
	var stream = process.stdout;
	var url = request.url;
	var method = request.method;



	response.on('finish', function(){
		var duration = +new Date() - start;
		var message = method + ' to ' + url + '\ntook ' + duration + ' ms\n';
		if(method == 'POST' || method == 'PUT'){
			message += 'POST data: \n';
			message += JSON.stringify(request.body) + '\n\n';
		}else{
			message += '\n';
		}

		stream.write(message);


	})
	next();
}

module.exports = logger;