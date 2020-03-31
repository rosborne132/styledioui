"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Social = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

var _default = {
  title: 'Icon',
  component: _.Twitter
};
exports["default"] = _default;

var Social = function Social() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_.Facebook, null), /*#__PURE__*/_react["default"].createElement(_.Github, null), /*#__PURE__*/_react["default"].createElement(_.Twitter, null));
};

exports.Social = Social;