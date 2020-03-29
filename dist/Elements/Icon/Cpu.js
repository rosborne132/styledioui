"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgCpu(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "cpu_svg__feather cpu_svg__feather-cpu"
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 4,
    y: 4,
    width: 16,
    height: 16,
    rx: 2,
    ry: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"
  }));
}

var _default = SvgCpu;
exports["default"] = _default;