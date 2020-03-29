"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgSpeaker(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "speaker_svg__feather speaker_svg__feather-speaker"
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: 4,
    y: 2,
    width: 16,
    height: 20,
    rx: 2,
    ry: 2
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 14,
    r: 4
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6h.01"
  }));
}

var _default = SvgSpeaker;
exports["default"] = _default;