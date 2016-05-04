import * as lib from './libs/lib';

lib.write(`Hello World ${lib.calc()} ${lib.something}`);

const width = 100;
const height = 100;
const doc = app.documents.add(null,width,height);

const m = 30;
const path1 = doc.pathItems.add();
path1.setEntirePath ([
	[m, m],
	[m, height - m],
	[width - m, height - m],
	[width - m, m]
]);

const text1 = doc.textFrames.areaText( path1 );
text1.contents = '"She knew that technology was \
a means to an end — and that the end was people. \
She saw it as something you needed to get to the \
real work: improving people’s lives, making them \
feel more connected, bringing delight in big and \
small ways, and empowering them to affect change."';

const fontStyle = text1.textRange.characterAttributes;
fontStyle.textFont = app.textFonts.getByName("Courier");
fontStyle.size = 2.5;
