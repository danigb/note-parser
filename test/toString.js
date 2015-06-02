var vows = require('vows')
var assert = require('assert')

var parse = require('..')

vows.describe('Note parse toString').addBatch({
  'toString': function () {
    assert.equal(parse.toString(parse('C#3')), 'c#3')
    assert.equal(parse.toString(parse('C')), 'c4')
  }
}).export(module)
