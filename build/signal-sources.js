(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.signalSources = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports.GenericSignal = require('./generic-signal.class.js');
module.exports.Constant = require('./constant.class.js');
module.exports.Step = require('./step.class.js');
module.exports.Ramp = require('./ramp.class.js');
module.exports.Sine = require('./sine.class.js');
module.exports.Exponentials = require('./exponentials.class.js');
module.exports.ExpSine = require('./exp-sine.class.js');
module.exports.Pulse = require('./pulse.class.js');
module.exports.Sawtooth = require('./sawtooth.class.js');
module.exports.Trapezoid = require('./trapezoid.class.js');

},{"./constant.class.js":2,"./exp-sine.class.js":3,"./exponentials.class.js":4,"./generic-signal.class.js":5,"./pulse.class.js":6,"./ramp.class.js":7,"./sawtooth.class.js":8,"./sine.class.js":9,"./step.class.js":10,"./trapezoid.class.js":11}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var GenericSignal = require('./generic-signal.class.js');

var Constant = (function (_GenericSignal) {
  /**
   * @constructor
   * @param  {Number} constant     output value
   */

  function Constant(constant) {
    _classCallCheck(this, Constant);

    _get(Object.getPrototypeOf(Constant.prototype), 'constructor', this).call(this);
    this.constant = constant;
  }

  _inherits(Constant, _GenericSignal);

  _createClass(Constant, [{
    key: 'resolve',

    /**
     * Returns the constant
     * @return {Number}              constant value
     */
    value: function resolve() {
      return this.constant;
    }
  }]);

  return Constant;
})(GenericSignal);

module.exports = Constant;

},{"./generic-signal.class.js":5}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var GenericSignal = require('./generic-signal.class.js');

var ExpSine = (function (_GenericSignal) {
  /**
   * @constructor
   * @param  {Number} amplitude     amplitude of sine wave
   * @param  {Number} frequency     frequency of sine wave [Hz]
   * @param  {Number} damping       damping coefficient of sine wave [s-1]
   * @param  {Number} phase         phase of sine wave [rad]
   * @param  {Number} offset        ordinate offset
   * @param  {Number} startTime     start time [s]
   */

  function ExpSine(amplitude, frequency, damping) {
    var phase = arguments[3] === undefined ? 0 : arguments[3];
    var offset = arguments[4] === undefined ? 0 : arguments[4];
    var startTime = arguments[5] === undefined ? 0 : arguments[5];

    _classCallCheck(this, ExpSine);

    _get(Object.getPrototypeOf(ExpSine.prototype), 'constructor', this).call(this);
    var _ref = [amplitude, frequency, damping, phase, offset, startTime];
    this.amplitude = _ref[0];
    this.frequency = _ref[1];
    this.damping = _ref[2];
    this.phase = _ref[3];
    this.offset = _ref[4];
    this.startTime = _ref[5];
  }

  _inherits(ExpSine, _GenericSignal);

  _createClass(ExpSine, [{
    key: 'resolve',

    /**
     * Сalculates the value of the function at a given time point
     * @param  {Number} time      time point
     * @return {Number}           value of the function
     */
    value: function resolve(time) {
      return time < this.startTime ? this.offset : this.offset + this.amplitude * Math.exp(-(time - this.startTime) * this.damping) * Math.sin(2 * Math.PI * this.frequency * (time - this.startTime) + this.phase);
    }
  }]);

  return ExpSine;
})(GenericSignal);

module.exports = ExpSine;

},{"./generic-signal.class.js":5}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var GenericSignal = require('./generic-signal.class.js');

var Exponentials = (function (_GenericSignal) {
  /**
   * @constructor
   * @param  {[type]} outMax        height of output for infinite riseTime
   * @param  {[type]} riseTime      rise time [s]
   * @param  {[type]} riseTimeConst rise time constant [s]
   * @param  {[type]} fallTimeConst fall time constant [s]
   * @param  {Number} offset        offset of output signal
   * @param  {Number} startTime     start time [s]
   */

  function Exponentials(outMax, riseTime, riseTimeConst, fallTimeConst) {
    var offset = arguments[4] === undefined ? 0 : arguments[4];
    var startTime = arguments[5] === undefined ? 0 : arguments[5];

    _classCallCheck(this, Exponentials);

    _get(Object.getPrototypeOf(Exponentials.prototype), 'constructor', this).call(this);
    var _ref = [outMax, riseTime, riseTimeConst, fallTimeConst, offset, startTime];
    this.outMax = _ref[0];
    this.riseTime = _ref[1];
    this.riseTimeConst = _ref[2];
    this.fallTimeConst = _ref[3];
    this.offset = _ref[4];
    this.startTime = _ref[5];
  }

  _inherits(Exponentials, _GenericSignal);

  _createClass(Exponentials, [{
    key: 'resolve',

    /**
     * Сalculates the value of the function at a given time point
     * @param  {Number} time      time point [s]
     * @return {Number}           value of the function
     */
    value: function resolve(time) {
      var yRiseTime = this.outMax * (1 - Math.exp(-this.riseTime / this.riseTimeConst));
      return time < this.startTime ? this.offset : time < this.startTime + this.riseTime ? this.offset + this.outMax * (1 - Math.exp(-(time - this.startTime) / this.riseTimeConst)) : this.offset + yRiseTime * Math.exp(-(time - this.startTime - this.riseTime) / this.fallTimeConst);
    }
  }]);

  return Exponentials;
})(GenericSignal);

