"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgSmartphone(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "smartphone_svg__feather smartphone_svg__feather-smartphone"
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 5,
    y: 2,
    width: 14,
    height: 20,
    rx: 2,
    ry: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18h.01"
  }));
}

var _default = SvgSmartphone;
exports["default"] = _default;