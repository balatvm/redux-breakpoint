'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getBreakPoints;

var _constants = require('./constants.js');

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getBreakPoints() {
    var isExtraSmall = false,
        isSmall = false,
        isMedium = false,
        isLarge = false,
        isExtraLarge = false,
        width = window.innerWidth,
        height = window.innerHeight;

    if (width < constants.XS_UPPER) {
        isExtraSmall = true;
    } else if (width < constants.SM_UPPER) {
        isSmall = true;
    } else if (width < constants.MD_UPPER) {
        isMedium = true;
    } else if (width < constants.LG_UPPER) {
        isLarge = true;
    } else isExtraLarge = true;

    return {
        width: width,
        height: height,
        isExtraSmall: isExtraSmall,
        isSmall: isSmall,
        isMedium: isMedium,
        isLarge: isLarge,
        isExtraLarge: isExtraLarge
    };
}