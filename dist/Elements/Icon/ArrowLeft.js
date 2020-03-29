"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgArrowLeft(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "arrow-left_svg__feather arrow-left_svg__feather-arrow-left"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M12 19l-7-7 7-7"
  }));
}

var _default = SvgArrowLeft;
exports["default"] = _default;