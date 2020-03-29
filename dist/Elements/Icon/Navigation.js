"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgNavigation(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "navigation_svg__feather navigation_svg__feather-navigation"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3 11l19-9-9 19-2-8-8-2z"
  }));
}

var _default = SvgNavigation;
exports["default"] = _default;