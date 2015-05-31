'use strict';

class GenericSignal {
  /**
   * Сalculates the value of the function at a given time points
   * @param  {[Number]} time      points
   * @return {[Number]}       
   */
  generate(times) {
    return times.map(time => this.resolve(time))
  }
}

module.exports = GenericSignal