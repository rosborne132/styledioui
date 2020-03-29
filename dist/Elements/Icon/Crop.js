"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgCrop(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "crop_svg__feather crop_svg__feather-crop"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.13 1L6 16a2 2 0 002 2h15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 6.13L16 6a2 2 0 012 2v15"
  }));
}

var _default = SvgCrop;
exports["default"] = _default;