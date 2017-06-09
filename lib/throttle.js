"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var throttled = false;

function throttleIt(callback) {
  return function () {
    if (!throttled) {
      // actual callback action
      callback();
      // we're throttled!
      throttled = true;
      // set a timeout to un-throttle
      setTimeout(function () {
        throttled = false;
      }, 70);
    }
  };
};

exports.throttleIt = throttleIt;