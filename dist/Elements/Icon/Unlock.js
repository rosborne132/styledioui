"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgUnlock(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "unlock_svg__feather unlock_svg__feather-unlock"
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 3,
    y: 11,
    width: 18,
    height: 11,
    rx: 2,
    ry: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 019.9-1"
  }));
}

var _default = SvgUnlock;
exports["default"] = _default;