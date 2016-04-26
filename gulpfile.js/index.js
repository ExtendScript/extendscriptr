var fs = require('fs');
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var clean = require('gulp-clean');
var argv = require('yargs').argv;
var util = require('gulp-util');
var source = require('vinyl-source-stream');
var insert = require('gulp-insert');
var filesUtil = require('./util/filesUtil');

var srcRoot = './src';
var distRoot = './dist';
var paths = {
	src: {
		root: srcRoot
	},
	dist: {
		root: distRoot
	}
};

gulp.task('clean', function() {
	return gulp.src(paths.dist.root, {
			read: false
		})
		.pipe(clean());
});

gulp.task('es2015-to-es5', ['clean'], function() {
	var entryPath = argv.script || argv.s || srcRoot + '/' +
			filesUtil.getLastModifiedFileInDir(srcRoot);
	var outputFileName = argv.output || argv.o || 'scriptOutput.js';

	if (!entryPath) {
		util.beep();
		util.log(util.colors.red(
			'You must provide the path to the script ' +
			'you want to compile. Use therefor -script or -s'));
		return;
	}

	if (!outputFileName) {
		util.beep();
		util.log(util.colors.red(
			'You must provide an output filename. ' +
			'Use therefor -output or -o'));
		return;
	}

	return browserify(entryPath)
		.transform(babelify, {})
		.bundle()
		.on('error', util.log.bind(util, 'Browserify Error'))
		.pipe(source(outputFileName))
		.pipe(insert.prepend(fs.readFileSync(srcRoot + '/lib/polyfills.js')))
		.pipe(insert.prepend(
			'#includepath "~/Documents/;%USERPROFILE%Documents";\n' +
			'#include "basiljs/bundle/basil.js";\n\n'
		))
		.pipe(gulp.dest(distRoot));
});

gulp.task('default', ['es2015-to-es5']);
