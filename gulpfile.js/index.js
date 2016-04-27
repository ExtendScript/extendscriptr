var fs = require('fs');
var gulp = require('gulp');
var extendscript = require('browserify-extendscript');
var browserify = require('browserify');
var babelify = require('babelify');
var util = require('gulp-util');
var insert = require('gulp-insert');
var filesUtil = require('./util/filesUtil');

var srcRoot = './src';
var distRoot = './dist';

gulp.task('es2015-to-es5', function() {
	var entryPath = filesUtil.getLastModifiedFileInDir(srcRoot);
	var outputFileName = 'scriptOutput.js';

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
	});

	return browserify({
			entries: [
				'babel-polyfill',
				entryPath
			],
			plugin: [ extendscript ],
			transform: [ babelify ]
		})
		.bundle()
		.on('error', util.log.bind(util, 'Browserify Error'))
		.pipe(outputFileName)
		.pipe(insert.prepend(fs.readFileSync(srcRoot + '/lib/polyfills.js')))
		.pipe(gulp.dest(distRoot));
});

gulp.task('default', ['es2015-to-es5']);
