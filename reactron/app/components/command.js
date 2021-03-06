"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _appButton = _interopRequireDefault(require("./app-button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Permite acesso a funcoes do back-end
var _require = require('electron'),
    remote = _require.remote;

var backend = remote.require('./main.js');

var Command = /*#__PURE__*/function (_React$Component) {
  _inherits(Command, _React$Component);

  var _super = _createSuper(Command);

  function Command(props) {
    var _this;

    _classCallCheck(this, Command);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onTextChange", function (e) {
      // SetState com nome dinamico
      var _e$target = e.target,
          id = _e$target.id,
          value = _e$target.value;

      _this.setState(_defineProperty({}, id, value));
    });

    _defineProperty(_assertThisInitialized(_this), "onClickSubmit", function (e) {
      backend.execProcess(_this.state.command, _this.execProcessCallBack);
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "execProcessCallBack", function (str) {
      document.getElementById("execProcessCallBack").innerHTML += "<pre>" + str + "</pre>";
    });

    _this.state = {
      command: ''
    };
    return _this;
  }

  _createClass(Command, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          margin: 4
        }
      }, /*#__PURE__*/_react["default"].createElement("p", {
        align: "right"
      }, /*#__PURE__*/_react["default"].createElement("b", null, "source:"), " command.js"), /*#__PURE__*/_react["default"].createElement("h2", null, "Executa comandos do SO via node (exec)."), /*#__PURE__*/_react["default"].createElement("p", null, "Exemplos:"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("b", null, "Linux:"), " ping localhost -c 3"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("b", null, "Windows:"), " ping localhost")), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: function onSubmit() {
          _this2.onClickSubmit(event);
        }
      }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        style: {
          minWidth: 300
        },
        required: true,
        id: "command",
        value: this.state.command,
        label: "Command",
        onChange: function onChange() {
          _this2.onTextChange(event);
        }
      }), " ", /*#__PURE__*/_react["default"].createElement(_appButton["default"], {
        type: "submit"
      }, "EXECUTA COMANDO"), " ", /*#__PURE__*/_react["default"].createElement(_appButton["default"], {
        onClick: function onClick() {
          document.getElementById("execProcessCallBack").innerHTML = "";
        }
      }, "LIMPA")), /*#__PURE__*/_react["default"].createElement("div", {
        id: "execProcessCallBack"
      }));
    }
  }]);

  return Command;
}(_react["default"].Component);

exports["default"] = Command;