vows = require('vows');
assert = require('assert');

var parse = require('../');

vows.describe('note midi').addBatch({
  "middle C is 60": function() {
    // Wikipedia: Middle C is designated C4 in scientific pitch notation
    assert.equal(parse("c", 4).midi, 60);
  },
  "octaves": function() {
    assert.equal(parse("c-2").midi, -12);
    assert.equal(parse("c-1").midi, 0);
    assert.equal(parse("c0").midi, 12);
    assert.equal(parse("c1").midi, 24);
    assert.equal(parse("a4").midi, 69);
    assert.equal(parse("g9").midi, 127); // theorical limit
  },
  "accidentals": function() {
    assert.equal(parse("C").midi, 60);
    assert.equal(parse("C#").midi, 61);
    assert.equal(parse("C##").midi, 62);
    assert.equal(parse("Cb").midi, 59);
    assert.equal(parse("Cbb").midi, 58);
  }

}).export(module);
