"use strict";

require("core-js/modules/es6.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _disclaimer = _interopRequireDefault(require("./disclaimer.scss"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import closeIcon from "@/assets/images/close-icon.png";
var Disclaimer = function Disclaimer(props) {
  var isShowDisclaimer = props.isShowDisclaimer;

  var handleClose = function handleClose() {
    _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("div", null), document.getElementById("mask"));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    styleName: "disclaimer-wrap"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    styleName: "content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    styleName: "icon-wrap",
    onClick: handleClose
  }, /*#__PURE__*/_react["default"].createElement("div", {
    styelName: "icon"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    styleName: "title"
  }, "\u514D\u8D23\u58F0\u660E"), /*#__PURE__*/_react["default"].createElement("div", {
    styleName: "main"
  }, "\u514D\u8D23\u58F0\u660E\u514D\u8D23\u58F0\u660E\u514D\u8D23\u58F0\u660E\u514D\u8D23\u58F0\u660E")));
};

var _default = (0, _reactCssModules["default"])(Disclaimer, _disclaimer["default"], {
  allowMultiple: true
});

exports["default"] = _default;