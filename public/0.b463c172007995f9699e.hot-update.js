webpackHotUpdate(0,{

/***/ 353:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/MemberPage.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.MemberPage = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _axios = __webpack_require__(/*! axios */ 248);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MemberPage = exports.MemberPage = function (_React$Component) {\n    _inherits(MemberPage, _React$Component);\n\n    function MemberPage(props) {\n        _classCallCheck(this, MemberPage);\n\n        var _this = _possibleConstructorReturn(this, (MemberPage.__proto__ || Object.getPrototypeOf(MemberPage)).call(this, props));\n\n        _this.state = {\n            name: '',\n            college: '',\n            year: '',\n            bio: ''\n        };\n        return _this;\n    }\n\n    _createClass(MemberPage, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            _axios2.default.get('/api/mentors/1').then(function (response) {\n                console.log(response);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n\n            return _react2.default.createElement(\n                'center',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { id: 'container' },\n                    _react2.default.createElement(\n                        'h1',\n                        null,\n                        ' I\\'m alive'\n                    )\n                )\n            );\n        }\n        /** return (\n         \t<center>\n             <div id=\"container\">\n                 <table id=\"table\">\n                     <tbody>\n                     <tr id=\"first_row\">\n                     <td id=\"one_column\" colSpan=\"2\">\n                     <div className=\"rectangle\" style={{ width:'200px', height:'200px', border: '1px solid #000'}}></div>\n                         <h1> { name }</h1>\n                     </td>\n                     </tr>\n                     <tr id=\"second_row\">\n                     <td id=\"two_column\">\n                         College: { college } <br/>\n                         Year: { year }\n                     </td>\n                     </tr> <br/>\n                      <tr id=\"third_row\">\n                     <td id=\"fourth_coulmn\" colSpan=\"2\"> { bio } </td>\n                     </tr>\n                     </tbody>\n                 </table>\n             </div> \n             </center>\n         ); **/\n\n    }]);\n\n    return MemberPage;\n}(_react2.default.Component);\n\n;\n\nexports.default = MemberPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTWVtYmVyUGFnZS5qcz8zNjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5leHBvcnQgY2xhc3MgTWVtYmVyUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvbGxlZ2U6ICcnLFxuICAgICAgICAgICAgeWVhcjogJycsXG4gICAgICAgICAgICBiaW86ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvbWVudG9ycy8xJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8Y2VudGVyPlxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+IEknbSBhbGl2ZTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgKVxuICAgIH1cbiAgIC8qKiByZXR1cm4gKFxuICAgIFx0PGNlbnRlcj5cbiAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHRhYmxlIGlkPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyIGlkPVwiZmlyc3Rfcm93XCI+XG4gICAgICAgICAgICAgICAgPHRkIGlkPVwib25lX2NvbHVtblwiIGNvbFNwYW49XCIyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0YW5nbGVcIiBzdHlsZT17eyB3aWR0aDonMjAwcHgnLCBoZWlnaHQ6JzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDAnfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMT4geyBuYW1lIH08L2gxPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgaWQ9XCJzZWNvbmRfcm93XCI+XG4gICAgICAgICAgICAgICAgPHRkIGlkPVwidHdvX2NvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICBDb2xsZWdlOiB7IGNvbGxlZ2UgfSA8YnIvPlxuICAgICAgICAgICAgICAgICAgICBZZWFyOiB7IHllYXIgfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj4gPGJyLz5cblxuICAgICAgICAgICAgICAgIDx0ciBpZD1cInRoaXJkX3Jvd1wiPlxuICAgICAgICAgICAgICAgIDx0ZCBpZD1cImZvdXJ0aF9jb3VsbW5cIiBjb2xTcGFuPVwiMlwiPiB7IGJpbyB9IDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+IFxuICAgICAgICA8L2NlbnRlcj5cbiAgICApOyAqKi9cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyUGFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9NZW1iZXJQYWdlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFNQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTlCQTtBQUNBO0FBdURBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///353\n");

/***/ })

})