"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgVoicemail(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "voicemail_svg__feather voicemail_svg__feather-voicemail"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 5.5,
    cy: 11.5,
    r: 4.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 18.5,
    cy: 11.5,
    r: 4.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 16h13"
  }));
}

var _default = SvgVoicemail;
exports["default"] = _default;