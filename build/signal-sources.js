(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.signalSources = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports.GenericSignal = require('./generic-signal.class.js');
module.exports.Constant = require('./constant.class.js');
module.exports.Step = require('./step.class.js');
module.exports.Ramp = require('./ramp.class.js');
module.exports.Sine = require('./sine.class.js');
module.exports.ExpSine = require('./exp-sine.class.js');
module.exports.Exponentials = require('./exponentials.class.js');
module.exports.Pulse = require('./pulse.class.js');

},{"./constant.class.js":2,"./exp-sine.class.js":3,"./exponentials.class.js":4,"./generic-signal.class.js":5,"./pulse.class.js":6,"./ramp.class.js":7,"./sine.class.js":8,"./step.class.js":9}],2:[function(require,module,exports){
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

},{"./generic-signal.class.js":5}],9:[function(require,module,exports){
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

},{"./generic-signal.class.js":5}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9tYWluLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvY29uc3RhbnQuY2xhc3MuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9leHAtc2luZS5jbGFzcy5qcyIsIi9Vc2Vycy9ib3Jpc2MvUHJvamVjdHMvc2lnbmFsLXNvdXJjZXMvc3JjL2V4cG9uZW50aWFscy5jbGFzcy5qcyIsIi9Vc2Vycy9ib3Jpc2MvUHJvamVjdHMvc2lnbmFsLXNvdXJjZXMvc3JjL2dlbmVyaWMtc2lnbmFsLmNsYXNzLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvcHVsc2UuY2xhc3MuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9yYW1wLmNsYXNzLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvc2luZS5jbGFzcy5qcyIsIi9Vc2Vycy9ib3Jpc2MvUHJvamVjdHMvc2lnbmFsLXNvdXJjZXMvc3JjL3N0ZXAuY2xhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ25FLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFB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RTtBQUNaLGFBQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO0tBQzlCOzs7U0F2QkcsSUFBSTtHQUFTLGFBQWE7O0FBMEJoQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cy5HZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5tb2R1bGUuZXhwb3J0cy5Db25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQuY2xhc3MuanMnKVxubW9kdWxlLmV4cG9ydHMuU3RlcCA9IHJlcXVpcmUoJy4vc3RlcC5jbGFzcy5qcycpXG5tb2R1bGUuZXhwb3J0cy5SYW1wID0gcmVxdWlyZSgnLi9yYW1wLmNsYXNzLmpzJylcbm1vZHVsZS5leHBvcnRzLlNpbmUgPSByZXF1aXJlKCcuL3NpbmUuY2xhc3MuanMnKVxubW9kdWxlLmV4cG9ydHMuRXhwU2luZSA9IHJlcXVpcmUoJy4vZXhwLXNpbmUuY2xhc3MuanMnKVxubW9kdWxlLmV4cG9ydHMuRXhwb25lbnRpYWxzID0gcmVxdWlyZSgnLi9leHBvbmVudGlhbHMuY2xhc3MuanMnKVxubW9kdWxlLmV4cG9ydHMuUHVsc2UgPSByZXF1aXJlKCcuL3B1bHNlLmNsYXNzLmpzJykiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIENvbnN0YW50IGV4dGVuZHMgR2VuZXJpY1NpZ25hbCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBjb25zdGFudCAgICAgb3V0cHV0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25zdGFudCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNvbnN0YW50ID0gY29uc3RhbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zdGFudFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICBjb25zdGFudCB2YWx1ZVxuICAgKi9cbiAgcmVzb2x2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdGFudFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uc3RhbnRcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdlbmVyaWNTaWduYWwgPSByZXF1aXJlKCcuL2dlbmVyaWMtc2lnbmFsLmNsYXNzLmpzJylcblxuY2xhc3MgRXhwU2luZSBleHRlbmRzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge051bWJlcn0gYW1wbGl0dWRlICAgICBhbXBsaXR1ZGUgb2Ygc2luZSB3YXZlXG4gICAqIEBwYXJhbSAge051bWJlcn0gZnJlcXVlbmN5ICAgICBmcmVxdWVuY3kgb2Ygc2luZSB3YXZlIFtIel1cbiAgICogQHBhcmFtICB7TnVtYmVyfSBkYW1waW5nICAgICAgIGRhbXBpbmcgY29lZmZpY2llbnQgb2Ygc2luZSB3YXZlIFtzLTFdXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGhhc2UgICAgICAgICBwaGFzZSBvZiBzaW5lIHdhdmUgW3JhZF1cbiAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXQgICAgICAgIG9yZGluYXRlIG9mZnNldFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHN0YXJ0VGltZSAgICAgc3RhcnQgdGltZSBbc11cbiAgICovXG4gIGNvbnN0cnVjdG9yKGFtcGxpdHVkZSwgZnJlcXVlbmN5LCBkYW1waW5nLCBwaGFzZSA9IDAsIG9mZnNldCA9IDAsIHN0YXJ0VGltZSA9IDApIHtcbiAgICBzdXBlcigpO1xuICAgIFsgdGhpcy5hbXBsaXR1ZGVcbiAgICAsIHRoaXMuZnJlcXVlbmN5XG4gICAgLCB0aGlzLmRhbXBpbmdcbiAgICAsIHRoaXMucGhhc2VcbiAgICAsIHRoaXMub2Zmc2V0XG4gICAgLCB0aGlzLnN0YXJ0VGltZSBdID0gW2FtcGxpdHVkZSwgZnJlcXVlbmN5LCBkYW1waW5nLCBwaGFzZSwgb2Zmc2V0LCBzdGFydFRpbWVdXG4gIH1cblxuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICAgdGltZSBwb2ludFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB2YWx1ZSBvZiB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHJlc29sdmUodGltZSkge1xuICAgIHJldHVybiB0aW1lIDwgdGhpcy5zdGFydFRpbWUgXG4gICAgICA/IHRoaXMub2Zmc2V0XG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5hbXBsaXR1ZGUqTWF0aC5leHAoLSh0aW1lLXRoaXMuc3RhcnRUaW1lKSp0aGlzLmRhbXBpbmcpXG4gICAgICAgICpNYXRoLnNpbigyKk1hdGguUEkqdGhpcy5mcmVxdWVuY3kqKHRpbWUtdGhpcy5zdGFydFRpbWUpK3RoaXMucGhhc2UpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeHBTaW5lXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIEV4cG9uZW50aWFscyBleHRlbmRzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gb3V0TWF4ICAgICAgICBoZWlnaHQgb2Ygb3V0cHV0IGZvciBpbmZpbml0ZSByaXNlVGltZVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHJpc2VUaW1lICAgICAgcmlzZSB0aW1lIFtzXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHJpc2VUaW1lQ29uc3QgcmlzZSB0aW1lIGNvbnN0YW50IFtzXVxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGZhbGxUaW1lQ29uc3QgZmFsbCB0aW1lIGNvbnN0YW50IFtzXVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG9mZnNldCAgICAgICAgb2Zmc2V0IG9mIG91dHB1dCBzaWduYWxcbiAgICogQHBhcmFtICB7TnVtYmVyfSBzdGFydFRpbWUgICAgIHN0YXJ0IHRpbWUgW3NdXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvdXRNYXgsIHJpc2VUaW1lLCByaXNlVGltZUNvbnN0LCBmYWxsVGltZUNvbnN0LCBvZmZzZXQgPSAwLCBzdGFydFRpbWUgPSAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICBbIHRoaXMub3V0TWF4XG4gICAgLCB0aGlzLnJpc2VUaW1lXG4gICAgLCB0aGlzLnJpc2VUaW1lQ29uc3RcbiAgICAsIHRoaXMuZmFsbFRpbWVDb25zdFxuICAgICwgdGhpcy5vZmZzZXRcbiAgICAsIHRoaXMuc3RhcnRUaW1lIF0gPSBbb3V0TWF4LCByaXNlVGltZSwgcmlzZVRpbWVDb25zdCwgZmFsbFRpbWVDb25zdCwgb2Zmc2V0LCBzdGFydFRpbWVdXG4gIH1cblxuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICAgdGltZSBwb2ludCBbc11cbiAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICByZXNvbHZlKHRpbWUpIHtcbiAgICB2YXIgeVJpc2VUaW1lID0gdGhpcy5vdXRNYXgqKDEgLSBNYXRoLmV4cCgtdGhpcy5yaXNlVGltZS90aGlzLnJpc2VUaW1lQ29uc3QpKVxuICAgIHJldHVybiAgdGltZSA8IHRoaXMuc3RhcnRUaW1lIFxuICAgICAgPyB0aGlzLm9mZnNldCBcbiAgICAgIDogdGltZSA8ICh0aGlzLnN0YXJ0VGltZSArIHRoaXMucmlzZVRpbWUpIFxuICAgICAgICA/IHRoaXMub2Zmc2V0ICsgdGhpcy5vdXRNYXgqKDEtTWF0aC5leHAoLSh0aW1lIC0gdGhpcy5zdGFydFRpbWUpL3RoaXMucmlzZVRpbWVDb25zdCkpXG4gICAgICAgIDogdGhpcy5vZmZzZXQgKyB5UmlzZVRpbWUqTWF0aC5leHAoLSh0aW1lLXRoaXMuc3RhcnRUaW1lLXRoaXMucmlzZVRpbWUpL3RoaXMuZmFsbFRpbWVDb25zdClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cG9uZW50aWFsc1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHZW5lcmljU2lnbmFsIHtcbiAgLyoqXG4gICAqINChYWxjdWxhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gYXQgYSBnaXZlbiB0aW1lIHBvaW50c1xuICAgKiBAcGFyYW0gIHtbTnVtYmVyXX0gdGltZSAgICAgIHBvaW50c1xuICAgKiBAcmV0dXJuIHtbTnVtYmVyXX0gICAgICAgXG4gICAqL1xuICBnZW5lcmF0ZSh0aW1lcykge1xuICAgIHJldHVybiB0aW1lcy5tYXAodGltZSA9PiB0aGlzLnJlc29sdmUodGltZSkpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHZW5lcmljU2lnbmFsIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2VuZXJpY1NpZ25hbCA9IHJlcXVpcmUoJy4vZ2VuZXJpYy1zaWduYWwuY2xhc3MuanMnKVxuXG5jbGFzcyBQdWxzZSBleHRlbmRzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge051bWJlcn0gYW1wbGl0dWRlICAgICBhbXBsaXR1ZGUgb2YgcHVsc2VcbiAgICogQHBhcmFtICB7TnVtYmVyfSB3aWR0aCAgICAgICAgIHdpZHRoIG9mIHB1bHNlIGluICUgb2YgcGVyaW9kXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGVyaW9kICAgICAgICB0aW1lIGZvciBvbmUgcGVyaW9kIFtzXVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG9mZnNldCAgICAgICAgb2Zmc2V0IG9mIG91dHB1dCBzaWduYWxcbiAgICogQHBhcmFtICB7TnVtYmVyfSBzdGFydFRpbWUgICAgIHN0YXJ0IHRpbWUgW3NdXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhbXBsaXR1ZGUsIHdpZHRoLCBwZXJpb2QsIG9mZnNldCA9IDAsIHN0YXJ0VGltZSA9IDApIHtcbiAgICBzdXBlcigpO1xuICAgIFsgdGhpcy5hbXBsaXR1ZGVcbiAgICAsIHRoaXMud2lkdGhcbiAgICAsIHRoaXMucGVyaW9kXG4gICAgLCB0aGlzLm9mZnNldFxuICAgICwgdGhpcy5zdGFydFRpbWUgXSA9IFthbXBsaXR1ZGUsIHdpZHRoLCBwZXJpb2QsIG9mZnNldCwgc3RhcnRUaW1lXVxuICB9XG5cbiAgLyoqXG4gICAqINChYWxjdWxhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gYXQgYSBnaXZlbiB0aW1lIHBvaW50XG4gICAqIEBwYXJhbSAge051bWJlcn0gdGltZSAgICAgIHRpbWUgcG9pbnQgW3NdXG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHZhbHVlIG9mIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgcmVzb2x2ZSh0aW1lKSB7XG4gICAgcmV0dXJuICh0aW1lIDwgdGhpcy5zdGFydFRpbWUpIHx8ICgodGltZS10aGlzLnN0YXJ0VGltZSkldGhpcy5wZXJpb2QgPiB0aGlzLnBlcmlvZCp0aGlzLndpZHRoLzEwMClcbiAgICAgID8gdGhpcy5vZmZzZXQgXG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5hbXBsaXR1ZGVcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFB1bHNlXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIFJhbXAgZXh0ZW5kcyBHZW5lcmljU2lnbmFsIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGhlaWdodCAgICAgICAgcmFtcCBoZWlnaHRcbiAgICogQHBhcmFtICB7TnVtYmVyfSBkdXJhdGlvbiAgICAgIHJhbXAgZHVyYXRpb25cbiAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXQgICAgICAgIHJhbXAgb2Zmc2V0XG4gICAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRUaW1lICAgICBzdGFydCB0aW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoZWlnaHQsIGR1cmF0aW9uLCBvZmZzZXQgPSAwLCBzdGFydFRpbWUgPSAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICBbIHRoaXMuaGVpZ2h0XG4gICAgLCB0aGlzLmR1cmF0aW9uXG4gICAgLCB0aGlzLm9mZnNldFxuICAgICwgdGhpcy5zdGFydFRpbWUgXSA9IFtoZWlnaHQsIGR1cmF0aW9uLCBvZmZzZXQsIHN0YXJ0VGltZV1cbiAgfVxuXG4gIC8qKlxuICAgKiDQoWFsY3VsYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGF0IGEgZ2l2ZW4gdGltZSBwb2ludFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWUgICAgICB0aW1lIHBvaW50XG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHZhbHVlIG9mIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgcmVzb2x2ZSh0aW1lKSB7XG4gICAgcmV0dXJuIHRpbWUgPCB0aGlzLnN0YXJ0VGltZSBcbiAgICAgID8gdGhpcy5vZmZzZXRcbiAgICAgIDogdGltZSA8ICh0aGlzLnN0YXJ0VGltZSArIHRoaXMuZHVyYXRpb24pXG4gICAgICAgID8gdGhpcy5vZmZzZXQgKyAodGltZSAtIHRoaXMuc3RhcnRUaW1lKSp0aGlzLmhlaWdodC90aGlzLmR1cmF0aW9uXG4gICAgICAgIDogdGhpcy5vZmZzZXQgKyB0aGlzLmhlaWdodFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmFtcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2VuZXJpY1NpZ25hbCA9IHJlcXVpcmUoJy4vZ2VuZXJpYy1zaWduYWwuY2xhc3MuanMnKVxuXG5jbGFzcyBTaW5lIGV4dGVuZHMgR2VuZXJpY1NpZ25hbCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBhbXBsaXR1ZGUgICAgIHNpbmUgYW1wbGl0dWRlXG4gICAqIEBwYXJhbSAge051bWJlcn0gZnJlcXVlbmN5ICAgICBzaW5lIGZyZXF1ZW5jeSBbSHpdXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGhhc2UgICAgICAgICBzaW5lIHBoYXNlIFtyYWRdXG4gICAqIEBwYXJhbSAge051bWJlcn0gb2Zmc2V0ICAgICAgICBzaW5lIG9yZGluYXRlIG9mZnNldFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHN0YXJ0VGltZSAgICAgc3RhcnQgdGltZVxuICAgKi9cbiAgY29uc3RydWN0b3IoYW1wbGl0dWRlLCBmcmVxdWVuY3ksIHBoYXNlID0gMCwgb2Zmc2V0ID0gMCwgc3RhcnRUaW1lID0gMCkge1xuICAgIHN1cGVyKCk7XG4gICAgWyB0aGlzLmFtcGxpdHVkZVxuICAgICwgdGhpcy5mcmVxdWVuY3lcbiAgICAsIHRoaXMucGhhc2VcbiAgICAsIHRoaXMub2Zmc2V0XG4gICAgLCB0aGlzLnN0YXJ0VGltZSBdID0gW2FtcGxpdHVkZSwgZnJlcXVlbmN5LCBwaGFzZSwgb2Zmc2V0LCBzdGFydFRpbWVdXG4gIH1cblxuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICAgdGltZSBwb2ludFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB2YWx1ZSBvZiB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHJlc29sdmUodGltZSkge1xuICAgIHJldHVybiB0aW1lIDwgdGhpcy5zdGFydFRpbWUgXG4gICAgICA/IHRoaXMub2Zmc2V0XG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5hbXBsaXR1ZGUqTWF0aC5zaW4oMipNYXRoLlBJKnRoaXMuZnJlcXVlbmN5Kih0aW1lIC0gdGhpcy5zdGFydFRpbWUpICsgdGhpcy5waGFzZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbmUiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIFN0ZXAgZXh0ZW5kcyBHZW5lcmljU2lnbmFsIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGhlaWdodCAgICAgICAgc3RlcCBoZWlnaHRcbiAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXQgICAgICAgIHN0ZXAgb2Zmc2V0XG4gICAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRUaW1lICAgICBzdGFydCB0aW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoZWlnaHQsIG9mZnNldCA9IDAsIHN0YXJ0VGltZSA9IDApIHtcbiAgICBzdXBlcigpO1xuICAgIFsgdGhpcy5oZWlnaHRcbiAgICAsIHRoaXMub2Zmc2V0XG4gICAgLCB0aGlzLnN0YXJ0VGltZSBdID0gW2hlaWdodCwgb2Zmc2V0LCBzdGFydFRpbWVdXG4gIH1cblxuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICAgdGltZSBwb2ludFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB2YWx1ZSBvZiB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHJlc29sdmUodGltZSkge1xuICAgIHJldHVybiB0aW1lIDwgdGhpcy5zdGFydFRpbWUgXG4gICAgICA/IHRoaXMub2Zmc2V0XG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5oZWlnaHRcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0ZXBcbiJdfQ==
