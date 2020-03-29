"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgArrowUpLeft(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "arrow-up-left_svg__feather arrow-up-left_svg__feather-arrow-up-left"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 17L7 7M7 17V7h10"
  }));
}

var _default = SvgArrowUpLeft;
exports["default"] = _default;