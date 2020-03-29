"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgAlignLeft(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "align-left_svg__feather align-left_svg__feather-align-left"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 10H3M21 6H3M21 14H3M17 18H3"
  }));
}

var _default = SvgAlignLeft;
exports["default"] = _default;