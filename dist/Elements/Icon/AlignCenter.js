"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgAlignCenter(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "align-center_svg__feather align-center_svg__feather-align-center"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 10H6M21 6H3M21 14H3M18 18H6"
  }));
}

var _default = SvgAlignCenter;
exports["default"] = _default;