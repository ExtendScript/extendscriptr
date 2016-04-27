var fs = require('fs');
var gulp = require('gulp');
var extendscript = require('browserify-extendscript');
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

	return browserify({
			entries: [
				'babel-polyfill',
				entryPath
			],
			plugin: [ extendscript ],
			transform: [
				babelify.configure({
					presets: [
						'es2015',
						'stage-0'
					],
					plugins: [
						'transform-es3-member-expression-literals',
						'transform-es3-property-literals',
						'transform-es5-property-mutators'
					]
				})
			]
		})
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
