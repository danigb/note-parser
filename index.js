'use strict';

var NOTE = /^([a-gA-G])(\d{0,1)$/
module.exports = function(note) {
  var match = NOTE.exec(note);
  if(match) {
    return { pitchClass: match[1].toUpperCase(), acc: match[2], octave: octave };
  } else {
    return null;
  }
}
