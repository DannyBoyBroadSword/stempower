webpackHotUpdate(0,{

/***/ 353:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./frontend/components/MemberPage.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.MemberPage = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _axios = __webpack_require__(/*! axios */ 248);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MemberPage = exports.MemberPage = function (_React$Component) {\n    _inherits(MemberPage, _React$Component);\n\n    function MemberPage(props) {\n        _classCallCheck(this, MemberPage);\n\n        var _this = _possibleConstructorReturn(this, (MemberPage.__proto__ || Object.getPrototypeOf(MemberPage)).call(this, props));\n\n        _this.state = {\n            name: '',\n            college: '',\n            year: '',\n            bio: ''\n        };\n        return _this;\n    }\n\n    _createClass(MemberPage, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            var _this2 = this;\n\n            _axios2.default.get('/api/mentors/1').then(function (_ref) {\n                var data = _ref.data;\n\n                console.log(data.mentor);\n                var mentor = data.mentor;\n                _this2.setState({ name: mentor.name, college: mentor.college, year: mentor.year, bio: mentor.bio });\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            //mostly do HTML in render \n            return _react2.default.createElement(\n                'div',\n                { id: 'container' },\n                _react2.default.createElement(\n                    'table',\n                    { id: 'table' },\n                    _react2.default.createElement(\n                        'tbody',\n                        null,\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'first_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'one_column', colSpan: '2' },\n                                _react2.default.createElement('div', { className: 'rectangle', style: { width: '200px', height: '200px', border: '1px solid #000' } }),\n                                _react2.default.createElement(\n                                    'h1',\n                                    null,\n                                    this.state.name\n                                )\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'second_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'two_column' },\n                                'College: ',\n                                this.state.college,\n                                _react2.default.createElement('br', null),\n                                'Year: ',\n                                this.state.year\n                            )\n                        ),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(\n                            'tr',\n                            { id: 'third_row' },\n                            _react2.default.createElement(\n                                'td',\n                                { id: 'fourth_coulmn', colSpan: '2' },\n                                ' ',\n                                this.state.bio,\n                                ' '\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'tr',\n                            { 'if': 'fourth_row' },\n                            _react2.default.createElement(\n                                'span',\n                                { align: 'right' },\n                                '+'\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return MemberPage;\n}(_react2.default.Component);\n\n;\n\nexports.default = MemberPage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvTWVtYmVyUGFnZS5qcz8zNjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5leHBvcnQgY2xhc3MgTWVtYmVyUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvbGxlZ2U6ICcnLFxuICAgICAgICAgICAgeWVhcjogJycsXG4gICAgICAgICAgICBiaW86ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvbWVudG9ycy8xJykudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubWVudG9yKTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnRvciA9IGRhdGEubWVudG9yO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTogbWVudG9yLm5hbWUsIGNvbGxlZ2U6IG1lbnRvci5jb2xsZWdlLCB5ZWFyOiBtZW50b3IueWVhciwgYmlvOiBtZW50b3IuYmlvfSlcblxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkgeyAvL21vc3RseSBkbyBIVE1MIGluIHJlbmRlciBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBpZD1cImZpcnN0X3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9XCJvbmVfY29sdW1uXCIgY29sU3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0YW5nbGVcIiBzdHlsZT17eyB3aWR0aDonMjAwcHgnLCBoZWlnaHQ6JzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDAnfX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+eyB0aGlzLnN0YXRlLm5hbWUgfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBpZD1cInNlY29uZF9yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGlkPVwidHdvX2NvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29sbGVnZTogeyB0aGlzLnN0YXRlLmNvbGxlZ2UgfTxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICBZZWFyOiB7IHRoaXMuc3RhdGUueWVhciB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGlkPVwidGhpcmRfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBpZD1cImZvdXJ0aF9jb3VsbW5cIiBjb2xTcGFuPVwiMlwiPiB7IHRoaXMuc3RhdGUuYmlvIH0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGlmID0gXCJmb3VydGhfcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhbGlnbj0ncmlnaHQnPiYjNDM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJQYWdlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL01lbWJlclBhZ2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVFBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFFQTtBQUZBO0FBREE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFoQkE7QUFEQTtBQURBO0FBeUJBOzs7O0FBakRBO0FBQ0E7QUFpREE7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///353\n");

/***/ })

})