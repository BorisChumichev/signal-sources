'use strict';

var ExpSine = require('../build/signal-sources.js').ExpSine
  , GenericSignal = require('../build/signal-sources.js').GenericSignal
  , assert = require('assert')

describe('ExpSine class', () => {
  var expSine = new ExpSine(1, 1, 2)
  it('extends GenericSignal class', () => {
    assert(GenericSignal.prototype.isPrototypeOf(expSine))
  })
  describe('ExpSine instance', () => {
    it('has amplitude, frequency, damping, phase, offset, startTime properties', () => {
      assert.equal(expSine.amplitude, 1)
      assert.equal(expSine.frequency, 1)
      assert.equal(expSine.damping, 2)
      assert.equal(expSine.phase, 0)
      assert.equal(expSine.offset, 0)
      assert.equal(expSine.startTime, 0)
    })
    describe('#resolve()', () => {
      it('should resolve function value at a given time', () => {
        assert.equal(expSine.resolve(0), 0)
        assert.equal(expSine.resolve(-1), 0)
      })
    })
  })
})