module.exports = Exponentials;

},{"./generic-signal.class.js":5}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var GenericSignal = (function () {
  function GenericSignal() {
    _classCallCheck(this, GenericSignal);
  }

  _createClass(GenericSignal, [{
    key: 'generate',

    /**
     * Сalculates the value of the function at a given time points
     * @param  {[Number]} time      points
     * @return {[Number]}       
     */
    value: function generate(times) {
      var _this = this;

      return times.map(function (time) {
        return _this.resolve(time);
      });
    }
  }]);

  return GenericSignal;
})();

module.exports = GenericSignal;

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var GenericSignal = require('./generic-signal.class.js');

var Pulse = (function (_GenericSignal) {
  /**
   * @constructor
   * @param  {Number} amplitude     amplitude of pulse
   * @param  {Number} width         width of pulse in % of period
   * @param  {Number} period        time for one period [s]
   * @param  {Number} offset        offset of output signal
   * @param  {Number} startTime     start time [s]
   */

  function Pulse(amplitude, width, period) {
    var offset = arguments[3] === undefined ? 0 : arguments[3];
    var startTime = arguments[4] === undefined ? 0 : arguments[4];

    _classCallCheck(this, Pulse);

    _get(Object.getPrototypeOf(Pulse.prototype), 'constructor', this).call(this);
    var _ref = [amplitude, width, period, offset, startTime];
    this.amplitude = _ref[0];
    this.width = _ref[1];
    this.period = _ref[2];
    this.offset = _ref[3];
    this.startTime = _ref[4];
  }

  _inherits(Pulse, _GenericSignal);

  _createClass(Pulse, [{
    key: 'resolve',

    /**
     * Сalculates the value of the function at a given time point
     * @param  {Number} time      time point [s]
     * @return {Number}           value of the function
     */
    value: function resolve(time) {
      return time < this.startTime || (time - this.startTime) % this.period > this.period * this.width / 100 ? this.offset : this.offset + this.amplitude;
    }
  }]);

  return Pulse;
})(GenericSignal);

module.exports = Pulse;

},{"./generic-signal.class.js":5}],7:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var GenericSignal = require('./generic-signal.class.js');

var Ramp = (function (_GenericSignal) {
  /**
   * @constructor
   * @param  {Number} height        ramp height
   * @param  {Number} duration      ramp duration
   * @param  {Number} offset        ramp offset
   * @param  {Number} startTime     start time
   */

  function Ramp(height, duration) {
    var offset = arguments[2] === undefined ? 0 : arguments[2];
    var startTime = arguments[3] === undefined ? 0 : arguments[3];

    _classCallCheck(this, Ramp);

    _get(Object.getPrototypeOf(Ramp.prototype), 'constructor', this).call(this);
    var _ref = [height, duration, offset, startTime];
    this.height = _ref[0];
    this.duration = _ref[1];
    this.offset = _ref[2];
    this.startTime = _ref[3];
  }

  _inherits(Ramp, _GenericSignal);

  _createClass(Ramp, [{
    key: 'resolve',

    /**
     * Сalculates the value of the function at a given time point
     * @param  {Number} time      time point
     * @return {Number}           value of the function
     */
    value: function resolve(time) {
      return time < this.startTime ? this.offset : time < this.startTime + this.duration ? this.offset + (time - this.startTime) * this.height / this.duration : this.offset + this.height;
    }
  }]);

  return Ramp;
})(GenericSignal);

module.exports = Ramp;

},{"./generic-signal.class.js":5}],8:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var GenericSignal = require('./generic-signal.class.js');

var Sawtooth = (function (_GenericSignal) {
  /**
   * @constructor
   * @param  {Number} amplitude     amplitude of sawtooth
   * @param  {Number} period        time for one period [s]
   * @param  {Number} offset        offset of output signal
   * @param  {Number} startTime     start time [s]
   */

  function Sawtooth(amplitude, period) {
    var offset = arguments[2] === undefined ? 0 : arguments[2];
    var startTime = arguments[3] === undefined ? 0 : arguments[3];

    _classCallCheck(this, Sawtooth);

    _get(Object.getPrototypeOf(Sawtooth.prototype), 'constructor', this).call(this);
    var _ref = [amplitude, period, offset, startTime];
    this.amplitude = _ref[0];
    this.period = _ref[1];
    this.offset = _ref[2];
    this.startTime = _ref[3];
  }

  _inherits(Sawtooth, _GenericSignal);

  _createClass(Sawtooth, [{
    key: 'resolve',

    /**
     * Сalculates the value of the function at a given time point
     * @param  {Number} time      time point [s]
     * @return {Number}           value of the function
     */
    value: function resolve(time) {
      return time < this.startTime ? this.offset : this.offset + this.amplitude / this.period * (time % this.period);
    }
  }]);

  return Sawtooth;
})(GenericSignal);

