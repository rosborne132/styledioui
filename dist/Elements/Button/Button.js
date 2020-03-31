"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var React = _interopRequireWildcard(require("react"));

var Button = function Button(_ref) {
  var buttonText = _ref.buttonText,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick
  }, buttonText);
};

exports.Button = Button;