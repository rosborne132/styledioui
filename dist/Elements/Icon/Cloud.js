"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgCloud(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "cloud_svg__feather cloud_svg__feather-cloud"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"
  }));
}

var _default = SvgCloud;
exports["default"] = _default;