"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgChevronUp(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "chevron-up_svg__feather chevron-up_svg__feather-chevron-up"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 15l-6-6-6 6"
  }));
}

var _default = SvgChevronUp;
exports["default"] = _default;