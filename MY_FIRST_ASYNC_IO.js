var fs = require('fs');

fs.readFile(process.argv[2], function (err, buffer) {
	if (err) throw err;
	var strings = buffer.toString().split('\n');

	console.log(strings.length - 1);
});