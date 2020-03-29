'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgInbox(props) {
    return /*#__PURE__*/ React.createElement(
        'svg',
        Object.assign(
            {
                width: 24,
                height: 24,
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 2,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                className: 'inbox_svg__feather inbox_svg__feather-inbox'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M22 12h-6l-2 3h-4l-2-3H2'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d:
                'M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z'
        })
    )
}

var _default = SvgInbox
exports['default'] = _default
