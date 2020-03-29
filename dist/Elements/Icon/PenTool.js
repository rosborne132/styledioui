"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgPenTool(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "pen-tool_svg__feather pen-tool_svg__feather-pen-tool"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 19l7-7 3 3-7 7-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 11,
    cy: 11,
    r: 2
  }));
}

var _default = SvgPenTool;
exports["default"] = _default;