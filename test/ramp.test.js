'use strict';

var Ramp = require('../build/signal-sources.js').Ramp
  , GenericSignal = require('../build/signal-sources.js').GenericSignal
  , assert = require('assert')

describe('Ramp class', () => {
  var ramp = new Ramp(1, 2)
  it('extends GenericSignal class', () => {
    assert(GenericSignal.prototype.isPrototypeOf(ramp))
  })
  describe('Step instance', () => {
    it('has height, duation, offset, startTime properties', () => {
      assert.equal(ramp.height, 1)
      assert.equal(ramp.duration, 2)
      assert.equal(ramp.offset, 0)
      assert.equal(ramp.startTime, 0)
      
    })
    describe('#resolve()', () => {
      it('should resolve ramp value at a given time', () => {
        var offsetRamp = new Ramp(1, 2, 1)
        assert.equal(offsetRamp.resolve(0), 1)
        assert.equal(offsetRamp.resolve(3), 2)
        assert.equal(offsetRamp.resolve(1), 1.5)
      })
    })
  })
})
