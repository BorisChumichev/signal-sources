'use strict';

var GenericSignal = require('./generic-signal.class.js')

class Trapezoid extends GenericSignal {
  /**
   * @constructor
   * @param  {Number} amplitude     amplitude of trapezoid
   * @param  {Number} rising        rising duration of trapezoid [s]
   * @param  {Number} width         width duration of trapezoid [s]
   * @param  {Number} falling       falling duration of trapezoid [s]
   * @param  {Number} period        time for one period [s]
   * @param  {Number} offset        offset of output signal
   * @param  {Number} startTime     start time [s]
   */
  constructor(amplitude, rising, width, falling, period, offset = 0, startTime = 0) {
    super();
    [ this.amplitude
    , this.rising
    , this.width
    , this.falling
    , this.period
    , this.offset
    , this.startTime ] = [amplitude, rising, width, falling, period, offset, startTime]
  }

  /**
   * Сalculates the value of the function at a given time point
   * @param  {Number} time      time point [s]
   * @return {Number}           value of the function
   */
  resolve(time) {
    var timeInPeriod = (time-this.startTime)%this.period
    return time < this.startTime
      ? this.offset
      : timeInPeriod < this.rising
        ? this.offset + this.amplitude/this.rising*timeInPeriod
        : timeInPeriod < (this.rising + this.width)
          ? this.offset + this.amplitude
          : timeInPeriod < (this.rising + this.width + this.falling)
            ? this.offset -this.amplitude/this.falling*(timeInPeriod-(this.width+this.rising)) + this.amplitude
            : this.offset
  }
}

module.exports = Trapezoid
