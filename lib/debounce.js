"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var debounce = function debounce(func, delay) {
  var inDebounce = undefined;
  return function () {
    var context = this,
        args = arguments;
    clearTimeout(inDebounce);
    return inDebounce = setTimeout(function () {
      return func.apply(context, args);
    }, delay);
  };
};

exports.default = debounce;