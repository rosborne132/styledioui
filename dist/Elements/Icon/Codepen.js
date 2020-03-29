"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgCodepen(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "codepen_svg__feather codepen_svg__feather-codepen"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 8.5l-10 7-10-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 15.5l10-7 10 7M12 2v6.5"
  }));
}

var _default = SvgCodepen;
exports["default"] = _default;