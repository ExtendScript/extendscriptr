var fs = require('fs');
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var util = require('gulp-util');
var filesUtil = require('./util/filesUtil');
var babelify = require('babelify');
babelify.configure({
	presets: [
		'es2015',
		'stage-0'
	],
	plugins: [
		require('babel-plugin-transform-es3-member-expression-literals'),
		require('babel-plugin-transform-es3-property-literals'),
		require('babel-plugin-transform-es5-property-mutators')
	]
});

var srcRoot = './src';
var distRoot = './dist';

gulp.task('es2015-to-es5', function() {
	var entryPath = srcRoot + '/example/index.js';
	var outputFileName = 'scriptOutput.js';

	var b = browserify({
		entries: [
			srcRoot + '/lib/polyfills.js',
			'babel-polyfill',
			entryPath
		],
		transform: [ babelify ]
	});

	return b.bundle()
		.pipe(source(outputFileName))
		.pipe(gulp.dest(distRoot));
});

gulp.task('default', ['es2015-to-es5']);
