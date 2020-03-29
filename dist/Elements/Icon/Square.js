"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgSquare(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "square_svg__feather square_svg__feather-square"
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 3,
    y: 3,
    width: 18,
    height: 18,
    rx: 2,
    ry: 2
  }));
}

var _default = SvgSquare;
exports["default"] = _default;