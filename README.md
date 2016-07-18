# extendscriptr

[![npm version](https://badge.fury.io/js/extendscriptr.svg)](https://badge.fury.io/js/extendscriptr) [![Join the chat at https://gitter.im/vogelino/extendscriptr](https://badges.gitter.im/vogelino/extendscriptr.svg)](https://gitter.im/vogelino/extendscriptr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![travis](https://travis-ci.org/ExtendScript/extendscriptr.svg)](https://travis-ci.org/ExtendScript/extendscriptr)  

Extendscriptr is NPM CLI module that allows you to benefit of many modern javascript features of es5 and es6 in a es3 extendscript environment.

## Why
Building scripts for Adobe products (mostly used for After Effects, InDesign, Photoshop or Illustrator) can be pain for the finger nails if you are used to proper javascript environments. 

Extendscriptr relays on [`extendscript.prototypes`](https://github.com/fabiantheblind/extendscript.prototypes) and focuses on mostly used prototypes as a priority that are tested in the different Adobe applications. This dependency will be improved over time to covers always more es5 and es6 features. Contributions are welcome!

Extendscriptr doesn't use an existing full-stack polyfills like `babel-polyfill`, `es5-shim` or `shim.js` as they are intended for the browser and don't work well in adobe applications.

## Prerequisites  

This tool currently needs Node.js version 5.x or higher  

## Usage
We recommend using it as a local dependency 

- `npm install extendscriptr --save-dev`
- `./node_modules/.bin/extendscriptr --script src/scripts/helloWorld.js --output dist/helloWord.js`
- open the outputed file with ExtendScript Toolkit OR place your script in the relevant application script folder
- run it

## Authors/Contributors
- Lucas Vogel [@vogelino](https://github.com/vogelino)  
- Fabian Morón Zirfas [@fabiantheblind](https://github.com/fabiantheblind)  

### Contribute
We would be happy to have contributions from other members as well. Don't hesitate to make pull requests or contact us if you wish to get contributor rights.

### Report issues
Feel free to report any issue you would encounter using the module.
https://github.com/vogelino/extendscriptr/issues

### License
WTFPL - Do whatever the fuck you want
