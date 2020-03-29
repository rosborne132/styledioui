"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgMoon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "moon_svg__feather moon_svg__feather-moon"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
  }));
}

var _default = SvgMoon;
exports["default"] = _default;