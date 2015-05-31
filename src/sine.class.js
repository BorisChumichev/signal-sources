'use strict';

var GenericSignal = require('./generic-signal.class.js')

class Sine extends GenericSignal {
  constructor(amplitude, frequency, phase = 0, offset = 0, startTime = 0) {
    super();
    [ this.amplitude
    , this.frequency
    , this.phase
    , this.offset
    , this.startTime ] = [amplitude, frequency, phase, offset, startTime]
  }

  resolve(time) {
    return time < this.startTime 
      ? this.offset
      : this.offset + this.amplitude*Math.sin(2*Math.PI*this.frequency*(time - this.startTime) + this.phase)
  }
}

module.exports = Sine