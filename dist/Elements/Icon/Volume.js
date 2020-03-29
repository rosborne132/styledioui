"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgVolume(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "volume_svg__feather volume_svg__feather-volume"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11 5L6 9H2v6h4l5 4V5z"
  }));
}

var _default = SvgVolume;
exports["default"] = _default;