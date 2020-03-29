"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgAirplay(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "airplay_svg__feather airplay_svg__feather-airplay"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15l5 6H7l5-6z"
  }));
}

var _default = SvgAirplay;
exports["default"] = _default;