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
    assert.equal(parse('c').pc, 'c');
    assert.equal(parse('C').pc, 'c');
  },
  "parse accidentals": function() {
    assert.equal(parse('c').acc, '');
    assert.equal(parse('c#').acc, '#');
    assert.equal(parse('c##').acc, '##');
    assert.equal(parse('cb').acc, 'b');
    assert.equal(parse('cbb').acc, 'bb');
  },
  "parse octave": function() {
    assert.equal(parse('c3').oct, 3);
    assert.equal(parse('c-1').oct, -1);
    assert.equal(parse('c-2').oct, -2);
  },
  "default octave": function() {
    assert.equal(parse('c').oct, 4);
    assert.equal(parse('c', 2).oct, 2);
  },
  "default value": function() {
    assert.throws(function () { parse('blah'); }, Error);
    assert.equal(parse('blah', 2, 'blah'), 'blah');
    assert.equal(parse('blah', 2, null), null);
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
