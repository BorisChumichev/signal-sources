'use strict';

var GenericSignal = require('./generic-signal.class.js')

class Sawtooth extends GenericSignal {
  /**
   * @constructor
   * @param  {Number} amplitude     amplitude of sawtooth
   * @param  {Number} period        time for one period [s]
   * @param  {Number} offset        offset of output signal
   * @param  {Number} startTime     start time [s]
   */
  constructor(amplitude, period, offset = 0, startTime = 0) {
    super();
    [ this.amplitude
    , this.period
    , this.offset
    , this.startTime ] = [amplitude, period, offset, startTime]
  }

  /**
   * Сalculates the value of the function at a given time point
   * @param  {Number} time      time point [s]
   * @return {Number}           value of the function
   */
  resolve(time) {
    return (time < this.startTime)
      ? this.offset
      : this.offset + this.amplitude/this.period*(time%this.period)
  }
}

module.exports = Sawtooth
