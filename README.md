# A [NPM](https://www.npmjs.com/) CLI to compile es2015 AMD code into an executable [ExtendScript](http://yearbook.github.io/esdocs/#/)

[![Join the chat at https://gitter.im/vogelino/es2015-2-extendScript-build](https://badges.gitter.im/vogelino/es2015-2-extendScript-build.svg)](https://gitter.im/vogelino/es2015-2-extendScript-build?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
NOTE: This is a work in progress - Star this project and stay tuned, we will announce it when it will be working and available on [npmjs.org](https://www.npmjs.com/)

## Why
Building scripts for Adobe products (mostly used for After Effects and inDesign) can be pain for the finger nails if you are used to proper javascript environments. With this CLI node module, you will be able to write AMD javascript code in its most recent version ([ECMAScript® 2015](http://www.ecma-international.org/ecma-262/6.0/)) and compile it into an Adobe-compatible format.

## Goal
The wished workflow with this module can be resumed in a few steps:

- `npm install -g es2015-2-extendScript-build`
- `es2015-2-extendScript-build --script src/scripts/helloWorld.js --output dist/helloWord.js`
- open the outputed file with extendScript Toolbelt
- run it

## Name
The name `es2015-2-extendScript-build` is subject to modification. Stay tuned.

## Authors/Contributors
- Lucas Vogel @vogelino
- Fabian Morón Zirfas @fabiantheblind 

### Contribute
We would be happy to have contributions from other members as well. Don't hesitate to make pull requests or contact us if you wish to get contributor rights.

### Report issues
Feel free to report any issue you would encounter using the module.
https://github.com/vogelino/es2015-2-extendScript-build/issues

### License
WTFPL - Do whatever the fuck you want
