'use strict';

var Sine = require('../build/signal-sources.js').Sine
  , assert = require('assert')

describe('GenericSignal abstract class', () => {
  var sine = new Sine(1, 1)
  describe('#generate()', () => {
    it('should resolve function for a given time values', () => {
      assert.deepEqual(sine.generate([0, 0.25, 0.75]), [0, 1, -1])
    })
  })
})
