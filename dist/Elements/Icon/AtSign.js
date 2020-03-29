'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgAtSign(props) {
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
                className: 'at-sign_svg__feather at-sign_svg__feather-at-sign'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 12,
            cy: 12,
            r: 4
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94'
        })
    )
}

var _default = SvgAtSign
exports['default'] = _default
