var vows = require('vows')
var assert = require('assert')

var parse = require('..')

vows.describe('Note name').addBatch({
  'note name': function () {
    assert.equal(parse('C#3').name, 'c#3')
    assert.equal(parse('C').name, 'c4')
    assert.equal(parse('db--').name, 'db2')
  }
}).export(module)
