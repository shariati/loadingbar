'use strict';
/* eslint-env mocha */
var assert = require('assert');
var progressbar = require('../');

describe('progressbar', function () {
  it('should return progressbar as 10%', function (done) {
    var expected = progressbar(0, 10);
    assert.equal('\u001b[90m▄▄▄▄▄▄▄▄▄▄\u001b[39m', expected);
    done();
  });
});
