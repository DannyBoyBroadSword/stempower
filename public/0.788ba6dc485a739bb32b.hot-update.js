webpackHotUpdate(0,{

/***/ 328:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/MemberPage.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.MemberPage = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MemberPage = exports.MemberPage = function (_React$Component) {\n    _inherits(MemberPage, _React$Component);\n\n    function MemberPage(props) {\n        _classCallCheck(this, MemberPage);\n\n        var _this = _possibleConstructorReturn(this, (MemberPage.__proto__ || Object.getPrototypeOf(MemberPage)).call(this, props));\n\n        _this.state = {\n            name: '',\n            college: '',\n            year: '',\n            bio: ''\n        };\n        return _this;\n    }\n\n    _createClass(MemberPage, [{\n        key: 'render',\n        value: function render() {\n            var name = this.state.name;\n            var college = this.state.college;\n            var year = this.state.year;\n            var bio = this.state.bio;\n\n\n            _react2.default.createElement(\n                'center',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { id: 'container' },\n                    _react2.default.createElement(\n                        'table',\n                        { id: 'table' },\n                        _react2.default.createElement(\n                            'tbody',\n                            null,\n                            _react2.default.createElement(\n                                'tr',\n                                { id: 'first_row' },\n                                _react2.default.createElement(\n                                    'td',\n                                    { id: 'one_column', colSpan: '2' },\n                                    _react2.default.createElement('div', { className: 'rectangle', style: { width: '200px', height: '200px', border: '1px solid #000' } }),\n                                    _react2.default.createElement(\n                                        'h1',\n                                        null,\n                                        ' ',\n                                        name\n                                    )\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'tr',\n                                { id: 'second_row' },\n                                _react2.default.createElement(\n                                    'td',\n                                    { id: 'two_column' },\n                                    'College: ',\n                                    college,\n                                    ' ',\n                                    _react2.default.createElement('br', null),\n                                    'Year: ',\n                                    year\n                                )\n                            ),\n                            ' ',\n                            _react2.default.createElement('br', null),\n                            _react2.default.createElement(\n                                'tr',\n                                { id: 'third_row' },\n                                _react2.default.createElement(\n                                    'td',\n                                    { id: 'fourth_coulmn', colSpan: '2' },\n                                    ' ',\n                                    bio,\n                                    ' '\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n        /** return (\n         \t<center>\n             <div id=\"container\">\n                 <table id=\"table\">\n                     <tbody>\n                     <tr id=\"first_row\">\n                     <td id=\"one_column\" colSpan=\"2\">\n                     <div className=\"rectangle\" style={{ width:'200px', height:'200px', border: '1px solid #000'}}></div>\n                         <h1> { name }</h1>\n                     </td>\n                     </tr>\n                     <tr id=\"second_row\">\n                     <td id=\"two_column\">\n                         College: { college } <br/>\n                         Year: { year }\n                     </td>\n                     </tr> <br/>\n                      <tr id=\"third_row\">\n                     <td id=\"fourth_coulmn\" colSpan=\"2\"> { bio } </td>\n                     </tr>\n                     </tbody>\n                 </table>\n             </div> \n             </center>\n         ); **/\n\n    }]);\n\n    return MemberPage;\n}(_react2.default.Component);\n\n;\n\nexports.default = MemberPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTWVtYmVyUGFnZS5qcz8zNjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgTWVtYmVyUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBjb2xsZWdlOiAnJyxcbiAgICAgICAgICAgIHllYXI6ICcnLFxuICAgICAgICAgICAgYmlvOiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBuYW1lIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgeyBjb2xsZWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgeyB5ZWFyIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgeyBiaW8gfSA9IHRoaXMuc3RhdGU7XG5cblxuICAgICAgICA8Y2VudGVyPlxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8dGFibGUgaWQ9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHIgaWQ9XCJmaXJzdF9yb3dcIj5cbiAgICAgICAgICAgICAgICA8dGQgaWQ9XCJvbmVfY29sdW1uXCIgY29sU3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3RhbmdsZVwiIHN0eWxlPXt7IHdpZHRoOicyMDBweCcsIGhlaWdodDonMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgIzAwMCd9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPiB7IG5hbWUgfTwvaDE+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBpZD1cInNlY29uZF9yb3dcIj5cbiAgICAgICAgICAgICAgICA8dGQgaWQ9XCJ0d29fY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIENvbGxlZ2U6IHsgY29sbGVnZSB9IDxici8+XG4gICAgICAgICAgICAgICAgICAgIFllYXI6IHsgeWVhciB9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPiA8YnIvPlxuXG4gICAgICAgICAgICAgICAgPHRyIGlkPVwidGhpcmRfcm93XCI+XG4gICAgICAgICAgICAgICAgPHRkIGlkPVwiZm91cnRoX2NvdWxtblwiIGNvbFNwYW49XCIyXCI+IHsgYmlvIH0gPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9jZW50ZXI+XG4gICAgfVxuICAgLyoqIHJldHVybiAoXG4gICAgXHQ8Y2VudGVyPlxuICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8dGFibGUgaWQ9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHIgaWQ9XCJmaXJzdF9yb3dcIj5cbiAgICAgICAgICAgICAgICA8dGQgaWQ9XCJvbmVfY29sdW1uXCIgY29sU3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3RhbmdsZVwiIHN0eWxlPXt7IHdpZHRoOicyMDBweCcsIGhlaWdodDonMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgIzAwMCd9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPiB7IG5hbWUgfTwvaDE+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBpZD1cInNlY29uZF9yb3dcIj5cbiAgICAgICAgICAgICAgICA8dGQgaWQ9XCJ0d29fY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIENvbGxlZ2U6IHsgY29sbGVnZSB9IDxici8+XG4gICAgICAgICAgICAgICAgICAgIFllYXI6IHsgeWVhciB9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPiA8YnIvPlxuXG4gICAgICAgICAgICAgICAgPHRyIGlkPVwidGhpcmRfcm93XCI+XG4gICAgICAgICAgICAgICAgPHRkIGlkPVwiZm91cnRoX2NvdWxtblwiIGNvbFNwYW49XCIyXCI+IHsgYmlvIH0gPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvY2VudGVyPlxuICAgICk7ICoqL1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJQYWdlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL01lbWJlclBhZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVFBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFEQTtBQVBBO0FBWUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBZEE7QUFEQTtBQURBO0FBREE7QUF3QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE1Q0E7QUFDQTtBQXFFQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///328\n");

/***/ })

})