"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgShuffle(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "shuffle_svg__feather shuffle_svg__feather-shuffle"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"
  }));
}

var _default = SvgShuffle;
exports["default"] = _default;