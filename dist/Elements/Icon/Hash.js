'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgHash(props) {
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
                className: 'hash_svg__feather hash_svg__feather-hash'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M4 9h16M4 15h16M10 3L8 21M16 3l-2 18'
        })
    )
}

var _default = SvgHash
exports['default'] = _default
