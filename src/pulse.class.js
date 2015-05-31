'use strict';

var GenericSignal = require('./generic-signal.class.js')

class Pulse extends GenericSignal {
  /**
   * @constructor
   * @param  {Number} amplitude     amplitude of pulse
   * @param  {Number} width         width of pulse in % of period
   * @param  {Number} period        time for one period [s]
   * @param  {Number} offset        offset of output signal
   * @param  {Number} startTime     start time [s]
   */
  constructor(amplitude, width, period, offset = 0, startTime = 0) {
    super();
    [ this.amplitude
    , this.width
    , this.period
    , this.offset
    , this.startTime ] = [amplitude, width, period, offset, startTime]
  }

  /**
   * Сalculates the value of the function at a given time point
   * @param  {Number} time      time point [s]
   * @return {Number}           value of the function
   */
  resolve(time) {
    return (time < this.startTime) || ((time-this.startTime)%this.period > this.period*this.width/100)
      ? this.offset 
      : this.offset + this.amplitude
  }
}

module.exports = Pulse
