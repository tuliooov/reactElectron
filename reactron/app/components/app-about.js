"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AppAbout;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require('electron'),
    shell = _require.shell;

function AppAbout(props) {
  var appName = require('../../package.json').name;

  var appDescription = require('../../package.json').description;

  var appVersion = require('../../package.json').version;

  var appLicense = require('../../package.json').license;

  var appDepends = require('../../package.json').dependencies;

  function showDepends() {
    var depends = JSON.stringify(appDepends);
    depends = depends.substr(1, depends.length - 2);
    return depends.replace(/\,/g, "\n");
  }

  function openLink(link) {
    shell.openExternal(link);
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    align: "right"
  }, /*#__PURE__*/_react["default"].createElement("b", null, "source:"), " app-about.js"), /*#__PURE__*/_react["default"].createElement("h2", null, "Sobre"), /*#__PURE__*/_react["default"].createElement("b", null, "Desenvolvido por Ricardo Mansano."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("b", null, "Nome:"), " ", appName, " - ", appDescription, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("b", null, "Vers\xE3o:"), " ", appVersion, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("b", null, "LIcen\xE7a:"), " ", appLicense, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("b", null, "Depend\xEAncias do projeto:"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("pre", null, showDepends()));
}