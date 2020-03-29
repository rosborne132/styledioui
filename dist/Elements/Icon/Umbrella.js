"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgUmbrella(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "umbrella_svg__feather umbrella_svg__feather-umbrella"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7"
  }));
}

var _default = SvgUmbrella;
exports["default"] = _default;