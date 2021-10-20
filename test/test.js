'use strict'
/* eslint-env mocha */
const assert = require('assert')
const progressbar = require('../')

describe('progressbar', () => {
  it('should return progressbar as 10%', done => {
    const EXPECTED = progressbar(10)
    assert.strict.equal('▄▄▄▄▄▄▄▄▄▄', EXPECTED)
    done()
  })
})
