"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgBluetooth(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "bluetooth_svg__feather bluetooth_svg__feather-bluetooth"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"
  }));
}

var _default = SvgBluetooth;
exports["default"] = _default;