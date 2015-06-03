'use strict'

var NOTE = /^([a-gA-G])(#{0,2}|b{0,2})(-?[0-9]{1}|[+]{0,2}|[-]{0,2})$/
/*
 * parseNote
 *
 * @param {String} note - the note string to be parsed
 * @return {Object} a object with the following attributes:
 * - pc: pitchClass, the letter of the note, ALWAYS in lower case
 * - acc: the accidentals (or '' if no accidentals)
 * - oct: the octave as integer. By default is 4
 */
var parse = function (note, defaultOctave, defaultValue) {
  var parsed, match, octave

  // in scientific notation middleC is 4
  defaultOctave = defaultOctave || 4
  // test string against regex
  if (typeof note === 'string' && (match = NOTE.exec(note))) {
    // match[3] is the octave part
    if (match[3].length > 0 && !isNaN(match[3])) {
      octave = +match[3]
    } else if (match[3][0] === '+') {
      octave = defaultOctave + match[3].length
    } else if (match[3][0] === '-') {
      octave = defaultOctave - match[3].length
    } else {
      octave = defaultOctave
    }
    parsed = { pc: match[1].toLowerCase(),
      acc: match[2], oct: octave }
  } else if (typeof note.pc !== 'undefined'
    && typeof note.acc !== 'undefined'
    && typeof note.oct !== 'undefined') {
    parsed = note
  }

  if (parsed) {
    parsed.name = parsed.name || '' + parsed.pc + parsed.acc + parsed.oct
    parsed.midi = parsed.midi || toMidi(parsed)
    parsed.freq = parsed.freq || midiToFrequency(parsed.midi)
    return parsed
  } else if (typeof (defaultValue) !== 'undefined') {
    return defaultValue
  } else {
    throw Error('Invalid note format: ' + note)
  }
}

var SEMITONES = {c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 }
function toMidi (note) {
  var alter = note.acc.length
  if (note.acc[0] === 'b') alter = -1 * alter
  return SEMITONES[note.pc] + alter + 12 * (note.oct + 1)
}
function midiToFrequency (note) {
  return Math.pow(2, (note - 69) / 12) * 440
}

module.exports = parse
