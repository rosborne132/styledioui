"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestButton = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _Button = require("./Button");

var _default = {
  title: 'Button',
  component: _Button.Button
};
exports["default"] = _default;

var TestButton = function TestButton() {
  return /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    buttonText: "Test Button",
    onClick: (0, _addonActions.action)('clicked')
  });
};

exports.TestButton = TestButton;