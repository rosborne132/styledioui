"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgWatch(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "watch_svg__feather watch_svg__feather-watch"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v3l1.5 1.5M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83"
  }));
}

var _default = SvgWatch;
exports["default"] = _default;