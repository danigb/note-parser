'use strict';

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
var parse = function(note, options) {
  if(typeof(note.pc) !== 'undefined'
    && typeof(note.acc) !== 'undefined'
    && typeof(note.oct) !== 'undefined') {
    return note;
  }

  var match = NOTE.exec(note);
  if(match) {
    var octave = match[3] !== '' ? +match[3] : 4;
    return { pc: match[1].toLowerCase(),
      acc: match[2], oct: octave };
  }
  throw Error("Invalid note format: " + note);
}

parse.toString = function(obj) {
  return obj.pc + obj.acc + obj.oct;
}

module.exports = parse;
