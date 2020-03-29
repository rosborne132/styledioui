'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgCornerLeftUp(props) {
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
                    'corner-left-up_svg__feather corner-left-up_svg__feather-corner-left-up'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M14 9L9 4 4 9'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M20 20h-7a4 4 0 01-4-4V4'
        })
    )
}

var _default = SvgCornerLeftUp
exports['default'] = _default
