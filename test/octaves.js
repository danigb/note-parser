var vows = require('vows')
var assert = require('assert')

var parse = require('..')

vows.describe('Note parse').addBatch({
  'parse octave': function () {
    assert.equal(parse('c3').oct, 3)
    assert.equal(parse('c-1').oct, -1)
    assert.equal(parse('c-2').oct, -2)
  },
  'parse octave with + and -': function () {
    assert.equal(parse('c+').oct, 5)
    assert.equal(parse('c++').oct, 6)
    assert.equal(parse('c-').oct, 3)
    assert.equal(parse('c--').oct, 2)
  },
  'octave with + and - and defaultOctave': function() {
    assert.equal(parse('c+', 2).oct, 3)
    assert.equal(parse('c-', 2).oct, 1)
  },
  'default octave': function () {
    assert.equal(parse('c').oct, 4)
    assert.equal(parse('c', 2).oct, 2)
  },
  'invalid octave': function () {
    assert.throws(function () { parse('c11') }, Error)
    assert.throws(function () { parse('c+3') }, Error)
    assert.throws(function () { parse('c--1') }, Error)
  }
}).export(module)
