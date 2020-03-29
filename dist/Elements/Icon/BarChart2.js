"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgBarChart2(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "bar-chart-2_svg__feather bar-chart-2_svg__feather-bar-chart-2"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M18 20V10M12 20V4M6 20v-6"
  }));
}

var _default = SvgBarChart2;
exports["default"] = _default;