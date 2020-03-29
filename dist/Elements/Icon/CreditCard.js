"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgCreditCard(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "credit-card_svg__feather credit-card_svg__feather-credit-card"
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 1,
    y: 4,
    width: 22,
    height: 16,
    rx: 2,
    ry: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 10h22"
  }));
}

var _default = SvgCreditCard;
exports["default"] = _default;