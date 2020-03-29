"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgCornerDownLeft(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "corner-down-left_svg__feather corner-down-left_svg__feather-corner-down-left"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 10l-5 5 5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 4v7a4 4 0 01-4 4H4"
  }));
}

var _default = SvgCornerDownLeft;
exports["default"] = _default;