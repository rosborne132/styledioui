"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgChevronsUp(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "chevrons-up_svg__feather chevrons-up_svg__feather-chevrons-up"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 11l-5-5-5 5M17 18l-5-5-5 5"
  }));
}

var _default = SvgChevronsUp;
exports["default"] = _default;