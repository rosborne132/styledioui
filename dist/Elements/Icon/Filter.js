'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgFilter(props) {
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
                className: 'filter_svg__feather filter_svg__feather-filter'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z'
        })
    )
}

var _default = SvgFilter
exports['default'] = _default
