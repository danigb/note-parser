# note-parse

Parse notes with javascript:

```js
var parse = require('note-parse');

parse('C'); // => { pitchClass: 'c', accidentals: '', octave: 2 }
parse('D#4'); // => { pitchClass: 'd', accidentals: '#', octave: 4 }
parse('f##-2'); // => { pitchClass: 'f', accidentals: '##', octave: -2 }
```

The parse method receives a string and return an object with the following
attributes:
- pitchClass: the _letter_ of the note. From `"a"` to `"g"`. __Always__ in lowecase.
- accidentals: a string with the accidentals. An empty string if no accidentals are specified.
- octave: the octave as integer. If not specified, it's 2.

That's all.

## License

MIT License
