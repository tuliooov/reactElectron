"use strict";

var _react = _interopRequireDefault(require("react"));

var _app = _interopRequireDefault(require("./app"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('App is working', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_app["default"], null));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});