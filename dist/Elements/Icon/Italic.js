"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgItalic(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "italic_svg__feather italic_svg__feather-italic"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 4h-9M14 20H5M15 4L9 20"
  }));
}

var _default = SvgItalic;
exports["default"] = _default;