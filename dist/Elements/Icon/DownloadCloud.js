"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function SvgDownloadCloud(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "download-cloud_svg__feather download-cloud_svg__feather-download-cloud"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8 17l4 4 4-4M12 12v9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"
  }));
}

var _default = SvgDownloadCloud;
exports["default"] = _default;