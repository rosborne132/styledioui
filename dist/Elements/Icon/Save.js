"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgSave(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "save_svg__feather save_svg__feather-save"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-8H7v8M7 3v5h8"
  }));
}

var _default = SvgSave;
exports["default"] = _default;