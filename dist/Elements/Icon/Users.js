"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgUsers(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "users_svg__feather users_svg__feather-users"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 7,
    r: 4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
  }));
}

var _default = SvgUsers;
exports["default"] = _default;