'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgCornerLeftDown(props) {
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
                    'corner-left-down_svg__feather corner-left-down_svg__feather-corner-left-down'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M14 15l-5 5-5-5'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M20 4h-7a4 4 0 00-4 4v12'
        })
    )
}

var _default = SvgCornerLeftDown
exports['default'] = _default
