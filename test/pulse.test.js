'use strict';

var Pulse = require('../build/signal-sources.js').Pulse
  , GenericSignal = require('../build/signal-sources.js').GenericSignal
  , assert = require('assert')

describe('Pulse class', () => {
  var pulse = new Pulse(1, 50, 1, 0, 0.5)
  it('extends GenericSignal class', () => {
    assert(GenericSignal.prototype.isPrototypeOf(pulse))
  })
  describe('Pulse instance', () => {
    it('has amplitude, width, period, offset, startTime properties', () => {
      assert.equal(pulse.amplitude, 1)
      assert.equal(pulse.width, 50)
      assert.equal(pulse.period, 1)
      assert.equal(pulse.offset, 0)
      assert.equal(pulse.startTime, 0.5)
    })
    describe('#resolve()', () => {
      it('should resolve function value at a given time', () => {
        assert.equal(pulse.resolve(0), 0)
        assert.equal(pulse.resolve(0.5), 1)
        assert.equal(pulse.resolve(1.5), 1)
        assert.equal(pulse.resolve(2.2), 0)
      })
    })
  })
})
