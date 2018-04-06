# Extendscriptr  

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![npm version](https://badge.fury.io/js/extendscriptr.svg)](https://badge.fury.io/js/extendscriptr) [![Join the chat at https://gitter.im/vogelino/extendscriptr](https://badges.gitter.im/vogelino/extendscriptr.svg)](https://gitter.im/vogelino/extendscriptr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![travis](https://travis-ci.org/ExtendScript/extendscriptr.svg)](https://travis-ci.org/ExtendScript/extendscriptr)  

Extendscriptr is NPM CLI module that allows you to benefit of many modern javascript features of es5 and es6 in a es3 extendscript environment.

## Why
Building scripts for Adobe products (mostly used for After Effects, InDesign, Photoshop or Illustrator) can be pain for the finger nails if you are used to proper javascript environments.

Extendscriptr relays on [`extendscript.prototypes`](https://github.com/fabiantheblind/extendscript.prototypes) and focuses on mostly used prototypes as a priority that are tested in the different Adobe applications. This dependency will be improved over time to covers always more es5 and es6 features. Contributions are welcome!

Extendscriptr doesn't use an existing full-stack polyfills like `babel-polyfill`, `es5-shim` or `shim.js` as they are intended for the browser and don't work well in adobe applications.

## Prerequisites  
This tool currently needs npm version 3.x or higher due to the flattened folder structure.

## Usage  
We recommend using it as a local dependency\*

- `npm install extendscriptr --save-dev`
- `./node_modules/.bin/extendscriptr --script src/scripts/helloWorld.js --output dist/helloWord.js`
- open the outputted file with ExtendScript Toolkit OR place your script in the relevant application script folder
- run it

\* a _global install is currently not working due to the fact that ExtendScript is missing to many functions. See [this issue](https://github.com/ExtendScript/extendscriptr/issues/22)_  

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

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/3869412?v=4" width="128px;"/><br /><sub><b>Jeroen Engels</b></sub>](https://github.com/jfmengels)<br />[📖](https://github.com/ExtendScript/extendscriptr/commits?author=jfmengels "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/1421477?v=4" width="128px;"/><br /><sub><b>Bruno Herfst</b></sub>](http://brunoherfst.com)<br />[💬](#question-GitBruno "Answering Questions") [💻](https://github.com/ExtendScript/extendscriptr/commits?author=GitBruno "Code") [🎨](#design-GitBruno "Design") [📖](https://github.com/ExtendScript/extendscriptr/commits?author=GitBruno "Documentation") [💡](#example-GitBruno "Examples") [🤔](#ideas-GitBruno "Ideas, Planning, & Feedback") [🚇](#infra-GitBruno "Infrastructure (Hosting, Build-Tools, etc)") [🔧](#tool-GitBruno "Tools") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!