module.exports = Sawtooth;

},{"./generic-signal.class.js":5}],9:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var GenericSignal = require('./generic-signal.class.js');

var Sine = (function (_GenericSignal) {
  /**
   * @constructor
   * @param  {Number} amplitude     sine amplitude
   * @param  {Number} frequency     sine frequency [Hz]
   * @param  {Number} phase         sine phase [rad]
   * @param  {Number} offset        sine ordinate offset
   * @param  {Number} startTime     start time
   */

  function Sine(amplitude, frequency) {
    var phase = arguments[2] === undefined ? 0 : arguments[2];
    var offset = arguments[3] === undefined ? 0 : arguments[3];
    var startTime = arguments[4] === undefined ? 0 : arguments[4];

    _classCallCheck(this, Sine);

    _get(Object.getPrototypeOf(Sine.prototype), 'constructor', this).call(this);
    var _ref = [amplitude, frequency, phase, offset, startTime];
    this.amplitude = _ref[0];
    this.frequency = _ref[1];
    this.phase = _ref[2];
    this.offset = _ref[3];
    this.startTime = _ref[4];
  }

  _inherits(Sine, _GenericSignal);

  _createClass(Sine, [{
    key: 'resolve',

    /**
     * Сalculates the value of the function at a given time point
     * @param  {Number} time      time point
     * @return {Number}           value of the function
     */
    value: function resolve(time) {
      return time < this.startTime ? this.offset : this.offset + this.amplitude * Math.sin(2 * Math.PI * this.frequency * (time - this.startTime) + this.phase);
    }
  }]);

  return Sine;
})(GenericSignal);

module.exports = Sine;

},{"./generic-signal.class.js":5}],10:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var GenericSignal = require('./generic-signal.class.js');

var Step = (function (_GenericSignal) {
  /**
   * @constructor
   * @param  {Number} height        step height
   * @param  {Number} offset        step offset
   * @param  {Number} startTime     start time
   */

  function Step(height) {
    var offset = arguments[1] === undefined ? 0 : arguments[1];
    var startTime = arguments[2] === undefined ? 0 : arguments[2];

    _classCallCheck(this, Step);

    _get(Object.getPrototypeOf(Step.prototype), 'constructor', this).call(this);
    var _ref = [height, offset, startTime];
    this.height = _ref[0];
    this.offset = _ref[1];
    this.startTime = _ref[2];
  }

  _inherits(Step, _GenericSignal);

  _createClass(Step, [{
    key: 'resolve',

    /**
     * Сalculates the value of the function at a given time point
     * @param  {Number} time      time point
     * @return {Number}           value of the function
     */
    value: function resolve(time) {
      return time < this.startTime ? this.offset : this.offset + this.height;
    }
  }]);

  return Step;
})(GenericSignal);

module.exports = Step;

},{"./generic-signal.class.js":5}],11:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var GenericSignal = require('./generic-signal.class.js');

var Trapezoid = (function (_GenericSignal) {
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

  function Trapezoid(amplitude, rising, width, falling, period) {
    var offset = arguments[5] === undefined ? 0 : arguments[5];
    var startTime = arguments[6] === undefined ? 0 : arguments[6];

    _classCallCheck(this, Trapezoid);

    _get(Object.getPrototypeOf(Trapezoid.prototype), 'constructor', this).call(this);
    var _ref = [amplitude, rising, width, falling, period, offset, startTime];
    this.amplitude = _ref[0];
    this.rising = _ref[1];
    this.width = _ref[2];
    this.falling = _ref[3];
    this.period = _ref[4];
    this.offset = _ref[5];
    this.startTime = _ref[6];
  }

  _inherits(Trapezoid, _GenericSignal);

  _createClass(Trapezoid, [{
    key: 'resolve',

    /**
     * Сalculates the value of the function at a given time point
     * @param  {Number} time      time point [s]
     * @return {Number}           value of the function
     */
    value: function resolve(time) {
      var timeInPeriod = (time - this.startTime) % this.period;
      return time < this.startTime ? this.offset : timeInPeriod < this.rising ? this.offset + this.amplitude / this.rising * timeInPeriod : timeInPeriod < this.rising + this.width ? this.offset + this.amplitude : timeInPeriod < this.rising + this.width + this.falling ? this.offset - this.amplitude / this.falling * (timeInPeriod - (this.width + this.rising)) + this.amplitude : this.offset;
    }
  }]);

  return Trapezoid;
})(GenericSignal);

