'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgRefreshCcw(props) {
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
                    'refresh-ccw_svg__feather refresh-ccw_svg__feather-refresh-ccw'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M1 4v6h6M23 20v-6h-6'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15'
        })
    )
}

var _default = SvgRefreshCcw
exports['default'] = _default
