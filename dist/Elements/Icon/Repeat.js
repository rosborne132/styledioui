"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgRepeat(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "repeat_svg__feather repeat_svg__feather-repeat"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 1l4 4-4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 13v2a4 4 0 01-4 4H3"
  }));
}

var _default = SvgRepeat;
exports["default"] = _default;