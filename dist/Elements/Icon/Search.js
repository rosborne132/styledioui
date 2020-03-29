"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgSearch(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "search_svg__feather search_svg__feather-search"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 11,
    cy: 11,
    r: 8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.35-4.35"
  }));
}

var _default = SvgSearch;
exports["default"] = _default;