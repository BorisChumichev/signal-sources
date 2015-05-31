'use strict';

var Exponentials = require('../build/signal-sources.js').Exponentials
  , GenericSignal = require('../build/signal-sources.js').GenericSignal
  , assert = require('assert')

describe('Exponentials class', () => {
  var exponentials = new Exponentials(1, 1, 2, 3, 1)
  it('extends GenericSignal class', () => {
    assert(GenericSignal.prototype.isPrototypeOf(exponentials))
  })
  describe('Exponentials instance', () => {
    it('has outMax, riseTime, riseTimeConst, fallTimeConst, offset, startTime properties', () => {
      assert.equal(exponentials.outMax, 1)
      assert.equal(exponentials.riseTime, 1)
      assert.equal(exponentials.riseTimeConst, 2)
      assert.equal(exponentials.fallTimeConst, 3)
      assert.equal(exponentials.offset, 1)
      assert.equal(exponentials.startTime, 0)
    })
    describe('#resolve()', () => {
      it('should resolve function value at a given time', () => {
        assert.equal(exponentials.resolve(0), 1)
        assert(exponentials.resolve(1) > 1.39)
        assert.equal(exponentials.resolve(Infinity), 1)
      })
    })
  })
})
