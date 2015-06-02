var vows = require('vows')
var assert = require('assert')

var parse = require('..')

vows.describe('Note parse').addBatch({
  'parse a parsed note return itself': function () {
    var note = parse('c#3')
    var rep = parse(note)
    assert.deepEqual(rep, note)
    assert(rep === note)
  },
  'default value': function () {
    assert.throws(function () { parse('blah'); }, Error)
    assert.equal(parse('blah', 2, 'blah'), 'blah')
    assert.equal(parse('blah', 2, null), null)
  }
}).export(module)
