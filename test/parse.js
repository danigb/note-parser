vows = require('vows');
assert = require('assert');

var parse = require('..');

vows.describe('Note parse').addBatch({
  "parse a parsed note return itself": function() {
    note = parse('c#3');
    rep = parse(note);
    assert.deepEqual(rep, note);
    assert(rep === note);
  },
  "parse pitchClass": function() {
    assert.equal(parse('c').pitchClass, 'c');
    assert.equal(parse('C').pitchClass, 'c');
  },
  "parse accidentals": function() {
    assert.equal(parse('c').accidentals, '');
    assert.equal(parse('c#').accidentals, '#');
    assert.equal(parse('c##').accidentals, '##');
    assert.equal(parse('cb').accidentals, 'b');
    assert.equal(parse('cbb').accidentals, 'bb');
  },
  "parse octave": function() {
    assert.equal(parse('c3').octave, 3);
    assert.equal(parse('c-1').octave, -1);
    assert.equal(parse('c-2').octave, -2);
  },
  "default octave": function() {
    assert.equal(parse('c').octave, 2);
  },
  "invalid pitchClass": function() {
    assert.throws(function () { parse('i'); }, Error);
  },
  "invalid accidentals": function() {
    assert.throws(function () { parse('c###'); }, Error);
    assert.throws(function () { parse('cbbb'); }, Error);
    assert.throws(function () { parse('c#b') }, Error);
    assert.throws(function () { parse('cb#') }, Error);
  },
  "invalid octave": function() {
    assert.throws(function () { parse('c11') }, Error);
  }
}).export(module);
