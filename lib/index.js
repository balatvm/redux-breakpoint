'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakpointReducer = undefined;

var _breakPointReducer = require('./breakPointReducer');

var _breakPointReducer2 = _interopRequireDefault(_breakPointReducer);

var _debounce = require('./debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Initial values
var storeRef = null;
var debounceDelay = 100;
var debounce = true;

//Default Resize listener
function onResize() {
  storeRef.dispatch({
    type: 'BREAKPOINT_CHANGE'

  });
}

function syncBreakpointWithStore(store, config) {
  storeRef = store;
  if (config) {
    if (config.debounce != undefined) {

      debounce = config.debounce;
    }
    if (config.debounceDelay != undefined) {
      debounceDelay = config.debounceDelay;
    }
  }

  subscribe(onResize);
}

function subscribe(callback) {

  if (debounce) {
    callback = (0, _debounce2.default)(callback, debounceDelay);
  }
  window.addEventListener('resize', callback);
}

exports.default = syncBreakpointWithStore;
exports.breakpointReducer = _breakPointReducer2.default;