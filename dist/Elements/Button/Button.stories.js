"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inaccessible = exports.TestButton = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonA11y = require("@storybook/addon-a11y");

var _Button = require("./Button");

var _default = {
  component: _Button.Button,
  decorators: [_addonA11y.withA11y],
  title: 'Button'
};
exports["default"] = _default;

var TestButton = function TestButton() {
  return /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    buttonText: "Test Button",
    onClick: (0, _addonActions.action)('clicked')
  });
};

exports.TestButton = TestButton;

var inaccessible = function inaccessible() {
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      backgroundColor: 'red',
      color: 'darkRed'
    }
  }, "Inaccessible button");
};

exports.inaccessible = inaccessible;