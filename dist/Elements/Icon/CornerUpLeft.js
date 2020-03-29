"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgCornerUpLeft(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "corner-up-left_svg__feather corner-up-left_svg__feather-corner-up-left"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 14L4 9l5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20v-7a4 4 0 00-4-4H4"
  }));
}

var _default = SvgCornerUpLeft;
exports["default"] = _default;