# note-parser

[![Code Climate](https://codeclimate.com/github/danigb/note-parser/badges/gpa.svg)](https://codeclimate.com/github/danigb/note-parser)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Parse notes with javascript. Fast and simple: give it a string, obtain a hash
with note's pitchClass, accidentals, octave, midi number and frequency.

## Usage

Add the module to your project: `npm i --save note-parser` and require it:
```js
var parse = require('note-parser');
```

#### parse(noteString [, defaultOctave, defaultValue ])

Use the function to parse notes:

```js
parse('Db4');   // => { pc: 'd', acc: 'b', oct: 4, midi: 61, freq: 277.18 }
parse('f##-2'); // => { pc: 'f', acc: '##', oct: -2, midi: -5, freq: 6.12 }
parse('Eb++');  // => { pc: 'e', acc: 'b', oct: 6, midi: 87, freq: 1244.50 }
parse('b#-');   // => { pc: 'b', acc: '#', oct: 3, midi: 60, freq: 261.62 }
parse('g');     // => { pc: 'g', acc: '', oct: 4, midi: 67, freq: 391.99 }
```

The parse method receives a string and return an object with the following
attributes:
- pc: pitchClass, the _letter_ of the note. From `"a"` to `"g"`. __Always__ in lowecase.
- acc: a string with the accidentals. An empty string if no accidentals present.
- oct: the octave as integer.
- midi: the midi number
- freq: the note frequency

You can change the default octave with the second parameter. Otherwise is 4:

```js
parse('C');      // => { pc: 'c', acc: '', oct: 4, midi: 60, freq: 261.63 }
parse('C', 2);   // => { pc: 'c', acc: '', oct: 2, midi: 36, freq: 65.41 }
parse('C+', 2);  // => { pc: 'c', acc: '', oct: 3, midi: 48, freq: 130.81 }
parse('C--', 2); // => { pc: 'c', acc: '', oct: 0, midi: 12, freq: 16.35 }
```

If defaultValue is not defined, the parse throws an exception if the note format is invalid.
Otherwise returns the defaultValue:

```js
parse('blah'); // => throws Error
parse('blah', 2, parse('C4')); // => { pc: 'c', acc: '', oct: 4 ... }
parse('blah', 2, null); // => null
```

Note: _calling parse on a parsed object return itself_:

```js
var n = parse('C');
n === parse(n) // => true
```

#### parse.toString

Call parse.toString to convert from the parsed object back to a string:

```js
parse.toString(parse('D#4')); // => 'd#4'
```

## License

MIT License
