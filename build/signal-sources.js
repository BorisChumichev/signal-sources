(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.signalSources = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports.GenericSignal = require('./generic-signal.class.js');
module.exports.Constant = require('./constant.class.js');
module.exports.Step = require('./step.class.js');
module.exports.Ramp = require('./ramp.class.js');
module.exports.Sine = require('./sine.class.js');
module.exports.ExpSine = require('./exp-sine.class.js');

},{"./constant.class.js":2,"./exp-sine.class.js":3,"./generic-signal.class.js":4,"./ramp.class.js":5,"./sine.class.js":6,"./step.class.js":7}],2:[function(require,module,exports){
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

},{"./generic-signal.class.js":4}],3:[function(require,module,exports){
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

},{"./generic-signal.class.js":4}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{"./generic-signal.class.js":4}],6:[function(require,module,exports){
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

},{"./generic-signal.class.js":4}],7:[function(require,module,exports){
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

},{"./generic-signal.class.js":4}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9tYWluLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvY29uc3RhbnQuY2xhc3MuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9leHAtc2luZS5jbGFzcy5qcyIsIi9Vc2Vycy9ib3Jpc2MvUHJvamVjdHMvc2lnbmFsLXNvdXJjZXMvc3JjL2dlbmVyaWMtc2lnbmFsLmNsYXNzLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvcmFtcC5jbGFzcy5qcyIsIi9Vc2Vycy9ib3Jpc2MvUHJvamVjdHMvc2lnbmFsLXNvdXJjZXMvc3JjL3NpbmUuY2xhc3MuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9zdGVwLmNsYXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNuRSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUN4RCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMscUJB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SUFBSSxDQUFDLE1BQU0sR0FDWCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsU0FBUyxJQUFFLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBLEFBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDekc7OztTQTNCRyxJQUFJO0dBQVMsYUFBYTs7QUE4QmhDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBOzs7QUNsQ3JCLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFBOztJQUVsRCxJQUFJOzs7Ozs7OztBQU9HLFdBUFAsSUFBSSxDQU9JLE1BQU0sRUFBNkI7UUFBM0IsTUFBTSxnQ0FBRyxDQUFDO1FBQUUsU0FBUyxnQ0FBRyxDQUFDOzswQkFQekMsSUFBSTs7QUFRTiwrQkFSRSxJQUFJLDZDQVFFO2VBR2EsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztBQUY5QyxRQUFJLENBQUMsTUFBTTtBQUNYLFFBQUksQ0FBQyxNQUFNO0FBQ1gsUUFBSSxDQUFDLFNBQVM7R0FDakI7O1lBWkcsSUFBSTs7ZUFBSixJQUFJOzs7Ozs7OztXQW1CRCxpQkFBQyxJQUFJLEVBQUU7QUFDWixhQUFPLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUN4QixJQUFJLENBQUMsTUFBTSxHQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtLQUM5Qjs7O1NBdkJHLElBQUk7R0FBUyxhQUFhOztBQTBCaEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMuR2VuZXJpY1NpZ25hbCA9IHJlcXVpcmUoJy4vZ2VuZXJpYy1zaWduYWwuY2xhc3MuanMnKVxubW9kdWxlLmV4cG9ydHMuQ29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50LmNsYXNzLmpzJylcbm1vZHVsZS5leHBvcnRzLlN0ZXAgPSByZXF1aXJlKCcuL3N0ZXAuY2xhc3MuanMnKVxubW9kdWxlLmV4cG9ydHMuUmFtcCA9IHJlcXVpcmUoJy4vcmFtcC5jbGFzcy5qcycpXG5tb2R1bGUuZXhwb3J0cy5TaW5lID0gcmVxdWlyZSgnLi9zaW5lLmNsYXNzLmpzJylcbm1vZHVsZS5leHBvcnRzLkV4cFNpbmUgPSByZXF1aXJlKCcuL2V4cC1zaW5lLmNsYXNzLmpzJykiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIENvbnN0YW50IGV4dGVuZHMgR2VuZXJpY1NpZ25hbCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBjb25zdGFudCAgICAgb3V0cHV0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25zdGFudCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNvbnN0YW50ID0gY29uc3RhbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zdGFudFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICBjb25zdGFudCB2YWx1ZVxuICAgKi9cbiAgcmVzb2x2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdGFudFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uc3RhbnRcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdlbmVyaWNTaWduYWwgPSByZXF1aXJlKCcuL2dlbmVyaWMtc2lnbmFsLmNsYXNzLmpzJylcblxuY2xhc3MgRXhwU2luZSBleHRlbmRzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge051bWJlcn0gYW1wbGl0dWRlICAgICBhbXBsaXR1ZGUgb2Ygc2luZSB3YXZlXG4gICAqIEBwYXJhbSAge051bWJlcn0gZnJlcXVlbmN5ICAgICBmcmVxdWVuY3kgb2Ygc2luZSB3YXZlIFtIel1cbiAgICogQHBhcmFtICB7TnVtYmVyfSBkYW1waW5nICAgICAgIGRhbXBpbmcgY29lZmZpY2llbnQgb2Ygc2luZSB3YXZlIFtzLTFdXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGhhc2UgICAgICAgICBwaGFzZSBvZiBzaW5lIHdhdmUgW3JhZF1cbiAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXQgICAgICAgIG9yZGluYXRlIG9mZnNldFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHN0YXJ0VGltZSAgICAgc3RhcnQgdGltZSBbc11cbiAgICovXG4gIGNvbnN0cnVjdG9yKGFtcGxpdHVkZSwgZnJlcXVlbmN5LCBkYW1waW5nLCBwaGFzZSA9IDAsIG9mZnNldCA9IDAsIHN0YXJ0VGltZSA9IDApIHtcbiAgICBzdXBlcigpO1xuICAgIFsgdGhpcy5hbXBsaXR1ZGVcbiAgICAsIHRoaXMuZnJlcXVlbmN5XG4gICAgLCB0aGlzLmRhbXBpbmdcbiAgICAsIHRoaXMucGhhc2VcbiAgICAsIHRoaXMub2Zmc2V0XG4gICAgLCB0aGlzLnN0YXJ0VGltZSBdID0gW2FtcGxpdHVkZSwgZnJlcXVlbmN5LCBkYW1waW5nLCBwaGFzZSwgb2Zmc2V0LCBzdGFydFRpbWVdXG4gIH1cblxuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICAgdGltZSBwb2ludFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB2YWx1ZSBvZiB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHJlc29sdmUodGltZSkge1xuICAgIHJldHVybiB0aW1lIDwgdGhpcy5zdGFydFRpbWUgXG4gICAgICA/IHRoaXMub2Zmc2V0XG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5hbXBsaXR1ZGUqTWF0aC5leHAoLSh0aW1lLXRoaXMuc3RhcnRUaW1lKSp0aGlzLmRhbXBpbmcpXG4gICAgICAgICpNYXRoLnNpbigyKk1hdGguUEkqdGhpcy5mcmVxdWVuY3kqKHRpbWUtdGhpcy5zdGFydFRpbWUpK3RoaXMucGhhc2UpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFeHBTaW5lXG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRzXG4gICAqIEBwYXJhbSAge1tOdW1iZXJdfSB0aW1lICAgICAgcG9pbnRzXG4gICAqIEByZXR1cm4ge1tOdW1iZXJdfSAgICAgICBcbiAgICovXG4gIGdlbmVyYXRlKHRpbWVzKSB7XG4gICAgcmV0dXJuIHRpbWVzLm1hcCh0aW1lID0+IHRoaXMucmVzb2x2ZSh0aW1lKSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdlbmVyaWNTaWduYWwiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIFJhbXAgZXh0ZW5kcyBHZW5lcmljU2lnbmFsIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGhlaWdodCAgICAgICAgcmFtcCBoZWlnaHRcbiAgICogQHBhcmFtICB7TnVtYmVyfSBkdXJhdGlvbiAgICAgIHJhbXAgZHVyYXRpb25cbiAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXQgICAgICAgIHJhbXAgb2Zmc2V0XG4gICAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRUaW1lICAgICBzdGFydCB0aW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoZWlnaHQsIGR1cmF0aW9uLCBvZmZzZXQgPSAwLCBzdGFydFRpbWUgPSAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICBbIHRoaXMuaGVpZ2h0XG4gICAgLCB0aGlzLmR1cmF0aW9uXG4gICAgLCB0aGlzLm9mZnNldFxuICAgICwgdGhpcy5zdGFydFRpbWUgXSA9IFtoZWlnaHQsIGR1cmF0aW9uLCBvZmZzZXQsIHN0YXJ0VGltZV1cbiAgfVxuXG4gIC8qKlxuICAgKiDQoWFsY3VsYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGF0IGEgZ2l2ZW4gdGltZSBwb2ludFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWUgICAgICB0aW1lIHBvaW50XG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHZhbHVlIG9mIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgcmVzb2x2ZSh0aW1lKSB7XG4gICAgcmV0dXJuIHRpbWUgPCB0aGlzLnN0YXJ0VGltZSBcbiAgICAgID8gdGhpcy5vZmZzZXRcbiAgICAgIDogdGltZSA8ICh0aGlzLnN0YXJ0VGltZSArIHRoaXMuZHVyYXRpb24pXG4gICAgICAgID8gdGhpcy5vZmZzZXQgKyAodGltZSAtIHRoaXMuc3RhcnRUaW1lKSp0aGlzLmhlaWdodC90aGlzLmR1cmF0aW9uXG4gICAgICAgIDogdGhpcy5vZmZzZXQgKyB0aGlzLmhlaWdodFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmFtcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2VuZXJpY1NpZ25hbCA9IHJlcXVpcmUoJy4vZ2VuZXJpYy1zaWduYWwuY2xhc3MuanMnKVxuXG5jbGFzcyBTaW5lIGV4dGVuZHMgR2VuZXJpY1NpZ25hbCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBhbXBsaXR1ZGUgICAgIHNpbmUgYW1wbGl0dWRlXG4gICAqIEBwYXJhbSAge051bWJlcn0gZnJlcXVlbmN5ICAgICBzaW5lIGZyZXF1ZW5jeSBbSHpdXG4gICAqIEBwYXJhbSAge051bWJlcn0gcGhhc2UgICAgICAgICBzaW5lIHBoYXNlIFtyYWRdXG4gICAqIEBwYXJhbSAge051bWJlcn0gb2Zmc2V0ICAgICAgICBzaW5lIG9yZGluYXRlIG9mZnNldFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHN0YXJ0VGltZSAgICAgc3RhcnQgdGltZVxuICAgKi9cbiAgY29uc3RydWN0b3IoYW1wbGl0dWRlLCBmcmVxdWVuY3ksIHBoYXNlID0gMCwgb2Zmc2V0ID0gMCwgc3RhcnRUaW1lID0gMCkge1xuICAgIHN1cGVyKCk7XG4gICAgWyB0aGlzLmFtcGxpdHVkZVxuICAgICwgdGhpcy5mcmVxdWVuY3lcbiAgICAsIHRoaXMucGhhc2VcbiAgICAsIHRoaXMub2Zmc2V0XG4gICAgLCB0aGlzLnN0YXJ0VGltZSBdID0gW2FtcGxpdHVkZSwgZnJlcXVlbmN5LCBwaGFzZSwgb2Zmc2V0LCBzdGFydFRpbWVdXG4gIH1cblxuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICAgdGltZSBwb2ludFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB2YWx1ZSBvZiB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHJlc29sdmUodGltZSkge1xuICAgIHJldHVybiB0aW1lIDwgdGhpcy5zdGFydFRpbWUgXG4gICAgICA/IHRoaXMub2Zmc2V0XG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5hbXBsaXR1ZGUqTWF0aC5zaW4oMipNYXRoLlBJKnRoaXMuZnJlcXVlbmN5Kih0aW1lIC0gdGhpcy5zdGFydFRpbWUpICsgdGhpcy5waGFzZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbmUiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIFN0ZXAgZXh0ZW5kcyBHZW5lcmljU2lnbmFsIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGhlaWdodCAgICAgICAgc3RlcCBoZWlnaHRcbiAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXQgICAgICAgIHN0ZXAgb2Zmc2V0XG4gICAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRUaW1lICAgICBzdGFydCB0aW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoZWlnaHQsIG9mZnNldCA9IDAsIHN0YXJ0VGltZSA9IDApIHtcbiAgICBzdXBlcigpO1xuICAgIFsgdGhpcy5oZWlnaHRcbiAgICAsIHRoaXMub2Zmc2V0XG4gICAgLCB0aGlzLnN0YXJ0VGltZSBdID0gW2hlaWdodCwgb2Zmc2V0LCBzdGFydFRpbWVdXG4gIH1cblxuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRcbiAgICogQHBhcmFtICB7TnVtYmVyfSB0aW1lICAgICAgdGltZSBwb2ludFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICB2YWx1ZSBvZiB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHJlc29sdmUodGltZSkge1xuICAgIHJldHVybiB0aW1lIDwgdGhpcy5zdGFydFRpbWUgXG4gICAgICA/IHRoaXMub2Zmc2V0XG4gICAgICA6IHRoaXMub2Zmc2V0ICsgdGhpcy5oZWlnaHRcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0ZXBcbiJdfQ==
