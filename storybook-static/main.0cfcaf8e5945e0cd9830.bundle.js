;(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        310: function(module, exports, __webpack_require__) {
            __webpack_require__(311),
                __webpack_require__(457),
                (module.exports = __webpack_require__(458))
        },
        375: function(module, exports) {},
        458: function(module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        308
                    )
                    ;(module._StorybookPreserveDecorators = !0),
                        Object(
                            _storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure
                        )([__webpack_require__(705)], module)
                }.call(this, __webpack_require__(459)(module))
        },
        705: function(module, exports, __webpack_require__) {
            var map = { './Elements/Button/Button.stories.tsx': 718 }
            function webpackContext(req) {
                var id = webpackContextResolve(req)
                return __webpack_require__(id)
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'")
                    throw ((e.code = 'MODULE_NOT_FOUND'), e)
                }
                return map[req]
            }
            ;(webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map)
            }),
                (webpackContext.resolve = webpackContextResolve),
                (module.exports = webpackContext),
                (webpackContext.id = 705)
        },
        718: function(module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, 'Text', function() {
                    return Text
                }),
                __webpack_require__.d(__webpack_exports__, 'Emoji', function() {
                    return Emoji
                })
            var react = __webpack_require__(41),
                react_default = __webpack_require__.n(react),
                dist = __webpack_require__(309),
                Button = function(_ref) {
                    var buttonText = _ref.buttonText,
                        onClick = _ref.onClick
                    return react.createElement(
                        'button',
                        { onClick: onClick },
                        buttonText
                    )
                }
            Button.displayName = 'Button'
            __webpack_exports__.default = { title: 'Button', component: Button }
            var Button_stories_ref = react_default.a.createElement(Button, {
                    buttonText: 'Test Button'
                }),
                Text = function() {
                    return Button_stories_ref
                }
            Text.displayName = 'Text'
            var Emoji = function() {
                return react_default.a.createElement(Button, {
                    buttonText: '😀 😎 👍 💯',
                    onClick: Object(dist.action)('clicked')
                })
            }
            Emoji.displayName = 'Emoji'
        }
    },
    [[310, 1, 2]]
])
//# sourceMappingURL=main.0cfcaf8e5945e0cd9830.bundle.js.map
