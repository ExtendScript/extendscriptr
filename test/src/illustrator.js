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
fontStyle.textFont = app.textFonts.getByName("MyriadPro-Bold");
fontStyle.size = 2.5;

// Tests for Array methods

lib.write('### TESTING ARRAY METHODS ###');

lib.write('Testing map function');
const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
testArray.map(number => lib.write(`map = ${number} out of ${testArray.length - 1} = ${number * 4}`));

const reduceResult = testArray.reduce((acc, curr) => acc + curr, 0);
lib.write(`Testing reduce function = ${reduceResult}`);

lib.write('Testing forEach function');
testArray.forEach(value => lib.write(`forEach = ${value}`));


lib.write('Testing filter function');

const filteredArray = testArray.filter( (number) => {
	if(number % 2 === 0) {
		return true;
	}
	return false;
});

filteredArray.forEach(number => lib.write(`Filter = ${number}`));

lib.write('Testing every function');
testArray.every(number => {
	if (number < 3) {
		lib.write(`Every = ${number}`);
		return true;
	} 
	return false;
});

lib.write('Testing indexOf function');
lib.write(testArray.indexOf(4));

lib.write('Testing isArray function');
const notArray = 10;
lib.write(Array.isArray(notArray));
lib.write(Array.isArray(testArray));

lib.write('Testing lastIndexOf function');
lib.write(testArray.lastIndexOf(1));

lib.write('Testing reduceRight function');
const reduceRightResult = testArray.reduceRight((acc, curr) => acc + curr, 0);
lib.write(`Testing reduce function = ${reduceRightResult}`);


// Tests for Date methods
lib.write('### TESTING Date METHODS ###');

const today = new Date();
lib.write(today.toISOString());

// Tests for Date methods
lib.write('### TESTING Function METHODS ###');
lib.write('### TESTING Object METHODS ###');

//TODO implement testing Fuction and Object methods

lib.write('### TESTING String METHODS ###');
const newString = '          ThisIsSomeWordToTrim          ';

lib.write(`Before trimming: ${newString}`);
lib.write(`After trimming: ${newString.trim()}`);