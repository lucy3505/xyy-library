"use strict";

require("core-js/modules/es6.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _loading = _interopRequireDefault(require("./loading.less"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Loading = function Loading(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    styleName: "weui-mask_transparent"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    styleName: "weui-toast"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    styleName: "weui-loading weui-icon_toast"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    styleName: "weui-toast__content"
  }, "\u6570\u636E\u52A0\u8F7D\u4E2D")));
};

var _default = (0, _reactCssModules["default"])(Loading, _loading["default"], {
  allowMultiple: true
});

exports["default"] = _default;