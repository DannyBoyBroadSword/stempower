webpackHotUpdate(0,{

/***/ 355:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/MemberPage.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.MemberPage = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _axios = __webpack_require__(/*! axios */ 249);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _AddBioInfo = __webpack_require__(/*! ./AddBioInfo */ 654);\n\nvar _AddBioInfo2 = _interopRequireDefault(_AddBioInfo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MemberPage = exports.MemberPage = function (_React$Component) {\n    _inherits(MemberPage, _React$Component);\n\n    function MemberPage(props) {\n        _classCallCheck(this, MemberPage);\n\n        var _this = _possibleConstructorReturn(this, (MemberPage.__proto__ || Object.getPrototypeOf(MemberPage)).call(this, props));\n\n        _this.state = {\n            name: '',\n            college: '',\n            year: '',\n            bio: ''\n        };\n        return _this;\n    }\n\n    _createClass(MemberPage, [{\n        key: 'addBioInfo',\n        value: function addBioInfo(header, content) {}\n    }, {\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            var _this2 = this;\n\n            _axios2.default.get('/api/mentors/1').then(function (_ref) {\n                var data = _ref.data;\n\n                console.log(data.mentor);\n                var mentor = data.mentor;\n                _this2.setState({ name: mentor.name, college: mentor.college, year: mentor.year, bio: mentor.bio });\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            //mostly do HTML in render \n\n            function addTextBox(plusSignId) {\n                console.log('add text box clicked');\n                console.log(plusSignId);\n            }\n\n            function deleteTextBox(e) {\n                e.preventDefault();\n                console.log('delete text box clicked');\n            }\n            return _react2.default.createElement(\n                'div',\n                { id: 'container' },\n                _react2.default.createElement(\n                    'table',\n                    { id: 'table' },\n                    _react2.default.createElement(\n                        'tbody',\n                        null,\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'first_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'one_column', colSpan: '2' },\n                                _react2.default.createElement('div', { className: 'rectangle', style: { width: '200px', height: '200px', border: '1px solid #000' } }),\n                                _react2.default.createElement(\n                                    'h1',\n                                    null,\n                                    this.state.name\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'second_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'two_column' },\n                                'College: ',\n                                this.state.college,\n                                _react2.default.createElement('br', null),\n                                'Year: ',\n                                this.state.year\n                            )\n                        ),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'third_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'fourth_coulmn', colSpan: '2' },\n                                ' ',\n                                this.state.bio,\n                                ' '\n                            )\n                        ),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'fourth_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'fourth_row_column' },\n                                'Why I joined StemPower...',\n                                _react2.default.createElement(_AddBioInfo2.default, null)\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'sixth_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'sixth_row_column' },\n                                'My Background...',\n                                _react2.default.createElement(_AddBioInfo2.default, null)\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'seventh_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'seventh_row_column' },\n                                'My message to my troop...',\n                                _react2.default.createElement(_AddBioInfo2.default, null)\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'fifth_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'fifth_row_column' },\n                                'Fun Facts about me...',\n                                _react2.default.createElement(_AddBioInfo2.default, null)\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return MemberPage;\n}(_react2.default.Component);\n\n;\n\nexports.default = MemberPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTWVtYmVyUGFnZS5qcz8zNjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IEFkZEJpb0luZm8gZnJvbSAgJy4vQWRkQmlvSW5mbyc7XG5cbmV4cG9ydCBjbGFzcyBNZW1iZXJQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgY29sbGVnZTogJycsXG4gICAgICAgICAgICB5ZWFyOiAnJyxcbiAgICAgICAgICAgIGJpbzogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhZGRCaW9JbmZvKGhlYWRlciwgY29udGVudCkge1xuXG4gXG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL21lbnRvcnMvMScpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm1lbnRvcik7XG4gICAgICAgICAgICBjb25zdCBtZW50b3IgPSBkYXRhLm1lbnRvcjtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6IG1lbnRvci5uYW1lLCBjb2xsZWdlOiBtZW50b3IuY29sbGVnZSwgeWVhcjogbWVudG9yLnllYXIsIGJpbzogbWVudG9yLmJpb30pXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7IC8vbW9zdGx5IGRvIEhUTUwgaW4gcmVuZGVyIFxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZFRleHRCb3gocGx1c1NpZ25JZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCB0ZXh0IGJveCBjbGlja2VkJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbHVzU2lnbklkKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkZWxldGVUZXh0Qm94KGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgdGV4dCBib3ggY2xpY2tlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGlkPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQ9XCJmaXJzdF9yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGlkPVwib25lX2NvbHVtblwiIGNvbFNwYW49XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdGFuZ2xlXCIgc3R5bGU9e3sgd2lkdGg6JzIwMHB4JywgaGVpZ2h0OicyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJ319PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnsgdGhpcy5zdGF0ZS5uYW1lIH08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQ9XCJzZWNvbmRfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBpZD1cInR3b19jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbGxlZ2U6IHsgdGhpcy5zdGF0ZS5jb2xsZWdlIH08YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgWWVhcjogeyB0aGlzLnN0YXRlLnllYXIgfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBpZD1cInRoaXJkX3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9XCJmb3VydGhfY291bG1uXCIgY29sU3Bhbj1cIjJcIj4geyB0aGlzLnN0YXRlLmJpbyB9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGlkID0gXCJmb3VydGhfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQgPSBcImZvdXJ0aF9yb3dfY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoeSBJIGpvaW5lZCBTdGVtUG93ZXIuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEJpb0luZm8gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBpZCA9IFwic2l4dGhfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQgPSBcInNpeHRoX3Jvd19jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgQmFja2dyb3VuZC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkQmlvSW5mbyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQgPSBcInNldmVudGhfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQgPSBcInNldmVudGhfcm93X2NvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBtZXNzYWdlIHRvIG15IHRyb29wLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRCaW9JbmZvIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQgPSBcImZpZnRoX3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkID0gXCJmaWZ0aF9yb3dfY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1biBGYWN0cyBhYm91dCBtZS4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEJpb0luZm8gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyUGFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9NZW1iZXJQYWdlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFRQTtBQUNBOzs7QUFDQTs7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFGQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFEQTtBQW5DQTtBQURBO0FBREE7QUFnREE7Ozs7QUF2RkE7QUFDQTtBQXVGQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///355\n");

/***/ })

})