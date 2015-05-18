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
    assert.equal(parse('c').octave, 2);
    assert.equal(parse('c3').octave, 3);
    assert.equal(parse('c-1').octave, -1);
    assert.equal(parse('c-2').octave, -2);
  },
  "invalid pitchClass": function() {
    assert.equal(parse('i'), null);
  },
  "invalid accidentals": function() {
    assert.equal(parse('c###'), null);
    assert.equal(parse('cbbb'), null);
    assert.equal(parse('c#b'), null);
    assert.equal(parse('cb#'), null);
  },
  "invalid octave": function() {
    assert.equal(parse('c11'), null);
  }
}).export(module);
