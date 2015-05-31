'use strict';

var Step = require('../build/signal-sources.js').Step
  , GenericSignal = require('../build/signal-sources.js').GenericSignal
  , assert = require('assert')

describe('Step class', () => {
  var step = new Step(1, 1, 2)
  it('extends GenericSignal class', () => {
    assert(GenericSignal.prototype.isPrototypeOf(step))
  })
  describe('Step instance', () => {
    it('has height, offset, startTime properties', () => {
      assert.equal(step.height, 1)
      assert.equal(step.offset, 1)
      assert.equal(step.startTime, 2)
      
    })
    describe('#resolve()', () => {
      it('should resolve step function value at a given time', () => {
        assert.equal(step.resolve(0), 1)
        assert.equal(step.resolve(2), 2)
      })
    })
  })
})
