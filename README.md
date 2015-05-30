# note-parser

Parse notes with javascript. Fast and simple: give it a string, obtain a hash
with note's pitchClass, accidentals, octave, midi number and frequency.

## Usage

Add the module to your project: `npm i --save note-parser` and require it:
```js
var parse = require('note-parser');
```

### parse(noteString [, defaultOctave, defaultValue ])

Use the function to parse notes:

```js
parse('Db4'); // => { pc: 'd', acc: 'b', oct: 4, midi: 61, freq: 277.18 }
parse('f##-2'); // => { pc: 'f', acc: '##', oct: -2, midi: -5, freq: 6.12 }
```

The parse method receives a string and return an object with the following
attributes:
- pc: pitchClass, the _letter_ of the note. From `"a"` to `"g"`. __Always__ in lowecase.
- acc: a string with the accidentals. An empty string if no accidentals present.
- oct: the octave as integer.

You can change the default octave with the second parameter. Otherwise is 4:

```js
parse('C'); // => { pc: 'c', acc: '', oct: 4, midi: 60, freq: 261.63 }
parse('C', 2); // => { pc: 'c', acc: '', oct: 2, midi: 36, freq: 65.41 }
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

### parse.toString

Call parse.toString to convert from the parsed object back to a string:

```js
parse.toString(parse('D#4')); // => 'd#4'
```

## License

MIT License
