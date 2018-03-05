webpackHotUpdate(0,{

/***/ 153:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./frontend/containers/AppContainer.js ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 4);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ 72);\n\nvar _Title = __webpack_require__(/*! ../components/Title */ 331);\n\nvar _Title2 = _interopRequireDefault(_Title);\n\nvar _MemberPage = __webpack_require__(/*! ../components/MemberPage */ 152);\n\nvar _MemberPage2 = _interopRequireDefault(_MemberPage);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 225);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AppContainer = function AppContainer(_ref) {\n    var name = _ref.name;\n\n    _react2.default.createElement(\n        _reactRouterDom.Router,\n        null,\n        _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n                'ul',\n                null,\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        Link,\n                        { to: '/' },\n                        'Home'\n                    )\n                ),\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        Link,\n                        { to: '/about' },\n                        'About'\n                    )\n                ),\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        Link,\n                        { to: '/topics' },\n                        'Topics'\n                    )\n                ),\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        Link,\n                        { to: '/memberpage' },\n                        'MemberPage'\n                    )\n                )\n            ),\n            _react2.default.createElement('hr', null),\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Home }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: About }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/topics', component: Topics }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/memberpage', component: _MemberPage2.default })\n        )\n    );\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Title2.default, { name: name }),\n        _react2.default.createElement(_MemberPage2.default, null)\n    )\n    /*<Router>\n        <div>\n            <Route exact path ={'/title'} render={Title}/>\n            <Route exact path = {'/memberpage'} render={MemberPage}/>\n        </div>\n    </Router>*/\n    ;\n};\n\nAppContainer.propTypes = {\n    name: _propTypes2.default.string\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    //mapstatetoprops: passes shit in\n    return {\n        name: state.name\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps() /* dispatch */{\n    return {};\n};\n\nexports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppContainer));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvQXBwQ29udGFpbmVyLmpzPzZkZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGUnO1xuaW1wb3J0IE1lbWJlclBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NZW1iZXJQYWdlJztcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0LCB3aXRoUm91dGVyLCBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuXG5jb25zdCBBcHBDb250YWluZXIgPSAoeyBuYW1lIH0pID0+IHtcbiAgICA8Um91dGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgIDxsaT5cbiAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgPC9saT5cbiAgICAgICA8bGk+XG4gICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgIDwvbGk+XG4gICAgICAgPGxpPlxuICAgICAgICAgPExpbmsgdG89XCIvdG9waWNzXCI+VG9waWNzPC9MaW5rPlxuICAgICAgIDwvbGk+XG4gICAgICAgPGxpPlxuICAgICAgICAgPExpbmsgdG89XCIvbWVtYmVycGFnZVwiPk1lbWJlclBhZ2U8L0xpbms+XG4gICAgICAgPC9saT5cbiAgICAgPC91bD5cblxuICAgICA8aHIgLz5cblxuICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgPFJvdXRlIHBhdGg9XCIvdG9waWNzXCIgY29tcG9uZW50PXtUb3BpY3N9IC8+XG4gICAgIDxSb3V0ZSBwYXRoPVwiL21lbWJlcnBhZ2VcIiBjb21wb25lbnQ9e01lbWJlclBhZ2V9Lz5cbiAgIDwvZGl2PlxuIDwvUm91dGVyPlxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGl0bGUgbmFtZT17bmFtZX0vPlxuICAgICAgICAgICAgPE1lbWJlclBhZ2UvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgLyo8Um91dGVyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aCA9eycvdGl0bGUnfSByZW5kZXI9e1RpdGxlfS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGggPSB7Jy9tZW1iZXJwYWdlJ30gcmVuZGVyPXtNZW1iZXJQYWdlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Sb3V0ZXI+Ki9cbiAgICApO1xufTtcblxuQXBwQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7IC8vbWFwc3RhdGV0b3Byb3BzOiBwYXNzZXMgc2hpdCBpblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHN0YXRlLm5hbWVcbiAgICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKC8qIGRpc3BhdGNoICovKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoQXBwQ29udGFpbmVyKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29udGFpbmVycy9BcHBDb250YWluZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFWQTtBQWVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFyQkE7QUFEQTtBQXlCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7O0FBTEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///153\n");

/***/ })

})