# extendscriptr

A [NPM](https://www.npmjs.com/) CLI to compile es2015 AMD code into an executable [ExtendScript](https://www.adobe.com/devnet/scripting.html)

[![Join the chat at https://gitter.im/vogelino/extendscriptr](https://badges.gitter.im/vogelino/extendscriptr.svg)](https://gitter.im/vogelino/extendscriptr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)  

NOTE: This is a work in progress - Star this project and stay tuned, we will announce it when it will be working and available on [npmjs.org](https://www.npmjs.com/)

## Why
Building scripts for Adobe products (mostly used for After Effects, InDesign, Photoshop or Illustrator) can be pain for the finger nails if you are used to proper javascript environments. ~~With this CLI node module, you will be able to write AMD javascript code in its most recent version ([ECMAScript® 2015](http://www.ecma-international.org/ecma-262/6.0/)) and compile it into an Adobe-compatible format.~~

**Edit:** Extendscriptr won't let you use all features of es2015 as existing polyfills cannot be used in this project. In fact, polyfills like `babel-polyfill`, `es5-shim` or `shim.js` are intended for the browser and don't work well in adobe applications. Therefor, extendscriptr will relay on [`extendscript.prototypes`](https://github.com/fabiantheblind/extendscript.prototypes) which focuses on mostly used prototypes as a priority and will be tested in the different Adobe applications. This dependency will be improved over time to covers always more es5 and es6 features. Contributions are welcome!

## Goal
The wished workflow with this module can be resumed in a few steps:

- `npm install -g extendscriptr`
- `extendscriptr --script src/scripts/helloWorld.js --output dist/helloWord.js`
- open the outputed file with ExtendScript Toolkit
- run it

## Authors/Contributors
- Lucas Vogel @vogelino
- Fabian Morón Zirfas @fabiantheblind 

### Contribute
We would be happy to have contributions from other members as well. Don't hesitate to make pull requests or contact us if you wish to get contributor rights.

### Report issues
Feel free to report any issue you would encounter using the module.
https://github.com/vogelino/extendscriptr/issues

### License
WTFPL - Do whatever the fuck you want
