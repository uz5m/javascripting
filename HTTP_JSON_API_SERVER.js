var http = require('http')
var url = require('url')

var server = http.createServer(function (request, response) {
	if (request.method != 'GET')
		return response.end('send me a GET\n');
	var url_prop = url.parse(request.url, true);	
	var parsed = new Date(url_prop.query.iso);
	if (url_prop.pathname == '/api/parsetime') {
		var output = {
			"hour": parsed.getHours(),
			"minute": parsed.getMinutes(),
			"second": parsed.getSeconds()
		};
	}
	else if (url_prop.pathname == '/api/unixtime') {
		var output = {"unixtime": parsed.getTime()};
	}
	
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(output));
})
server.listen(+process.argv[2])