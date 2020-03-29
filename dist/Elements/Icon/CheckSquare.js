'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgCheckSquare(props) {
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
                    'check-square_svg__feather check-square_svg__feather-check-square'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M9 11l3 3L22 4'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11'
        })
    )
}

var _default = SvgCheckSquare
exports['default'] = _default
