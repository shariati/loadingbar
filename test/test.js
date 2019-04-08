'use strict'
/* eslint-env mocha */
const assert = require('assert')
const progressbar = require('../')

describe('progressbar', () => {
  it('should return progressbar as 10%', done => {
    const EXPECTED = progressbar(0, 10)
    assert.strict.equal('\u001b[90m▄▄▄▄▄▄▄▄▄▄\u001b[39m', EXPECTED)
    done()
  })
})
