http = require('http');
bl = require('bl');

http.get (process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
		if (err) {
			throw err;
		}
		console.log(data.toString().length);
		console.log(data.toString());
	}))
});