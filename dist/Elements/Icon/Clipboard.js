"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgClipboard(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "clipboard_svg__feather clipboard_svg__feather-clipboard"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 8,
    y: 2,
    width: 8,
    height: 4,
    rx: 1,
    ry: 1
  }));
}

var _default = SvgClipboard;
exports["default"] = _default;