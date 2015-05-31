'use strict';

var GenericSignal = require('./generic-signal.class.js')

class Ramp extends GenericSignal {
  /**
   * @constructor
   * @param  {Number} height        ramp height
   * @param  {Number} duration      ramp duration
   * @param  {Number} offset        ramp offset
   * @param  {Number} startTime     start time
   */
  constructor(height, duration, offset = 0, startTime = 0) {
    super();
    [ this.height
    , this.duration
    , this.offset
    , this.startTime ] = [height, duration, offset, startTime]
  }

  /**
   * Сalculates the value of the function at a given time point
   * @param  {Number} time      time point
   * @return {Number}           value of the function
   */
  resolve(time) {
    return time < this.startTime 
      ? this.offset
      : time < (this.startTime + this.duration)
        ? this.offset + (time - this.startTime)*this.height/this.duration
        : this.offset + this.height
  }
}

module.exports = Ramp
