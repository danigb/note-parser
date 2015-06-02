'use strict'

var NOTE = /^([a-gA-G])(#{0,2}|b{0,2})(-?\d{0,1})$/
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
  var parsed, match
  if (typeof note === 'string' && (match = NOTE.exec(note))) {
    var octave = match[3] !== '' ? +match[3] : (defaultOctave || 4)
    parsed = { pc: match[1].toLowerCase(),
    acc: match[2], oct: octave }
  } else if (typeof note.pc !== 'undefined'
    && typeof note.acc !== 'undefined'
    && typeof note.oct !== 'undefined') {
    parsed = note
  }

  if (parsed) {
    parsed.midi = parsed.midi || toMidi(parsed)
    parsed.freq = parsed.freq || midiToFrequency(parsed.midi)
    return parsed
  } else if (typeof (defaultValue) !== 'undefined') {
    return defaultValue
  } else {
    throw Error('Invalid note format: ' + note)
  }
}

parse.toString = function (obj) {
  return obj.pc + obj.acc + obj.oct
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
