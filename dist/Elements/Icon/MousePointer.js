"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgMousePointer(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "mouse-pointer_svg__feather mouse-pointer_svg__feather-mouse-pointer"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3zM13 13l6 6"
  }));
}

var _default = SvgMousePointer;
exports["default"] = _default;