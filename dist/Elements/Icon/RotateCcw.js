"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgRotateCcw(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "rotate-ccw_svg__feather rotate-ccw_svg__feather-rotate-ccw"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M1 4v6h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.51 15a9 9 0 102.13-9.36L1 10"
  }));
}

var _default = SvgRotateCcw;
exports["default"] = _default;