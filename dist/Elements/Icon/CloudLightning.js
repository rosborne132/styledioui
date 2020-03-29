"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgCloudLightning(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "cloud-lightning_svg__feather cloud-lightning_svg__feather-cloud-lightning"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 11l-4 6h6l-4 6"
  }));
}

var _default = SvgCloudLightning;
exports["default"] = _default;