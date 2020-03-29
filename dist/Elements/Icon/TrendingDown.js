'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgTrendingDown(props) {
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
                    'trending-down_svg__feather trending-down_svg__feather-trending-down'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M23 18l-9.5-9.5-5 5L1 6'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M17 18h6v-6'
        })
    )
}

var _default = SvgTrendingDown
exports['default'] = _default
