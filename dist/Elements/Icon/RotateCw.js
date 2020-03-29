"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgRotateCw(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "rotate-cw_svg__feather rotate-cw_svg__feather-rotate-cw"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M23 4v6h-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.49 15a9 9 0 11-2.12-9.36L23 10"
  }));
}

var _default = SvgRotateCw;
exports["default"] = _default;