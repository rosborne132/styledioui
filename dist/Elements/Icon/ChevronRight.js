"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgChevronRight(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "chevron-right_svg__feather chevron-right_svg__feather-chevron-right"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M9 18l6-6-6-6"
  }));
}

var _default = SvgChevronRight;
exports["default"] = _default;