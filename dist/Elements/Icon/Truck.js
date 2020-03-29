"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgTruck(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "truck_svg__feather truck_svg__feather-truck"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 5.5,
    cy: 18.5,
    r: 2.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 18.5,
    cy: 18.5,
    r: 2.5
  }));
}

var _default = SvgTruck;
exports["default"] = _default;