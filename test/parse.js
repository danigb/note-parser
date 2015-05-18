vows = require('vows');
assert = require('assert');

var parse = require('..');

vows.describe('Note parse').addBatch({
  "parse notes": function() {
    assert.equal(parse('c2'), 's');
  }

}).export(module);
