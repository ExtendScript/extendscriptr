var fs = require('fs');
var recursive = require('recursive-readdir');

var filesUtil = Object.create(null);

filesUtil.getFilesByChronologicalOrderInDir = function(dir) {
	var allFiles = fs.readdirSync(dir);
	recursive(dir, function(err, files) {
		if (err) { return; }
		allFiles = files;
	});
	return allFiles.sort(function(a, b) {
		return
			fs.statSync(dir + a).mtime.getTime() -
			fs.statSync(dir + b).mtime.getTime();
	});
};

filesUtil.getLastModifiedFileInDir = function(dir) {
	return filesUtil.getFilesByChronologicalOrderInDir(dir)[0];
};

module.exports = Object.create(filesUtil);
