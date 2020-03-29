"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgCornerRightUp(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "corner-right-up_svg__feather corner-right-up_svg__feather-corner-right-up"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M10 9l5-5 5 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20h7a4 4 0 004-4V4"
  }));
}

var _default = SvgCornerRightUp;
exports["default"] = _default;