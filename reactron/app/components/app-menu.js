"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AppMenu;

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Menu2 = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _welcome = _interopRequireDefault(require("./welcome"));

var _basicForm = _interopRequireDefault(require("./basic-form"));

var _command = _interopRequireDefault(require("./command"));

var _appAbout = _interopRequireDefault(require("./app-about"));

var _rest = _interopRequireDefault(require("./rest"));

var _fs_inifile = _interopRequireDefault(require("./fs_inifile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AppMenu(props) {
  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClickOpt(page) {
    props.mainApp.routePage(page);
    handleClose();
  }

  var appButton = {
    WebkitAppRegion: "no-drag"
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "Menu principal"
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    color: "inherit",
    size: "small",
    style: appButton,
    onClick: handleClick
  }, /*#__PURE__*/_react["default"].createElement(_Menu2["default"], {
    width: "28"
  }))), /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_welcome["default"]);
    }
  }, "Bem-vindo"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_basicForm["default"]);
    }
  }, "Formulario"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_command["default"]);
    }
  }, "Executa Comando"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_rest["default"]);
    }
  }, "Consome Rest"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_fs_inifile["default"]);
    }
  }, "Sistema de Arquivos / Ini File"), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    onClick: function onClick() {
      handleClickOpt(_appAbout["default"]);
    }
  }, "Sobre...")));
}