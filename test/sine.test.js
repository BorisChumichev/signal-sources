'use strict';

var Sine = require('../build/signal-sources.js').Sine
  , GenericSignal = require('../build/signal-sources.js').GenericSignal
  , assert = require('assert')

describe('Sine class instance', () => {
  var sine = new Sine(1, 1)
  it('extends GenericSignal class', () => {
    assert(GenericSignal.prototype.isPrototypeOf(sine))
  })
  it('has amplitude, frequency, phase, offset, startTime properties', () => {
    assert.equal(sine.amplitude, 1)
    assert.equal(sine.frequency, 1)
    assert.equal(sine.phase, 0)
    assert.equal(sine.offset, 0)
    assert.equal(sine.startTime, 0)
  })
  describe('#resolve()', () => {
    it('should resolve sine value at a given time', () => {
      assert.equal(sine.resolve(0), 0)
      assert.equal(sine.resolve(0.25), 1)
    })
  })
})
