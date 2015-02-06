
function count_lines (dir_name, extension, call_back) {
	var fs = require('fs');
	var path = require('path')

	fs.readdir(dir_name, function (err, list) {
		if (err) return call_back(err);
		var new_list = list.filter(function (file_name) {
			var suffix = path.extname(file_name);
			return suffix == '.' + extension;
		});
		call_back(null, new_list);
	});
}

module.exports = count_lines;