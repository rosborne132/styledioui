'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgFramer(props) {
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
                className: 'framer_svg__feather framer_svg__feather-framer'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7'
        })
    )
}

var _default = SvgFramer
exports['default'] = _default
