"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgCheckCircle(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "check-circle_svg__feather check-circle_svg__feather-check-circle"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M22 11.08V12a10 10 0 11-5.93-9.14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 4L12 14.01l-3-3"
  }));
}

var _default = SvgCheckCircle;
exports["default"] = _default;