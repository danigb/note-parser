# note-parser

Parse notes with javascript. Fast and simple:

## Usage

Add the module to your project: `npm i --save note-parser` and require it:
```js
var parse = require('note-parser');
```

### Parse notes

Use the function to parse notes:

```js
parse('C'); // => { pc: 'c', acc: '', oct: 2 }
parse('D#4'); // => { pc: 'd', acc: '#', oct: 4 }
parse('f##-2'); // => { pc: 'f', acc: '##', oct: -2 }
```

The parse method receives a string and return an object with the following
attributes:
- pc: pitchClass, the _letter_ of the note. From `"a"` to `"g"`. __Always__ in lowecase.
- acc: a string with the accidentals. An empty string if no accidentals present.
- oct: the octave as integer. By default is 4

Note: _calling parse on a parsed object return itself_:

```js
var n = parse('C');
n === parse(n) // => true
```

### parse.toString

Call parse.toString to convert from the parsed object back to a string:

```js
parse.toString(parse('D#4')); // => 'd#4'
```

## License

MIT License
