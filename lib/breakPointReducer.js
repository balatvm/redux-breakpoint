'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _breakpointCalculator = require('./breakpointCalculator');

var _breakpointCalculator2 = _interopRequireDefault(_breakpointCalculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Initial State

var initialState = (0, _breakpointCalculator2.default)();

var breakpointReducer = function breakpointReducer() {
   var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
   var action = arguments[1];


   switch (action.type) {
      case 'BREAKPOINT_CHANGE':

         var newState = (0, _breakpointCalculator2.default)();
         return newState;

      default:
         return state;
   }
};

exports.default = breakpointReducer;