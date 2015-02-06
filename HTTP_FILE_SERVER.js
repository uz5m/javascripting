fs = require('fs');
var http = require('http')

var server = http.createServer(function (request, response) {
	file = fs.createReadStream(process.argv[3]);
	file.pipe(response);
})
server.listen(+process.argv[2])
