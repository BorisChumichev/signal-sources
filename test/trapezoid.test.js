'use strict';

var Trapezoid = require('../build/signal-sources.js').Trapezoid
  , GenericSignal = require('../build/signal-sources.js').GenericSignal
  , assert = require('assert')

describe('Trapezoid class', () => {
  var trapezoid = new Trapezoid(1, 1, 1, 1, 4, 0, 1)
  it('extends GenericSignal class', () => {
    assert(GenericSignal.prototype.isPrototypeOf(trapezoid))
  })
  describe('Trapezoid instance', () => {
    it('has amplitude, rising, width, falling, period, offset, startTime properties', () => {
      assert.equal(trapezoid.amplitude, 1)
      assert.equal(trapezoid.rising, 1)
      assert.equal(trapezoid.width, 1)
      assert.equal(trapezoid.falling, 1)
      assert.equal(trapezoid.period, 4)
      assert.equal(trapezoid.offset, 0)
      assert.equal(trapezoid.startTime, 1)
    })
    describe('#resolve()', () => {
      it('should resolve function value at a given time', () => {
        assert.equal(trapezoid.resolve(5), 0)
        assert.equal(trapezoid.resolve(5.5), 0.5)
        assert(trapezoid.resolve(5.5) < trapezoid.resolve(5.6))
        assert.equal(trapezoid.resolve(6.5), 1)
        assert.equal(trapezoid.resolve(7.5), 0.5)
        assert(trapezoid.resolve(7.5) > trapezoid.resolve(7.6))
        assert.equal(trapezoid.resolve(8.2), 0)
      })
    })
  })
})
