"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgLayout(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "layout_svg__feather layout_svg__feather-layout"
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 3,
    y: 3,
    width: 18,
    height: 18,
    rx: 2,
    ry: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M9 21V9"
  }));
}

var _default = SvgLayout;
exports["default"] = _default;