# note-parser

[![Code Climate](https://codeclimate.com/github/danigb/note-parser/badges/gpa.svg)](https://codeclimate.com/github/danigb/note-parser)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Parse note names (in [scientific notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)) with javascript. Fast and simple: give it a string, obtain a hash
with note properties (including midi number and frequency)

## Usage

Install via npm: `npm i --save note-parser` and require it:

```js
var parser = require('note-parser')
parser.parse('c#4') // => { letter: 'C', acc: '#', ... midi: 61, freq: 277.1826309768721 }
```

The following properties are returned:


## Tests and documentation

## License

MIT License
