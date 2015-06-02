'use strict'
var vows = require('vows')
var assert = require('assert')

var parse = require('../')

vows.describe('note freq').addBatch({
  'middle A is 440': function () {
    assert.equal(parse('A', 4).freq, 440)
  },
  'octaves': function () {
    assert.equal(parse('a2').freq, 110)
    assert.equal(parse('a3').freq, 220)
    assert.equal(parse('a4').freq, 440)
    assert.equal(parse('a5').freq, 880) // theorical limit
  },
  'accidentals': function () {
    assert.equal(parse('C').freq, 261.6255653005986)
    assert.equal(parse('C#').freq, parse('Db').freq)
    assert.equal(parse('C##').freq, parse('D').freq)
    assert.equal(parse('Cb4').freq, parse('B3').freq)
    assert.equal(parse('Cbb4').freq, parse('Bb3').freq)
  }

}).export(module)
