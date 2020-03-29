"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgChevronLeft(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "chevron-left_svg__feather chevron-left_svg__feather-chevron-left"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6"
  }));
}

var _default = SvgChevronLeft;
exports["default"] = _default;