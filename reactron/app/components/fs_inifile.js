"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

var fs = require('fs'); // Habilita acesso ao File System: https://nodejs.org/api/fs.html


var ini = require('ini'); // Ferramentas de manipulacao de INIs


var fName = "./reactron.ini";

var FS_Inifile = /*#__PURE__*/function (_React$Component) {
  _inherits(FS_Inifile, _React$Component);

  var _super = _createSuper(FS_Inifile);

  function FS_Inifile(props) {
    var _this;

    _classCallCheck(this, FS_Inifile);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "selectFiles", function (event) {
      var input = event.target;
      var files = input.files; // "Varre" os arquivos selecionados

      var cFiles = "";

      for (var i = 0; i < files.length; i++) {
        cFiles += files[i].path + '\n';
      } // Atualiza state com os arquivos selecionados


      _this.setState({
        filesOpened: cFiles
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fileSystem_Ini", function () {
      // Abre arquivo reactron.ini no mesmo nivel do executavel
      var fIni = ini.parse(fs.readFileSync(fName, 'utf-8')); // Insere linhas no INI

      fIni.Escopo = 'variavel de Escopo'; // Uma variavel sem Tag pode ficar no escopo

      fIni.files.file1 = "file1.png";
      fIni.files.file2 = "file2.png";
      fIni.files.file3 = "file3.png"; // Deleta file2

      delete fIni.files.file2; // Salva arquivo INI

      fs.writeFileSync(fName, ini.stringify(fIni)); // Atualiza state com o conteudo do arquivo ini

      _this.setState({
        iniContent: ini.stringify(fIni)
      });
    });

    _this.state = {
      iniContent: "",
      filesOpened: ""
    }; // Se Ini nao existir, cria

    fs.exists(fName, function (exists) {
      if (!exists) {
        fs.writeFileSync(fName, "[files]");
        console.log(fName + " criado com sucesso!");
      }
    });
    return _this;
  }

  _createClass(FS_Inifile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
        align: "right"
      }, /*#__PURE__*/_react["default"].createElement("b", null, "source:"), " fs_inifile.js "), /*#__PURE__*/_react["default"].createElement("h2", null, "Manipula\xE7\xE3o de arquivos / Ini Files..."), /*#__PURE__*/_react["default"].createElement("p", null, "Neste exemplo vamos manipular arquivos locais nos baseando em arquivos INI."), /*#__PURE__*/_react["default"].createElement("input", {
        accept: "all/*.*",
        style: {
          display: 'none'
        },
        id: "raised-button-file",
        multiple: true,
        type: "file",
        onChange: function onChange() {
          _this2.selectFiles(event);
        }
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "raised-button-file"
      }, /*#__PURE__*/_react["default"].createElement(_appButton["default"], {
        component: "span"
      }, "Seleciona arquivos")), /*#__PURE__*/_react["default"].createElement("h3", null, "Arquivos selecionados"), /*#__PURE__*/_react["default"].createElement("pre", null, this.state.filesOpened), /*#__PURE__*/_react["default"].createElement(_appButton["default"], {
        onClick: function onClick() {
          _this2.fileSystem_Ini();
        }
      }, "Cria/Abre arquivo INI"), /*#__PURE__*/_react["default"].createElement("h3", null, "Conte\xFAdo do Arquivo INI"), /*#__PURE__*/_react["default"].createElement("pre", null, this.state.iniContent));
    }
  }]);

  return FS_Inifile;
}(_react["default"].Component);

exports["default"] = FS_Inifile;