"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgUserX(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "user-x_svg__feather user-x_svg__feather-user-x"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 8.5,
    cy: 7,
    r: 4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 8l5 5M23 8l-5 5"
  }));
}

var _default = SvgUserX;
exports["default"] = _default;