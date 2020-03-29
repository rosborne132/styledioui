"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgFastForward(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "fast-forward_svg__feather fast-forward_svg__feather-fast-forward"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13 19l9-7-9-7v14zM2 19l9-7-9-7v14z"
  }));
}

var _default = SvgFastForward;
exports["default"] = _default;