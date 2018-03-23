webpackHotUpdate(0,{

/***/ 353:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/MemberPage.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.MemberPage = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _axios = __webpack_require__(/*! axios */ 248);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MemberPage = exports.MemberPage = function (_React$Component) {\n    _inherits(MemberPage, _React$Component);\n\n    function MemberPage(props) {\n        _classCallCheck(this, MemberPage);\n\n        var _this = _possibleConstructorReturn(this, (MemberPage.__proto__ || Object.getPrototypeOf(MemberPage)).call(this, props));\n\n        _this.state = {\n            name: '',\n            college: '',\n            year: '',\n            bio: ''\n        };\n        return _this;\n    }\n\n    _createClass(MemberPage, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            var _this2 = this;\n\n            _axios2.default.get('/api/mentors/1').then(function (_ref) {\n                var data = _ref.data;\n\n                console.log(data.mentor);\n                var mentor = data.mentor;\n                _this2.setState({ name: mentor.name, college: mentor.college, year: mentor.year, bio: mentor.bio });\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            //mostly do HTML in render \n\n            function addTextBox(e) {\n                e.preventDefault();\n                console.log('add text box clicked');\n            }\n\n            function removeTextBox(e) {\n                e.preventDefault();\n                console.log('delete text box clicked');\n            }\n            return _react2.default.createElement(\n                'div',\n                { id: 'container' },\n                _react2.default.createElement(\n                    'table',\n                    { id: 'table' },\n                    _react2.default.createElement(\n                        'tbody',\n                        null,\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'first_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'one_column', colSpan: '2' },\n                                _react2.default.createElement('div', { className: 'rectangle', style: { width: '200px', height: '200px', border: '1px solid #000' } }),\n                                _react2.default.createElement(\n                                    'h1',\n                                    null,\n                                    this.state.name\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'second_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'two_column' },\n                                'College: ',\n                                this.state.college,\n                                _react2.default.createElement('br', null),\n                                'Year: ',\n                                this.state.year\n                            )\n                        ),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'third_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'fourth_coulmn', colSpan: '2' },\n                                ' ',\n                                this.state.bio,\n                                ' '\n                            )\n                        ),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'fourth_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'fourth_row_column' },\n                                'Why I joined StemPower...'\n                            ),\n                            _react2.default.createElement(\n                                'td',\n                                null,\n                                _react2.default.createElement(\n                                    'span',\n                                    { onClick: addTextBox },\n                                    '+'\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    null,\n                                    '          '\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    { onClick: deleteTextBox },\n                                    '\\u2212'\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'fifth_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'fifth_row_column' },\n                                'Fun Facts about me...'\n                            ),\n                            _react2.default.createElement(\n                                'td',\n                                null,\n                                _react2.default.createElement(\n                                    'span',\n                                    { onClick: addTextBox },\n                                    '+'\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    null,\n                                    '          '\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    { onClick: deleteTextBox },\n                                    '\\u2212'\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'sixth_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'sixth_row_column' },\n                                'My Background...'\n                            ),\n                            _react2.default.createElement(\n                                'td',\n                                null,\n                                _react2.default.createElement(\n                                    'span',\n                                    { onClick: addTextBox },\n                                    '+'\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    null,\n                                    '          '\n                                ),\n                                _react2.default.createElement(\n                                    'span',\n                                    { onClick: deleteTextBox },\n                                    '\\u2212'\n                                )\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return MemberPage;\n}(_react2.default.Component);\n\n;\n\nexports.default = MemberPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTWVtYmVyUGFnZS5qcz8zNjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5leHBvcnQgY2xhc3MgTWVtYmVyUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvbGxlZ2U6ICcnLFxuICAgICAgICAgICAgeWVhcjogJycsXG4gICAgICAgICAgICBiaW86ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvbWVudG9ycy8xJykudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubWVudG9yKTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnRvciA9IGRhdGEubWVudG9yO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTogbWVudG9yLm5hbWUsIGNvbGxlZ2U6IG1lbnRvci5jb2xsZWdlLCB5ZWFyOiBtZW50b3IueWVhciwgYmlvOiBtZW50b3IuYmlvfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHsgLy9tb3N0bHkgZG8gSFRNTCBpbiByZW5kZXIgXG5cbiAgICAgICAgZnVuY3Rpb24gYWRkVGV4dEJveChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRleHQgYm94IGNsaWNrZWQnKTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVUZXh0Qm94KGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgdGV4dCBib3ggY2xpY2tlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGlkPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQ9XCJmaXJzdF9yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGlkPVwib25lX2NvbHVtblwiIGNvbFNwYW49XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjdGFuZ2xlXCIgc3R5bGU9e3sgd2lkdGg6JzIwMHB4JywgaGVpZ2h0OicyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJ319PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnsgdGhpcy5zdGF0ZS5uYW1lIH08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQ9XCJzZWNvbmRfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBpZD1cInR3b19jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbGxlZ2U6IHsgdGhpcy5zdGF0ZS5jb2xsZWdlIH08YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgWWVhcjogeyB0aGlzLnN0YXRlLnllYXIgfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBpZD1cInRoaXJkX3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9XCJmb3VydGhfY291bG1uXCIgY29sU3Bhbj1cIjJcIj4geyB0aGlzLnN0YXRlLmJpbyB9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGlkID0gXCJmb3VydGhfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQgPSBcImZvdXJ0aF9yb3dfY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoeSBJIGpvaW5lZCBTdGVtUG93ZXIuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrID0ge2FkZFRleHRCb3h9PiYjNDM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljayA9IHtkZWxldGVUZXh0Qm94fT4mI3gyMjEyOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBpZCA9IFwiZmlmdGhfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQgPSBcImZpZnRoX3Jvd19jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVuIEZhY3RzIGFib3V0IG1lLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljayA9IHthZGRUZXh0Qm94fT4mIzQzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2sgPSB7ZGVsZXRlVGV4dEJveH0+JiN4MjIxMjs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgaWQgPSBcInNpeHRoX3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkID0gXCJzaXh0aF9yb3dfY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IEJhY2tncm91bmQuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrID0ge2FkZFRleHRCb3h9PiYjNDM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljayA9IHtkZWxldGVUZXh0Qm94fT4mI3gyMjEyOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlclBhZ2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvTWVtYmVyUGFnZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBUUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBRUE7QUFGQTtBQURBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTEE7QUF0Q0E7QUFEQTtBQURBO0FBdURBOzs7O0FBMUZBO0FBQ0E7QUEwRkE7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///353\n");

/***/ })

})