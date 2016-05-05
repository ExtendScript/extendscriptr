#!/usr/bin/env node
var extendscriptr = require('commander');
var packageJson = require('./package.json');
var browserify = require('browserify');
var prependify = require('prependify');
var fs = require('fs');

extendscriptr
	.version(packageJson.version)
	.usage('[options]')
	.option('-s, --script <path>', 'The input file to compile into an executable extendscript')
	.option('-o, --output <path>', 'The path to the wished compiled output file')
	.option('-t, --target [targetApp]', 'The Adobe Application the script is intended for. i.e. InDesign [targetApp]')
	.parse(process.argv);

console.log('Running extendscriptr with following options:');
extendscriptr.options.forEach(function(opt) {
	if (opt.long === '--version') return;
	var optionName = opt.long.replace('--', '');
	console.log(
		opt.long + ': ' +
		extendscriptr[optionName] +
		(opt.optional === 0 ? '' : ' (optional)')
	);
});

var prototypePolyfills = fs.readFileSync('./node_modules/extendscript.prototypes/lib/extendscript.prototypes.js');
var browserifyPlugins = [ [ prependify, prototypePolyfills ] ];

var adobeTarget = String(extendscriptr.target).toLowerCase();
if ( adobeTarget &&
	(adobeTarget.indexOf('indesign') >= 0 ||
	adobeTarget.indexOf('photoshop') >= 0 ||
	adobeTarget.indexOf('illustrator') >= 0 ||
	adobeTarget.indexOf('aftereffects') >= 0)) {
	browserifyPlugins.push([ prependify, '#target ' + extendscriptr.target + '\n' ]);
}

var b = browserify({
	entries: [ extendscriptr.script ],
	transform: 'babelify',
	plugin: browserifyPlugins
});

b.bundle().pipe(fs.createWriteStream(extendscriptr.output));
