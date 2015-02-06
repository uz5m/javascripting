
function print (err, list) {
	if (err) {
		throw err;
	}

	list.forEach(function (name) {
		console.log(name);
	});
}

var mymodule = require('./MAKE_IT_MODULAR');

mymodule(process.argv[2], process.argv[3], print);