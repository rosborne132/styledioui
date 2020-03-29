"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgArrowDown(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "arrow-down_svg__feather arrow-down_svg__feather-arrow-down"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M19 12l-7 7-7-7"
  }));
}

var _default = SvgArrowDown;
exports["default"] = _default;