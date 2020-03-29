"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgImage(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "image_svg__feather image_svg__feather-image"
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 3,
    y: 3,
    width: 18,
    height: 18,
    rx: 2,
    ry: 2
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 8.5,
    cy: 8.5,
    r: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 15l-5-5L5 21"
  }));
}

var _default = SvgImage;
exports["default"] = _default;