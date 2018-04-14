#!/usr/bin/env node

const extendscriptr = require('commander');
const packageJson = require('./package.json');
const browserify = require('browserify');
const prependify = require('prependify');
const fs = require('fs');

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

var prototypePolyfills = fs.readFileSync(require.resolve('extendscript.prototypes'), 'utf8');
var browserifyPlugins = [ [ prependify, prototypePolyfills ] ];

var adobeTarget = String(extendscriptr.target).toLowerCase();
if( adobeTarget &&
  ( adobeTarget.indexOf('indesign') >= 0 ||
    adobeTarget.indexOf('photoshop') >= 0 ||
    adobeTarget.indexOf('illustrator') >= 0 ||
    adobeTarget.indexOf('aftereffects') >= 0)) {
    browserifyPlugins.push([ prependify, '#target ' + extendscriptr.target + '\n' ]);
};

var b = browserify({
    entries: [ extendscriptr.script ],
    transform: [[require.resolve('babelify'), {
        presets: [
            'env'
        ],
        plugins: [
            require.resolve('babel-plugin-transform-es3-member-expression-literals'),
            require.resolve('babel-plugin-transform-es3-property-literals'),
            require.resolve('babel-plugin-transform-es5-property-mutators')
        ]
    }]],
    plugin: browserifyPlugins
});

b.bundle().pipe(fs.createWriteStream(extendscriptr.output));
