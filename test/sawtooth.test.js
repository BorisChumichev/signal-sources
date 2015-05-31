'use strict';

var Sawtooth = require('../build/signal-sources.js').Sawtooth
  , GenericSignal = require('../build/signal-sources.js').GenericSignal
  , assert = require('assert')

describe('Sawtooth class', () => {
  var sawtooth = new Sawtooth(1, 1, 0, 1)
  it('extends GenericSignal class', () => {
    assert(GenericSignal.prototype.isPrototypeOf(sawtooth))
  })
  describe('Sawtooth instance', () => {
    it('has amplitude, period, offset, startTime properties', () => {
      assert.equal(sawtooth.amplitude, 1)
      assert.equal(sawtooth.period, 1)
      assert.equal(sawtooth.offset, 0)
      assert.equal(sawtooth.startTime, 1)
    })
    describe('#resolve()', () => {
      it('should resolve function value at a given time', () => {
        assert.equal(sawtooth.resolve(0.5), 0)
        assert(sawtooth.resolve(1.99) > 0.9)
        assert(sawtooth.resolve(2) < 0.1)
      })
    })
  })
})
