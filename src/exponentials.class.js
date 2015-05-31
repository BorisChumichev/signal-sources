'use strict';

var GenericSignal = require('./generic-signal.class.js')

class Exponentials extends GenericSignal {
  /**
   * @constructor
   * @param  {[type]} outMax        height of output for infinite riseTime
   * @param  {[type]} riseTime      rise time [s]
   * @param  {[type]} riseTimeConst rise time constant [s]
   * @param  {[type]} fallTimeConst fall time constant [s]
   * @param  {Number} offset        offset of output signal
   * @param  {Number} startTime     start time [s]
   */
  constructor(outMax, riseTime, riseTimeConst, fallTimeConst, offset = 0, startTime = 0) {
    super();
    [ this.outMax
    , this.riseTime
    , this.riseTimeConst
    , this.fallTimeConst
    , this.offset
    , this.startTime ] = [outMax, riseTime, riseTimeConst, fallTimeConst, offset, startTime]
  }

  /**
   * Сalculates the value of the function at a given time point
   * @param  {Number} time      time point [s]
   * @return {Number}           value of the function
   */
  resolve(time) {
    var yRiseTime = this.outMax*(1 - Math.exp(-this.riseTime/this.riseTimeConst))
    return  time < this.startTime 
      ? this.offset 
      : time < (this.startTime + this.riseTime) 
        ? this.offset + this.outMax*(1-Math.exp(-(time - this.startTime)/this.riseTimeConst))
        : this.offset + yRiseTime*Math.exp(-(time-this.startTime-this.riseTime)/this.fallTimeConst)
  }
}

module.exports = Exponentials
