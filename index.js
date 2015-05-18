'use strict';

var NOTE = /^([a-gA-G])(#{0,2}|b{0,2})(-?\d{0,1})$/
/*
 * parseNote
 *
 * @param {String} note - the note string to be parsed
 * @return {Object} a object with the following attributes:
 * - pitchClass: the letter of the note, ALWAYS in lower case
 * - accidentals: the accidentals (or '' if no accidentals)
 * - octave: the octave as integer. If not present in the string, its 2
 */
module.exports = function(note) {
  var match = NOTE.exec(note);
  if(match) {
    var octave = match[3] !== '' ? +match[3] : 2;
    return { pitchClass: match[1].toLowerCase(), accidentals: match[2], octave: octave };
  } else {
    return null;
  }
}
