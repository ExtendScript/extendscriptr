/* globals app, $, SaveOptions */
import * as lib from './libs/lib';

lib.write(`Hello World ${lib.calc()} ${lib.something}`);
let doc = app.documents.add();
doc.pages[0].textFrames.add({geometricBounds: [0,0,100,100],contents:'Hello ID'});
$.sleep(1000);
doc.close(SaveOptions.NO);
