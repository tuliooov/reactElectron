"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Minimize = _interopRequireDefault(require("@material-ui/icons/Minimize"));

var _CropSquare = _interopRequireDefault(require("@material-ui/icons/CropSquare"));

var _FilterNone = _interopRequireDefault(require("@material-ui/icons/FilterNone"));

var _appMenu = _interopRequireDefault(require("./app-menu"));

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

// Captura janela principal do Electron
var _require = require('electron'),
    remote = _require.remote;

var window = remote.getCurrentWindow();

var AppBar = /*#__PURE__*/function (_React$Component) {
  _inherits(AppBar, _React$Component);

  var _super = _createSuper(AppBar);

  function AppBar(props) {
    var _this;

    _classCallCheck(this, AppBar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "maximizeButton", function () {
      if (window.isMaximized()) window.restore();else window.maximize();
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      // Evento de resize da janela principal
      // Controlo aqui a troca do icone [Maximize]
      window.addListener("resize", function () {
        if (window.isMaximized()) _this.setState({
          maximizeIcon: /*#__PURE__*/_react["default"].createElement(_FilterNone["default"], null)
        });else _this.setState({
          maximizeIcon: /*#__PURE__*/_react["default"].createElement(_CropSquare["default"], null)
        });
      });
    });

    _this.state = {
      maximizeIcon: /*#__PURE__*/_react["default"].createElement(_CropSquare["default"], null),
      mainApp: props.mainApp
    };
    return _this;
  } // Evento de click no botao [Maximize]


  _createClass(AppBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          open = _this$state.open,
          _this$state$anchorEl = _this$state.anchorEl,
          anchorEl = _this$state$anchorEl === void 0 ? null : _this$state$anchorEl; // Styles

      var appBarStyle = {
        WebkitAppRegion: "drag",
        zIndex: 1000,
        maxHeight: 20,
        padding: 6,
        paddingTop: 10,
        paddingBottom: 10,
        height: 100,
        color: "#f5f5f5",
        backgroundColor: "#494440",
        display: "flex",
        alignItems: "center",
        userSelect: "none"
      };
      var appButton = {
        WebkitAppRegion: "no-drag"
      };
      var appH1 = {
        flexGrow: 1,
        margin: 0,
        marginLeft: 6,
        fontSize: 20
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: appBarStyle
      }, /*#__PURE__*/_react["default"].createElement(_appMenu["default"], {
        mainApp: this.state.mainApp
      }), /*#__PURE__*/_react["default"].createElement("h1", {
        style: appH1
      }, "Reactron"), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        size: "small",
        style: appButton,
        onClick: function onClick() {
          window.minimize();
        }
      }, /*#__PURE__*/_react["default"].createElement(_Minimize["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        size: "small",
        style: appButton,
        onClick: function onClick() {
          _this2.maximizeButton();
        }
      }, this.state.maximizeIcon), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        size: "small",
        style: appButton,
        onClick: function onClick() {
          window.close();
        }
      }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)));
    }
  }]);

  return AppBar;
}(_react["default"].Component);

exports["default"] = AppBar;