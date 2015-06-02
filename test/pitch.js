var vows = require('vows')
var assert = require('assert')

var parse = require('..')

vows.describe('Note parse').addBatch({
  'parse pitchClass': function () {
    assert.equal(parse('c').pc, 'c')
    assert.equal(parse('C').pc, 'c')
  },
  'invalid pitchClass': function () {
    assert.throws(function () { parse('i') }, Error)
  }
}).export(module)
