(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.signalSources = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports.GenericSignal = require('./generic-signal.class.js');
module.exports.Constant = require('./constant.class.js');
module.exports.Step = require('./step.class.js');
module.exports.Ramp = require('./ramp.class.js');
module.exports.Sine = require('./sine.class.js');

},{"./constant.class.js":2,"./generic-signal.class.js":3,"./ramp.class.js":4,"./sine.class.js":5,"./step.class.js":6}],2:[function(require,module,exports){
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

},{"./generic-signal.class.js":3}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"./generic-signal.class.js":3}],5:[function(require,module,exports){
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
   * @param  {Number} frequency     sine frequency
   * @param  {Number} phase         sine phase offset
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

},{"./generic-signal.class.js":3}],6:[function(require,module,exports){
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

},{"./generic-signal.class.js":3}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9tYWluLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvY29uc3RhbnQuY2xhc3MuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcyIsIi9Vc2Vycy9ib3Jpc2MvUHJvamVjdHMvc2lnbmFsLXNvdXJjZXMvc3JjL3JhbXAuY2xhc3MuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9zaW5lLmNsYXNzLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvc3RlcC5jbGFzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUE7QUFDbkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUE7QUFDeEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUE7OztBQ0poRCxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQTs7SUFFbEQsUUFBUTs7Ozs7O0FBS0QsV0FMUCxRQUFRLENBS0Es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QUFDLFNBQVMsSUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQSxBQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3pHOzs7U0EzQkcsSUFBSTtHQUFTLGFBQWE7O0FBOEJoQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTs7O0FDbENyQixZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQTs7SUFFbEQsSUFBSTs7Ozs7Ozs7QUFPRyxXQVBQLElBQUksQ0FPSSxNQUFNLEVBQTZCO1FBQTNCLE1BQU0sZ0NBQUcsQ0FBQztRQUFFLFNBQVMsZ0NBQUcsQ0FBQzs7MEJBUHpDLElBQUk7O0FBUU4sK0JBUkUsSUFBSSw2Q0FRRTtlQUdhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7QUFGOUMsUUFBSSxDQUFDLE1BQU07QUFDWCxRQUFJLENBQUMsTUFBTTtBQUNYLFFBQUksQ0FBQyxTQUFTO0dBQ2pCOztZQVpHLElBQUk7O2VBQUosSUFBSTs7Ozs7Ozs7V0FtQkQsaUJBQUMsSUFBSSxFQUFFO0FBQ1osYUFBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FDeEIsSUFBSSxDQUFDLE1BQU0sR0FDWCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7S0FDOUI7OztTQXZCRyxJQUFJO0dBQVMsYUFBYTs7QUEwQmhDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzLkdlbmVyaWNTaWduYWwgPSByZXF1aXJlKCcuL2dlbmVyaWMtc2lnbmFsLmNsYXNzLmpzJylcbm1vZHVsZS5leHBvcnRzLkNvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudC5jbGFzcy5qcycpXG5tb2R1bGUuZXhwb3J0cy5TdGVwID0gcmVxdWlyZSgnLi9zdGVwLmNsYXNzLmpzJylcbm1vZHVsZS5leHBvcnRzLlJhbXAgPSByZXF1aXJlKCcuL3JhbXAuY2xhc3MuanMnKVxubW9kdWxlLmV4cG9ydHMuU2luZSA9IHJlcXVpcmUoJy4vc2luZS5jbGFzcy5qcycpIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2VuZXJpY1NpZ25hbCA9IHJlcXVpcmUoJy4vZ2VuZXJpYy1zaWduYWwuY2xhc3MuanMnKVxuXG5jbGFzcyBDb25zdGFudCBleHRlbmRzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge051bWJlcn0gY29uc3RhbnQgICAgIG91dHB1dCB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uc3RhbnQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5jb25zdGFudCA9IGNvbnN0YW50XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29uc3RhbnRcbiAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgY29uc3RhbnQgdmFsdWVcbiAgICovXG4gIHJlc29sdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RhbnRcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnN0YW50XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRzXG4gICAqIEBwYXJhbSAge1tOdW1iZXJdfSB0aW1lICAgICAgcG9pbnRzXG4gICAqIEByZXR1cm4ge1tOdW1iZXJdfSAgICAgICBcbiAgICovXG4gIGdlbmVyYXRlKHRpbWVzKSB7XG4gICAgcmV0dXJuIHRpbWVzLm1hcCh0aW1lID0+IHRoaXMucmVzb2x2ZSh0aW1lKSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdlbmVyaWNTaWduYWwiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIFJhbXAgZXh0ZW5kcyBHZW5lcmljU2lnbmFsIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGhlaWdodCAgICAgICAgcmFtcCBoZWlnaHRcbiAgICogQHBhcmFtICB7TnVtYmVyfSBkdXJhdGlvbiAgICAgIHJhbXAgZHVyYXRpb25cbiAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXQgICAgICAgIHJhbXAgb2Zmc2V0XG4gICAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRUaW1lICAgICBzdGFydCB0aW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoZWlnaHQsIGR1cmF0aW9uLCBvZmZzZXQgPSAwLCBzdGFydFRpbWUgPSAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICBbIHRoaXMuaGVpZ2h0XG4gICAgLCB0aGlzLmR1cmF0aW9uXG4gICAgLCB0aGlzLm9mZnNldFxuICAgICwgdGhpcy5zdGFydFRpbWUgXSA9IFtoZWlnaHQsIGR1cmF0aW9uLCBvZmZzZXQsIHN0YXJ0VGltZV1cbiAgfVxuXG4gIC8qKlxuICAgKiDQoWFsY3VsYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGF0IGEgZ2l2ZW4gdGltZSBwb2ludFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWUgICAgICB0aW1lIHBvaW50XG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHZhbHVlIG9mIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgcmVzb2x2ZSh0aW1lKSB7XG4gICAgcmV0dXJuIHRpbWUgPCB0aGlzLnN0YXJ0VGltZSBcbiAgICAgID8gdGhpcy5vZmZzZXRcbiAgICAgIDogdGltZSA8ICh0aGlzLnN0YXJ0VGltZSArIHRoaXMuZHVyYXRpb24pXG4gICAgICAgID8gdGhpcy5vZmZzZXQgKyAodGltZSAtIHRoaXMuc3RhcnRUaW1lKSp0aGlzLmhlaWdodC90aGlzLmR1cmF0aW9uXG4gICAgICAgIDogdGhpcy5vZmZzZXQgKyB0aGlzLmhlaWdodFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmFtcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2VuZXJpY1NpZ25hbCA9IHJlcXVpcmUoJy4vZ2VuZXJpYy1zaWduYWwuY2xhc3MuanMnKVxuXG5jbGFzcyBTaW5lIGV4dGVuZHMgR2VuZXJpY1NpZ25hbCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBhbXBsaXR1ZGUgICAgIHNpbmUgYW1wbGl0dWRlXG4gICAqIEBwYXJhbSAge051bWJlcn0gZnJlcXVlbmN5ICAgICBzaW5lIGZyZXF1ZW5jeVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHBoYXNlICAgICAgICAgc2luZSBwaGFzZSBvZmZzZXRcbiAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXQgICAgICAgIHNpbmUgb3JkaW5hdGUgb2Zmc2V0XG4gICAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRUaW1lICAgICBzdGFydCB0aW1lXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhbXBsaXR1ZGUsIGZyZXF1ZW5jeSwgcGhhc2UgPSAwLCBvZmZzZXQgPSAwLCBzdGFydFRpbWUgPSAwKSB7XG4gICAgc3VwZXIoKTtcbiAgICBbIHRoaXMuYW1wbGl0dWRlXG4gICAgLCB0aGlzLmZyZXF1ZW5jeVxuICAgICwgdGhpcy5waGFzZVxuICAgICwgdGhpcy5vZmZzZXRcbiAgICAsIHRoaXMuc3RhcnRUaW1lIF0gPSBbYW1wbGl0dWRlLCBmcmVxdWVuY3ksIHBoYXNlLCBvZmZzZXQsIHN0YXJ0VGltZV1cbiAgfVxuXG4gIC8qKlxuICAgKiDQoWFsY3VsYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGF0IGEgZ2l2ZW4gdGltZSBwb2ludFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWUgICAgICB0aW1lIHBvaW50XG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHZhbHVlIG9mIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgcmVzb2x2ZSh0aW1lKSB7XG4gICAgcmV0dXJuIHRpbWUgPCB0aGlzLnN0YXJ0VGltZSBcbiAgICAgID8gdGhpcy5vZmZzZXRcbiAgICAgIDogdGhpcy5vZmZzZXQgKyB0aGlzLmFtcGxpdHVkZSpNYXRoLnNpbigyKk1hdGguUEkqdGhpcy5mcmVxdWVuY3kqKHRpbWUgLSB0aGlzLnN0YXJ0VGltZSkgKyB0aGlzLnBoYXNlKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2luZSIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdlbmVyaWNTaWduYWwgPSByZXF1aXJlKCcuL2dlbmVyaWMtc2lnbmFsLmNsYXNzLmpzJylcblxuY2xhc3MgU3RlcCBleHRlbmRzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge051bWJlcn0gaGVpZ2h0ICAgICAgICBzdGVwIGhlaWdodFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG9mZnNldCAgICAgICAgc3RlcCBvZmZzZXRcbiAgICogQHBhcmFtICB7TnVtYmVyfSBzdGFydFRpbWUgICAgIHN0YXJ0IHRpbWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhlaWdodCwgb2Zmc2V0ID0gMCwgc3RhcnRUaW1lID0gMCkge1xuICAgIHN1cGVyKCk7XG4gICAgWyB0aGlzLmhlaWdodFxuICAgICwgdGhpcy5vZmZzZXRcbiAgICAsIHRoaXMuc3RhcnRUaW1lIF0gPSBbaGVpZ2h0LCBvZmZzZXQsIHN0YXJ0VGltZV1cbiAgfVxuXG4gIC8qKlxuICAgKiDQoWFsY3VsYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIGF0IGEgZ2l2ZW4gdGltZSBwb2ludFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRpbWUgICAgICB0aW1lIHBvaW50XG4gICAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgIHZhbHVlIG9mIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgcmVzb2x2ZSh0aW1lKSB7XG4gICAgcmV0dXJuIHRpbWUgPCB0aGlzLnN0YXJ0VGltZSBcbiAgICAgID8gdGhpcy5vZmZzZXRcbiAgICAgIDogdGhpcy5vZmZzZXQgKyB0aGlzLmhlaWdodFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RlcFxuIl19
