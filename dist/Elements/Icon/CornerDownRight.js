'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgCornerDownRight(props) {
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
                    'corner-down-right_svg__feather corner-down-right_svg__feather-corner-down-right'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M15 10l5 5-5 5'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M4 4v7a4 4 0 004 4h12'
        })
    )
}

var _default = SvgCornerDownRight
exports['default'] = _default
