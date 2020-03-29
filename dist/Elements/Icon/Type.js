"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgType(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "type_svg__feather type_svg__feather-type"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 7V4h16v3M9 20h6M12 4v16"
  }));
}

var _default = SvgType;
exports["default"] = _default;