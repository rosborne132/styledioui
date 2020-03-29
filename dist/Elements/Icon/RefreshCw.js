'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgRefreshCw(props) {
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
                    'refresh-cw_svg__feather refresh-cw_svg__feather-refresh-cw'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M23 4v6h-6M1 20v-6h6'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d:
                'M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15'
        })
    )
}

var _default = SvgRefreshCw
exports['default'] = _default
