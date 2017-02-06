'use strict';
/* eslint-env mocha */
var assert = require('assert');
var progressbar = require('../');

console.log(progressbar(10, 10));
describe('progressbar', function () {
  it('should return progressbar as 10%', function (done) {
    var expected = progressbar(10, 10);
    assert.equal('▄▄▄▄▄▄▄▄▄▄', expected);
    done();
  });
});
