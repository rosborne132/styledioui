'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgTrendingUp(props) {
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
                className:
                    'trending-up_svg__feather trending-up_svg__feather-trending-up'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M23 6l-9.5 9.5-5-5L1 18'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M17 6h6v6'
        })
    )
}

var _default = SvgTrendingUp
exports['default'] = _default
