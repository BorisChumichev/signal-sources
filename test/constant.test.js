'use strict';

var Constant = require('../build/signal-sources.js').Constant
  , GenericSignal = require('../build/signal-sources.js').GenericSignal
  , assert = require('assert')

describe('Constant class', () => {
  var constant = new Constant(1)
  it('extends GenericSignal class', () => {
    assert(GenericSignal.prototype.isPrototypeOf(constant))
  })
  describe('Constant instance', () => {
    it('has constant property', () => {
      assert.equal(constant.constant, 1)
    })
    describe('#resolve()', () => {
      it('should resolve constant value at a given time', () => {
        assert.equal(constant.resolve(0), 1)
        assert.equal(constant.resolve(-1), 1)
      })
    })
  })
})
