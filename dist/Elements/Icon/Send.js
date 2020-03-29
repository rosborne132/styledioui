'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgSend(props) {
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
                className: 'send_svg__feather send_svg__feather-send'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z'
        })
    )
}

var _default = SvgSend
exports['default'] = _default
