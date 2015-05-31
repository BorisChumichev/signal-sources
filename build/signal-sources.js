(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.signalSources = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports.GenericSignal = require('./generic-signal.class.js');
module.exports.Constant = require('./constant.class.js');
module.exports.Sine = require('./sine.class.js');

},{"./constant.class.js":2,"./generic-signal.class.js":3,"./sine.class.js":4}],2:[function(require,module,exports){
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

},{"./generic-signal.class.js":3}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9tYWluLmpzIiwiL1VzZXJzL2JvcmlzYy9Qcm9qZWN0cy9zaWduYWwtc291cmNlcy9zcmMvY29uc3RhbnQuY2xhc3MuanMiLCIvVXNlcnMvYm9yaXNjL1Byb2plY3RzL3NpZ25hbC1zb3VyY2VzL3NyYy9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcyIsIi9Vc2Vycy9ib3Jpc2MvUHJvamVjdHMvc2lnbmFsLXNvdXJjZXMvc3JjL3NpbmUuY2xhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ25FLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBOzs7QUNGaEQsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUE7O0lBRWxELFFBQVE7Ozs7OztBQUtELFdBTFAsUUFBUSxDQUtBLFFBQVEsRUFBRTswQkFMbEIsUUFBUTs7QUFNViwrQkFORSxRQUFRLDZDQU1IO0FBQ1AsUUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7R0FDekI7O1lBUkcsUUFBUTs7ZUFBUixRQUFROzs7Ozs7O1dBY0wsbUJBQUc7QUFDUixhQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7S0FDckI7OztTQWhCRyxRQUFRO0dBQVMsYUFBYTs7QUFtQnBDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFBOzs7QUN2QnpCLFlBQVksQ0FBQzs7Ozs7O0lBRVAsYUFBYTtXQUFiLGFBQWE7MEJBQWIsYUFBYTs7O2VBQWIsYUFBYTs7Ozs7Ozs7V0FNVCxrQkFBQyxLQUFLLEVBQUU7OztBQUNkLGFBQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7ZUFBSSxNQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUM7T0FBQSxDQUFDLENBQUE7S0FDN0M7OztTQVJHLGFBQWE7OztBQVduQixNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQTs7O0FDYjlCLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFBOztJQUVsRCxJQUFJOzs7Ozs7Ozs7O0FBU0csV0FUUCxJQUFJLENBU0ksU0FBUyxFQUFFLFNBQVMsRUFBd0M7UUFBdEMsS0FBSyxnQ0FBRyxDQUFDO1FBQUUsTUFBTSxnQ0FBRyxDQUFDO1FBQUUsU0FBUyxnQ0FBRyxDQUFDOzswQkFUbEUsSUFBSTs7QUFVTiwrQkFWRSxJQUFJLDZDQVVFO2VBS2EsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDO0FBSm5FLFFBQUksQ0FBQyxTQUFTO0FBQ2QsUUFBSSxDQUFDLFNBQVM7QUFDZCxRQUFJLENBQUMsS0FBSztBQUNWLFFBQUksQ0FBQyxNQUFNO0FBQ1gsUUFBSSxDQUFDLFNBQVM7R0FDakI7O1lBaEJHLElBQUk7O2VBQUosSUFBSTs7Ozs7Ozs7V0F1QkQsaUJBQUMsSUFBSSxFQUFFO0FBQ1osYUFBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FDeEIsSUFBSSxDQUFDLE1BQU0sR0FDWCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsU0FBUyxJQUFFLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBLEFBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDekc7OztTQTNCRyxJQUFJO0dBQVMsYUFBYTs7QUE4QmhDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzLkdlbmVyaWNTaWduYWwgPSByZXF1aXJlKCcuL2dlbmVyaWMtc2lnbmFsLmNsYXNzLmpzJylcbm1vZHVsZS5leHBvcnRzLkNvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudC5jbGFzcy5qcycpXG5tb2R1bGUuZXhwb3J0cy5TaW5lID0gcmVxdWlyZSgnLi9zaW5lLmNsYXNzLmpzJykiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIENvbnN0YW50IGV4dGVuZHMgR2VuZXJpY1NpZ25hbCB7XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBjb25zdGFudCAgICAgb3V0cHV0IHZhbHVlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25zdGFudCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNvbnN0YW50ID0gY29uc3RhbnRcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb25zdGFudFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICBjb25zdGFudCB2YWx1ZVxuICAgKi9cbiAgcmVzb2x2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdGFudFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uc3RhbnQiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEdlbmVyaWNTaWduYWwge1xuICAvKipcbiAgICog0KFhbGN1bGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBhdCBhIGdpdmVuIHRpbWUgcG9pbnRzXG4gICAqIEBwYXJhbSAge1tOdW1iZXJdfSB0aW1lICAgICAgcG9pbnRzXG4gICAqIEByZXR1cm4ge1tOdW1iZXJdfSAgICAgICBcbiAgICovXG4gIGdlbmVyYXRlKHRpbWVzKSB7XG4gICAgcmV0dXJuIHRpbWVzLm1hcCh0aW1lID0+IHRoaXMucmVzb2x2ZSh0aW1lKSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdlbmVyaWNTaWduYWwiLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZW5lcmljU2lnbmFsID0gcmVxdWlyZSgnLi9nZW5lcmljLXNpZ25hbC5jbGFzcy5qcycpXG5cbmNsYXNzIFNpbmUgZXh0ZW5kcyBHZW5lcmljU2lnbmFsIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IGFtcGxpdHVkZSAgICAgc2luZSBhbXBsaXR1ZGVcbiAgICogQHBhcmFtICB7TnVtYmVyfSBmcmVxdWVuY3kgICAgIHNpbmUgZnJlcXVlbmN5XG4gICAqIEBwYXJhbSAge051bWJlcn0gcGhhc2UgICAgICAgICBzaW5lIHBoYXNlIG9mZnNldFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG9mZnNldCAgICAgICAgc2luZSBvcmRpbmF0ZSBvZmZzZXRcbiAgICogQHBhcmFtICB7TnVtYmVyfSBzdGFydFRpbWUgICAgIHN0YXJ0IHRpbWVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFtcGxpdHVkZSwgZnJlcXVlbmN5LCBwaGFzZSA9IDAsIG9mZnNldCA9IDAsIHN0YXJ0VGltZSA9IDApIHtcbiAgICBzdXBlcigpO1xuICAgIFsgdGhpcy5hbXBsaXR1ZGVcbiAgICAsIHRoaXMuZnJlcXVlbmN5XG4gICAgLCB0aGlzLnBoYXNlXG4gICAgLCB0aGlzLm9mZnNldFxuICAgICwgdGhpcy5zdGFydFRpbWUgXSA9IFthbXBsaXR1ZGUsIGZyZXF1ZW5jeSwgcGhhc2UsIG9mZnNldCwgc3RhcnRUaW1lXVxuICB9XG5cbiAgLyoqXG4gICAqINChYWxjdWxhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gYXQgYSBnaXZlbiB0aW1lIHBvaW50XG4gICAqIEBwYXJhbSAge051bWJlcn0gdGltZSAgICAgIHRpbWUgcG9pbnRcbiAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgdmFsdWUgb2YgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICByZXNvbHZlKHRpbWUpIHtcbiAgICByZXR1cm4gdGltZSA8IHRoaXMuc3RhcnRUaW1lIFxuICAgICAgPyB0aGlzLm9mZnNldFxuICAgICAgOiB0aGlzLm9mZnNldCArIHRoaXMuYW1wbGl0dWRlKk1hdGguc2luKDIqTWF0aC5QSSp0aGlzLmZyZXF1ZW5jeSoodGltZSAtIHRoaXMuc3RhcnRUaW1lKSArIHRoaXMucGhhc2UpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaW5lIl19
