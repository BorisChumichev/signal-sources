'use strict';

var GenericSignal = require('./generic-signal.class.js')

class ExpSine extends GenericSignal {
  /**
   * @constructor
   * @param  {Number} amplitude     amplitude of sine wave
   * @param  {Number} frequency     frequency of sine wave [Hz]
   * @param  {Number} damping       damping coefficient of sine wave [s-1]
   * @param  {Number} phase         phase of sine wave [rad]
   * @param  {Number} offset        ordinate offset
   * @param  {Number} startTime     start time [s]
   */
  constructor(amplitude, frequency, damping, phase = 0, offset = 0, startTime = 0) {
    super();
    [ this.amplitude
    , this.frequency
    , this.damping
    , this.phase
    , this.offset
    , this.startTime ] = [amplitude, frequency, damping, phase, offset, startTime]
  }

  /**
   * Сalculates the value of the function at a given time point
   * @param  {Number} time      time point
   * @return {Number}           value of the function
   */
  resolve(time) {
    return time < this.startTime 
      ? this.offset
      : this.offset + this.amplitude*Math.exp(-(time-this.startTime)*this.damping)
        *Math.sin(2*Math.PI*this.frequency*(time-this.startTime)+this.phase)
  }
}

module.exports = ExpSine