module.exports = Trapezoid;

},{"./generic-signal.class.js":5}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9tYWluLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvY29uc3RhbnQuY2xhc3MuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9leHAtc2luZS5jbGFzcy5qcyIsIi9Vc2Vycy9ib3Jpc2MvUHJvamVjdHMvc2lnbmFsLXNvdXJjZXMvc3JjL2V4cG9uZW50aWFscy5jbGFzcy5qcyIsIi9Vc2Vycy9ib3Jpc2MvUHJvamVjdHMvc2lnbmFsLXNvdXJjZXMvc3JjL2dlbmVyaWMtc2lnbmFsLmNsYXNzLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvcHVsc2UuY2xhc3MuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9yYW1wLmNsYXNzLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvc2F3dG9vdGguY2xhc3MuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9zaW5lLmNsYXNzLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvc3RlcC5jbGFzcy5qcyIsIi9Vc2Vycy9ib3Jpc2MvUHJvamVjdHMvc2lnbmFsLXNvdXJjZXMvc3JjL3RyYXBlem9pZC5jbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUE7QUFDbkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLHFCQUFx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SSxDQUFDLE1BQU0sR0FBQyxZQUFZLEdBQ3JELFlBQVksR0FBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEFBQUMsR0FDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUM1QixZQUFZLEdBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEFBQUMsR0FDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRSxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxPQUFPLElBQUUsWUFBWSxJQUFFLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQSxDQUFDLEFBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUNqRyxJQUFJLENBQUMsTUFBTSxDQUFBO0tBQ3RCOzs7U0F0Q0csU0FBUztHQUFTLGFBQWE7O0FBeUNyQyxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cy5HZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5tb2R1bGUuZXhwb3J0cy5Db25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQuY2xhc3MuanMnKVxubW9kdWxlLmV4cG9ydHMuU3RlcCA9IHJlcXVpcmUoJy4vc3RlcC5jbGFzcy5qcycpXG5tb2R1bGUuZXhwb3J0cy5SYW1wID0gcmVxdWlyZSgnLi9yYW1wLmNsYXNzLmpzJylcbm1vZHVsZS5leHBvcnRzLlNpbmUgPSByZXF1aXJlKCcuL3NpbmUuY2xhc3MuanMnKVxubW9kdWxlLmV4cG9ydHMuRXhwb25lbnRpYWxzID0gcmVxdWlyZSgnLi9leHBvbmVudGlhbHMuY2xhc3MuanMnKVxubW9kdWxlLmV4cG9ydHMuRXhwU2luZSA9IHJlcXVpcmUoJy4vZXhwLXNpbmUuY2xhc3MuanMnKVxubW9kdWxlLmV4cG9ydHMuUHVsc2UgPSByZXF1aXJlKCcuL3B1bHNlLmNsYXNzLmpzJylcbm1vZHVsZS5leHBvcnRzLlNhd3Rvb3RoID0gcmVxdWlyZSgnLi9zYXd0b290aC5jbGFzcy5qcycpXG5tb2R1bGUuZXhwb3J0cy5UcmFwZXpvaWQgPSByZXF1aXJlKCcuL3RyYXBlem9pZC5jbGFzcy5qcycpXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIENvbnN0YW50IGV4dGVuZHMgR2VuZXJpY1NpZ25hbCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBjb25zdGFudCAgICAgb3V0cHV0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25zdGFudCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNvbnN0YW50ID0gY29uc3RhbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zdGFudFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICBjb25zdGFudCB2YWx1ZVxuICAgKi9cbiAgcmVzb2x2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdGFudFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uc3RhbnRcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdlbmVyaWNTaWduYWwgPSByZXF1aXJlKCcuL2dlbmVyaWMtc2lnbmFsLmNsYXNzLmpzJylcblxuY2xhc3MgRXhwU2luZSBleHRlbmRzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge051bWJlcn0gYW1wbGl0dWRlICAgICBhbXBsaXR1ZGUgb2Ygc2luZSB3YXZlXG4gICAqIEBwYXJhbSAge051bWJlcn0gZnJlcXVlbmN5ICAgICBmcmVxdWVuY3kgb2Ygc2luZSB3YXZlIFtIel1cbiAgICogQHBhcmFtICB7TnVtYmVyfSBkYW1waW5nICAgICAgIGRhbXBpbmcgY29lZmZpY2llbnQgb2Ygc2luZSB3YXZlIFtzLTFdXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGhhc2UgICAgICAgICBwaGFzZSBvZiBzaW5lIHdhdmUgW3JhZF1cbiAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXQgICAgICAgIG9yZGluYXRlIG9mZnNldFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHN0YXJ0VGltZSAgICAgc3RhcnQgdGltZSBbc11cbiAgICovXG4gIGNvbnN0cnVjdG9yKGFtcGxpdHVkZSwgZnJlcXVlbmN5LCBkYW1waW5nLCBwaGFzZSA9IDAsIG9mZnNldCA9IDAsIHN0YXJ0VGltZSA9IDApIHtcbiAgICBzdXBlcigpO1xuICAgIFsgdGhpcy5hbXBsaXR1ZGVcbiAgICAsIHRoaXMuZnJlcXVlbmN5XG4gICAgLCB0aGlzLmRhbXBpbmdcbiAgICAsIHRoaXMucGhhc2VcbiAgICAsIHRoaXMub2Zmc2V0XG4gICAgLCB0aGlzLnN0YXJ0VGltZSBdID0gW2FtcGxpdHVkZSwgZnJlcXVlbmN5LCBkYW1waW5nLCBwaGFzZSwgb2Zmc2V0LCBzdGFydFRpbWVdXG4gIH1cblxuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICAgdGltZSBwb2ludFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB2YWx1ZSBvZiB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHJlc29sdmUodGltZSkge1xuICAgIHJldHVybiB0aW1lIDwgdGhpcy5zdGFydFRpbWUgXG4gICAgICA/IHRoaXMub2Zmc2V0XG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5hbXBsaXR1ZGUqTWF0aC5leHAoLSh0aW1lLXRoaXMuc3RhcnRUaW1lKSp0aGlzLmRhbXBpbmcpXG4gICAgICAgICpNYXRoLnNpbigyKk1hdGguUEkqdGhpcy5mcmVxdWVuY3kqKHRpbWUtdGhpcy5zdGFydFRpbWUpK3RoaXMucGhhc2UpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeHBTaW5lXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIEV4cG9uZW50aWFscyBleHRlbmRzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gb3V0TWF4ICAgICAgICBoZWlnaHQgb2Ygb3V0cHV0IGZvciBpbmZpbml0ZSByaXNlVGltZVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHJpc2VUaW1lICAgICAgcmlzZSB0aW1lIFtzXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHJpc2VUaW1lQ29uc3QgcmlzZSB0aW1lIGNvbnN0YW50IFtzXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGZhbGxUaW1lQ29uc3QgZmFsbCB0aW1lIGNvbnN0YW50IFtzXVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG9mZnNldCAgICAgICAgb2Zmc2V0IG9mIG91dHB1dCBzaWduYWxcbiAgICogQHBhcmFtICB7TnVtYmVyfSBzdGFydFRpbWUgICAgIHN0YXJ0IHRpbWUgW3NdXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvdXRNYXgsIHJpc2VUaW1lLCByaXNlVGltZUNvbnN0LCBmYWxsVGltZUNvbnN0LCBvZmZzZXQgPSAwLCBzdGFydFRpbWUgPSAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICBbIHRoaXMub3V0TWF4XG4gICAgLCB0aGlzLnJpc2VUaW1lXG4gICAgLCB0aGlzLnJpc2VUaW1lQ29uc3RcbiAgICAsIHRoaXMuZmFsbFRpbWVDb25zdFxuICAgICwgdGhpcy5vZmZzZXRcbiAgICAsIHRoaXMuc3RhcnRUaW1lIF0gPSBbb3V0TWF4LCByaXNlVGltZSwgcmlzZVRpbWVDb25zdCwgZmFsbFRpbWVDb25zdCwgb2Zmc2V0LCBzdGFydFRpbWVdXG4gIH1cblxuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICAgdGltZSBwb2ludCBbc11cbiAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICByZXNvbHZlKHRpbWUpIHtcbiAgICB2YXIgeVJpc2VUaW1lID0gdGhpcy5vdXRNYXgqKDEgLSBNYXRoLmV4cCgtdGhpcy5yaXNlVGltZS90aGlzLnJpc2VUaW1lQ29uc3QpKVxuICAgIHJldHVybiAgdGltZSA8IHRoaXMuc3RhcnRUaW1lIFxuICAgICAgPyB0aGlzLm9mZnNldCBcbiAgICAgIDogdGltZSA8ICh0aGlzLnN0YXJ0VGltZSArIHRoaXMucmlzZVRpbWUpIFxuICAgICAgICA/IHRoaXMub2Zmc2V0ICsgdGhpcy5vdXRNYXgqKDEtTWF0aC5leHAoLSh0aW1lIC0gdGhpcy5zdGFydFRpbWUpL3RoaXMucmlzZVRpbWVDb25zdCkpXG4gICAgICAgIDogdGhpcy5vZmZzZXQgKyB5UmlzZVRpbWUqTWF0aC5leHAoLSh0aW1lLXRoaXMuc3RhcnRUaW1lLXRoaXMucmlzZVRpbWUpL3RoaXMuZmFsbFRpbWVDb25zdClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cG9uZW50aWFsc1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHZW5lcmljU2lnbmFsIHtcbiAgLyoqXG4gICAqINChYWxjdWxhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gYXQgYSBnaXZlbiB0aW1lIHBvaW50c1xuICAgKiBAcGFyYW0gIHtbTnVtYmVyXX0gdGltZSAgICAgIHBvaW50c1xuICAgKiBAcmV0dXJuIHtbTnVtYmVyXX0gICAgICAgXG4gICAqL1xuICBnZW5lcmF0ZSh0aW1lcykge1xuICAgIHJldHVybiB0aW1lcy5tYXAodGltZSA9PiB0aGlzLnJlc29sdmUodGltZSkpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHZW5lcmljU2lnbmFsIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2VuZXJpY1NpZ25hbCA9IHJlcXVpcmUoJy4vZ2VuZXJpYy1zaWduYWwuY2xhc3MuanMnKVxuXG5jbGFzcyBQdWxzZSBleHRlbmRzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge051bWJlcn0gYW1wbGl0dWRlICAgICBhbXBsaXR1ZGUgb2YgcHVsc2VcbiAgICogQHBhcmFtICB7TnVtYmVyfSB3aWR0aCAgICAgICAgIHdpZHRoIG9mIHB1bHNlIGluICUgb2YgcGVyaW9kXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGVyaW9kICAgICAgICB0aW1lIGZvciBvbmUgcGVyaW9kIFtzXVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG9mZnNldCAgICAgICAgb2Zmc2V0IG9mIG91dHB1dCBzaWduYWxcbiAgICogQHBhcmFtICB7TnVtYmVyfSBzdGFydFRpbWUgICAgIHN0YXJ0IHRpbWUgW3NdXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhbXBsaXR1ZGUsIHdpZHRoLCBwZXJpb2QsIG9mZnNldCA9IDAsIHN0YXJ0VGltZSA9IDApIHtcbiAgICBzdXBlcigpO1xuICAgIFsgdGhpcy5hbXBsaXR1ZGVcbiAgICAsIHRoaXMud2lkdGhcbiAgICAsIHRoaXMucGVyaW9kXG4gICAgLCB0aGlzLm9mZnNldFxuICAgICwgdGhpcy5zdGFydFRpbWUgXSA9IFthbXBsaXR1ZGUsIHdpZHRoLCBwZXJpb2QsIG9mZnNldCwgc3RhcnRUaW1lXVxuICB9XG5cbiAgLyoqXG4gICAqINChYWxjdWxhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gYXQgYSBnaXZlbiB0aW1lIHBvaW50XG4gICAqIEBwYXJhbSAge051bWJlcn0gdGltZSAgICAgIHRpbWUgcG9pbnQgW3NdXG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHZhbHVlIG9mIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgcmVzb2x2ZSh0aW1lKSB7XG4gICAgcmV0dXJuICh0aW1lIDwgdGhpcy5zdGFydFRpbWUpIHx8ICgodGltZS10aGlzLnN0YXJ0VGltZSkldGhpcy5wZXJpb2QgPiB0aGlzLnBlcmlvZCp0aGlzLndpZHRoLzEwMClcbiAgICAgID8gdGhpcy5vZmZzZXQgXG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5hbXBsaXR1ZGVcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFB1bHNlXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIFJhbXAgZXh0ZW5kcyBHZW5lcmljU2lnbmFsIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGhlaWdodCAgICAgICAgcmFtcCBoZWlnaHRcbiAgICogQHBhcmFtICB7TnVtYmVyfSBkdXJhdGlvbiAgICAgIHJhbXAgZHVyYXRpb25cbiAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXQgICAgICAgIHJhbXAgb2Zmc2V0XG4gICAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRUaW1lICAgICBzdGFydCB0aW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoZWlnaHQsIGR1cmF0aW9uLCBvZmZzZXQgPSAwLCBzdGFydFRpbWUgPSAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICBbIHRoaXMuaGVpZ2h0XG4gICAgLCB0aGlzLmR1cmF0aW9uXG4gICAgLCB0aGlzLm9mZnNldFxuICAgICwgdGhpcy5zdGFydFRpbWUgXSA9IFtoZWlnaHQsIGR1cmF0aW9uLCBvZmZzZXQsIHN0YXJ0VGltZV1cbiAgfVxuXG4gIC8qKlxuICAgKiDQoWFsY3VsYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGF0IGEgZ2l2ZW4gdGltZSBwb2ludFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWUgICAgICB0aW1lIHBvaW50XG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHZhbHVlIG9mIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgcmVzb2x2ZSh0aW1lKSB7XG4gICAgcmV0dXJuIHRpbWUgPCB0aGlzLnN0YXJ0VGltZSBcbiAgICAgID8gdGhpcy5vZmZzZXRcbiAgICAgIDogdGltZSA8ICh0aGlzLnN0YXJ0VGltZSArIHRoaXMuZHVyYXRpb24pXG4gICAgICAgID8gdGhpcy5vZmZzZXQgKyAodGltZSAtIHRoaXMuc3RhcnRUaW1lKSp0aGlzLmhlaWdodC90aGlzLmR1cmF0aW9uXG4gICAgICAgIDogdGhpcy5vZmZzZXQgKyB0aGlzLmhlaWdodFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmFtcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2VuZXJpY1NpZ25hbCA9IHJlcXVpcmUoJy4vZ2VuZXJpYy1zaWduYWwuY2xhc3MuanMnKVxuXG5jbGFzcyBTYXd0b290aCBleHRlbmRzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge051bWJlcn0gYW1wbGl0dWRlICAgICBhbXBsaXR1ZGUgb2Ygc2F3dG9vdGhcbiAgICogQHBhcmFtICB7TnVtYmVyfSBwZXJpb2QgICAgICAgIHRpbWUgZm9yIG9uZSBwZXJpb2QgW3NdXG4gICAqIEBwYXJhbSAge051bWJlcn0gb2Zmc2V0ICAgICAgICBvZmZzZXQgb2Ygb3V0cHV0IHNpZ25hbFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHN0YXJ0VGltZSAgICAgc3RhcnQgdGltZSBbc11cbiAgICovXG4gIGNvbnN0cnVjdG9yKGFtcGxpdHVkZSwgcGVyaW9kLCBvZmZzZXQgPSAwLCBzdGFydFRpbWUgPSAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICBbIHRoaXMuYW1wbGl0dWRlXG4gICAgLCB0aGlzLnBlcmlvZFxuICAgICwgdGhpcy5vZmZzZXRcbiAgICAsIHRoaXMuc3RhcnRUaW1lIF0gPSBbYW1wbGl0dWRlLCBwZXJpb2QsIG9mZnNldCwgc3RhcnRUaW1lXVxuICB9XG5cbiAgLyoqXG4gICAqINChYWxjdWxhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gYXQgYSBnaXZlbiB0aW1lIHBvaW50XG4gICAqIEBwYXJhbSAge051bWJlcn0gdGltZSAgICAgIHRpbWUgcG9pbnQgW3NdXG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHZhbHVlIG9mIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgcmVzb2x2ZSh0aW1lKSB7XG4gICAgcmV0dXJuICh0aW1lIDwgdGhpcy5zdGFydFRpbWUpXG4gICAgICA/IHRoaXMub2Zmc2V0XG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5hbXBsaXR1ZGUvdGhpcy5wZXJpb2QqKHRpbWUldGhpcy5wZXJpb2QpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTYXd0b290aFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2VuZXJpY1NpZ25hbCA9IHJlcXVpcmUoJy4vZ2VuZXJpYy1zaWduYWwuY2xhc3MuanMnKVxuXG5jbGFzcyBTaW5lIGV4dGVuZHMgR2VuZXJpY1NpZ25hbCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBhbXBsaXR1ZGUgICAgIHNpbmUgYW1wbGl0dWRlXG4gICAqIEBwYXJhbSAge051bWJlcn0gZnJlcXVlbmN5ICAgICBzaW5lIGZyZXF1ZW5jeSBbSHpdXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGhhc2UgICAgICAgICBzaW5lIHBoYXNlIFtyYWRdXG4gICAqIEBwYXJhbSAge051bWJlcn0gb2Zmc2V0ICAgICAgICBzaW5lIG9yZGluYXRlIG9mZnNldFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHN0YXJ0VGltZSAgICAgc3RhcnQgdGltZVxuICAgKi9cbiAgY29uc3RydWN0b3IoYW1wbGl0dWRlLCBmcmVxdWVuY3ksIHBoYXNlID0gMCwgb2Zmc2V0ID0gMCwgc3RhcnRUaW1lID0gMCkge1xuICAgIHN1cGVyKCk7XG4gICAgWyB0aGlzLmFtcGxpdHVkZVxuICAgICwgdGhpcy5mcmVxdWVuY3lcbiAgICAsIHRoaXMucGhhc2VcbiAgICAsIHRoaXMub2Zmc2V0XG4gICAgLCB0aGlzLnN0YXJ0VGltZSBdID0gW2FtcGxpdHVkZSwgZnJlcXVlbmN5LCBwaGFzZSwgb2Zmc2V0LCBzdGFydFRpbWVdXG4gIH1cblxuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICAgdGltZSBwb2ludFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB2YWx1ZSBvZiB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHJlc29sdmUodGltZSkge1xuICAgIHJldHVybiB0aW1lIDwgdGhpcy5zdGFydFRpbWUgXG4gICAgICA/IHRoaXMub2Zmc2V0XG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5hbXBsaXR1ZGUqTWF0aC5zaW4oMipNYXRoLlBJKnRoaXMuZnJlcXVlbmN5Kih0aW1lIC0gdGhpcy5zdGFydFRpbWUpICsgdGhpcy5waGFzZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbmUiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIFN0ZXAgZXh0ZW5kcyBHZW5lcmljU2lnbmFsIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGhlaWdodCAgICAgICAgc3RlcCBoZWlnaHRcbiAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXQgICAgICAgIHN0ZXAgb2Zmc2V0XG4gICAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRUaW1lICAgICBzdGFydCB0aW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoZWlnaHQsIG9mZnNldCA9IDAsIHN0YXJ0VGltZSA9IDApIHtcbiAgICBzdXBlcigpO1xuICAgIFsgdGhpcy5oZWlnaHRcbiAgICAsIHRoaXMub2Zmc2V0XG4gICAgLCB0aGlzLnN0YXJ0VGltZSBdID0gW2hlaWdodCwgb2Zmc2V0LCBzdGFydFRpbWVdXG4gIH1cblxuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICAgdGltZSBwb2ludFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB2YWx1ZSBvZiB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHJlc29sdmUodGltZSkge1xuICAgIHJldHVybiB0aW1lIDwgdGhpcy5zdGFydFRpbWUgXG4gICAgICA/IHRoaXMub2Zmc2V0XG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5oZWlnaHRcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0ZXBcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdlbmVyaWNTaWduYWwgPSByZXF1aXJlKCcuL2dlbmVyaWMtc2lnbmFsLmNsYXNzLmpzJylcblxuY2xhc3MgVHJhcGV6b2lkIGV4dGVuZHMgR2VuZXJpY1NpZ25hbCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBhbXBsaXR1ZGUgICAgIGFtcGxpdHVkZSBvZiB0cmFwZXpvaWRcbiAgICogQHBhcmFtICB7TnVtYmVyfSByaXNpbmcgICAgICAgIHJpc2luZyBkdXJhdGlvbiBvZiB0cmFwZXpvaWQgW3NdXG4gICAqIEBwYXJhbSAge051bWJlcn0gd2lkdGggICAgICAgICB3aWR0aCBkdXJhdGlvbiBvZiB0cmFwZXpvaWQgW3NdXG4gICAqIEBwYXJhbSAge051bWJlcn0gZmFsbGluZyAgICAgICBmYWxsaW5nIGR1cmF0aW9uIG9mIHRyYXBlem9pZCBbc11cbiAgICogQHBhcmFtICB7TnVtYmVyfSBwZXJpb2QgICAgICAgIHRpbWUgZm9yIG9uZSBwZXJpb2QgW3NdXG4gICAqIEBwYXJhbSAge051bWJlcn0gb2Zmc2V0ICAgICAgICBvZmZzZXQgb2Ygb3V0cHV0IHNpZ25hbFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHN0YXJ0VGltZSAgICAgc3RhcnQgdGltZSBbc11cbiAgICovXG4gIGNvbnN0cnVjdG9yKGFtcGxpdHVkZSwgcmlzaW5nLCB3aWR0aCwgZmFsbGluZywgcGVyaW9kLCBvZmZzZXQgPSAwLCBzdGFydFRpbWUgPSAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICBbIHRoaXMuYW1wbGl0dWRlXG4gICAgLCB0aGlzLnJpc2luZ1xuICAgICwgdGhpcy53aWR0aFxuICAgICwgdGhpcy5mYWxsaW5nXG4gICAgLCB0aGlzLnBlcmlvZFxuICAgICwgdGhpcy5vZmZzZXRcbiAgICAsIHRoaXMuc3RhcnRUaW1lIF0gPSBbYW1wbGl0dWRlLCByaXNpbmcsIHdpZHRoLCBmYWxsaW5nLCBwZXJpb2QsIG9mZnNldCwgc3RhcnRUaW1lXVxuICB9XG5cbiAgLyoqXG4gICAqINChYWxjdWxhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gYXQgYSBnaXZlbiB0aW1lIHBvaW50XG4gICAqIEBwYXJhbSAge051bWJlcn0gdGltZSAgICAgIHRpbWUgcG9pbnQgW3NdXG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHZhbHVlIG9mIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgcmVzb2x2ZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVJblBlcmlvZCA9ICh0aW1lLXRoaXMuc3RhcnRUaW1lKSV0aGlzLnBlcmlvZFxuICAgIHJldHVybiB0aW1lIDwgdGhpcy5zdGFydFRpbWVcbiAgICAgID8gdGhpcy5vZmZzZXRcbiAgICAgIDogdGltZUluUGVyaW9kIDwgdGhpcy5yaXNpbmdcbiAgICAgICAgPyB0aGlzLm9mZnNldCArIHRoaXMuYW1wbGl0dWRlL3RoaXMucmlzaW5nKnRpbWVJblBlcmlvZFxuICAgICAgICA6IHRpbWVJblBlcmlvZCA8ICh0aGlzLnJpc2luZyArIHRoaXMud2lkdGgpXG4gICAgICAgICAgPyB0aGlzLm9mZnNldCArIHRoaXMuYW1wbGl0dWRlXG4gICAgICAgICAgOiB0aW1lSW5QZXJpb2QgPCAodGhpcy5yaXNpbmcgKyB0aGlzLndpZHRoICsgdGhpcy5mYWxsaW5nKVxuICAgICAgICAgICAgPyB0aGlzLm9mZnNldCAtdGhpcy5hbXBsaXR1ZGUvdGhpcy5mYWxsaW5nKih0aW1lSW5QZXJpb2QtKHRoaXMud2lkdGgrdGhpcy5yaXNpbmcpKSArIHRoaXMuYW1wbGl0dWRlXG4gICAgICAgICAgICA6IHRoaXMub2Zmc2V0XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFwZXpvaWRcbiJdfQ==
