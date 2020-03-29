"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgRss(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "rss_svg__feather rss_svg__feather-rss"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 11a9 9 0 019 9M4 4a16 16 0 0116 16"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 5,
    cy: 19,
    r: 1
  }));
}

var _default = SvgRss;
exports["default"] = _default;