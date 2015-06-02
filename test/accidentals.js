var vows = require('vows')
var assert = require('assert')

var parse = require('..')

vows.describe('Parse accidentals').addBatch({
  'parse accidentals': function () {
    assert.equal(parse('c').acc, '')
    assert.equal(parse('c#').acc, '#')
    assert.equal(parse('c##').acc, '##')
    assert.equal(parse('cb').acc, 'b')
    assert.equal(parse('cbb').acc, 'bb')
  },
  'invalid accidentals': function () {
    assert.throws(function () { parse('c###') }, Error)
    assert.throws(function () { parse('cbbb') }, Error)
    assert.throws(function () { parse('c#b') }, Error)
    assert.throws(function () { parse('cb#') }, Error)
  }
}).export(module)
