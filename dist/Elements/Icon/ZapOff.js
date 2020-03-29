"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgZapOff(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "zap-off_svg__feather zap-off_svg__feather-zap-off"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12.41 6.75L13 2l-2.43 2.92M18.57 12.91L21 10h-5.34M8 8l-5 6h9l-1 8 5-6M1 1l22 22"
  }));
}

var _default = SvgZapOff;
exports["default"] = _default;