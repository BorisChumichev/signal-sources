'use strict';

var GenericSignal = require('./generic-signal.class.js')

class Sine extends GenericSignal {
  /**
   * @constructor
   * @param  {Number} amplitude     sine amplitude
   * @param  {Number} frequency     sine frequency [Hz]
   * @param  {Number} phase         sine phase [rad]
   * @param  {Number} offset        sine ordinate offset
   * @param  {Number} startTime     start time
   */
  constructor(amplitude, frequency, phase = 0, offset = 0, startTime = 0) {
    super();
    [ this.amplitude
    , this.frequency
    , this.phase
    , this.offset
    , this.startTime ] = [amplitude, frequency, phase, offset, startTime]
  }

  /**
   * Сalculates the value of the function at a given time point
   * @param  {Number} time      time point
   * @return {Number}           value of the function
   */
  resolve(time) {
    return time < this.startTime 
      ? this.offset
      : this.offset + this.amplitude*Math.sin(2*Math.PI*this.frequency*(time - this.startTime) + this.phase)
  }
}

module.exports = Sine