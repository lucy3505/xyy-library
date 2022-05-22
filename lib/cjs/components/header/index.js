"use strict";

require("core-js/modules/es6.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;

var _react = _interopRequireDefault(require("react"));

require("./index.scss");

var _button = _interopRequireDefault(require("../button/button.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Header() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "app-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "left"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "right"
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], null)));
}