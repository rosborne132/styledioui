"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgShoppingCart(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "shopping-cart_svg__feather shopping-cart_svg__feather-shopping-cart"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 21,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 20,
    cy: 21,
    r: 1
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
  }));
}

var _default = SvgShoppingCart;
exports["default"] = _default;