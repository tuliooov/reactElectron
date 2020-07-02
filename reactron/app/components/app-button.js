"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bgColor = "#D9D9D9"; // '#007bff'

var bgHoverColor = "#B4B4B4"; // '#0069d9'

var AppButton = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      height: 40,
      color: theme.palette.getContrastText(bgColor),
      backgroundColor: bgColor,
      '&:hover': {
        color: theme.palette.getContrastText(bgHoverColor),
        backgroundColor: bgHoverColor
      }
    }
  };
})(_Button["default"]);
var _default = AppButton;
exports["default"] = _default;