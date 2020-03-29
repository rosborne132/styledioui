"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgAlignRight(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "align-right_svg__feather align-right_svg__feather-align-right"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 10H7M21 6H3M21 14H3M21 18H7"
  }));
}

var _default = SvgAlignRight;
exports["default"] = _default;