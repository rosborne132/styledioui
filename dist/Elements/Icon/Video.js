"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgVideo(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "video_svg__feather video_svg__feather-video"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M23 7l-7 5 7 5V7z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 1,
    y: 5,
    width: 15,
    height: 14,
    rx: 2,
    ry: 2
  }));
}

var _default = SvgVideo;
exports["default"] = _default;