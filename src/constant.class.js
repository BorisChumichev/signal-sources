'use strict';

var GenericSignal = require('./generic-signal.class.js')

class Constant extends GenericSignal {
  /**
   * @constructor
   * @param  {Number} constant     output value
   */
  constructor(constant) {
    super()
    this.constant = constant
  }

  /**
   * Returns the constant
   * @return {Number}              constant value
   */
  resolve() {
    return this.constant
  }
}

module.exports = Constant
