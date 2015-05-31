'use strict';

var GenericSignal = require('./generic-signal.class.js')

class Step extends GenericSignal {
  /**
   * @constructor
   * @param  {Number} height        step height
   * @param  {Number} offset        step offset
   * @param  {Number} startTime     start time
   */
  constructor(height, offset = 0, startTime = 0) {
    super();
    [ this.height
    , this.offset
    , this.startTime ] = [height, offset, startTime]
  }

  /**
   * Сalculates the value of the function at a given time point
   * @param  {Number} time      time point
   * @return {Number}           value of the function
   */
  resolve(time) {
    return time < this.startTime 
      ? this.offset
      : this.offset + this.height
  }
}

module.exports = Step
