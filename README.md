# Extendscriptr  

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors) [![npm version](https://badge.fury.io/js/extendscriptr.svg?style=flat-square)](https://badge.fury.io/js/extendscriptr) [![Join the chat at https://gitter.im/vogelino/extendscriptr](https://badges.gitter.im/vogelino/extendscriptr.svg?style=flat-square)](https://gitter.im/vogelino/extendscriptr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![travis](https://travis-ci.org/ExtendScript/extendscriptr.svg?style=flat-square)](https://travis-ci.org/ExtendScript/extendscriptr)  

Extendscriptr is NPM CLI module that allows you to benefit of many modern javascript features of es5 and es6 in a es3 extendscript environment.

## Why
Building scripts for Adobe products (mostly used for After Effects, InDesign, Photoshop or Illustrator) can be pain for the finger nails if you are used to proper javascript environments.

Extendscriptr relies on [`extendscript.prototypes`](https://github.com/fabiantheblind/extendscript.prototypes) and focuses on mostly used prototypes as a priority that are tested in the different Adobe applications. This dependency will be improved over time to covers always more es5 and es6 features. Contributions are welcome!

Extendscriptr doesn't use an existing full-stack polyfills like `babel-polyfill`, `es5-shim` or `shim.js` as they are intended for the browser and don't work well in adobe applications.

## Prerequisites  
This tool currently needs npm version 3.x or higher due to the flattened folder structure.

## Usage  
We recommend using it as a local dependency\*

- `npm install extendscriptr --save-dev`
- `extendscriptr --script src/scripts/helloWorld.js --output dist/helloWord.js`
- open the outputted file with ExtendScript Toolkit OR place your script in the relevant application script folder
- run it

### Watch mode

Exstendscriptr does not have any built-in _watch_ capability, but you can accomplish this using the [watch](https://www.npmjs.com/package/watch) module:

```bash
npm install watch -D
```
Run the following and Extendscriptr will automatically run every time you save a file in the `src/` directory:

```bash
./node_modules/.bin/watch "./node_modules/.bin/extendscriptr --script src/helloWorld.js --output dist/helloWord.js" src/
```

### Contribute
We would be happy to have contributions from other members as well. Don't hesitate to make pull requests or contact us if you wish to get contributor rights.


### Report issues
Feel free to report any issue you would encounter using the module.
https://github.com/vogelino/extendscriptr/issues

### License
WTFPL - Do whatever the fuck you want

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/2759340?v=4" width="50px;"/><br /><sub><b>Lucas Vogel</b></sub>](http://www.vogelino.com)<br />[💻](https://github.com/ExtendScript/extendscriptr/commits?author=vogelino "Code") [🎨](#design-vogelino "Design") | [<img src="https://avatars3.githubusercontent.com/u/315106?v=4" width="50px;"/><br /><sub><b>Fabian Morón Zirfas</b></sub>](https://fabianmoronzirfas.me)<br />[💬](#question-fabianmoronzirfas "Answering Questions") [🎨](#design-fabianmoronzirfas "Design") | [<img src="https://avatars2.githubusercontent.com/u/1421477?v=4" width="50px;"/><br /><sub><b>Bruno Herfst</b></sub>](http://brunoherfst.com)<br />[💻](https://github.com/ExtendScript/extendscriptr/commits?author=GitBruno "Code") | [<img src="https://avatars1.githubusercontent.com/u/151084?v=4" width="50px;"/><br /><sub><b>Andy Dayton</b></sub>](http://andydayton.com)<br />[💻](https://github.com/ExtendScript/extendscriptr/commits?author=andyinabox "Code") |
| :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->
Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!