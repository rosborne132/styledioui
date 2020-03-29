'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgCornerRightDown(props) {
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
                    'corner-right-down_svg__feather corner-right-down_svg__feather-corner-right-down'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M10 15l5 5 5-5'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M4 4h7a4 4 0 014 4v12'
        })
    )
}

var _default = SvgCornerRightDown
exports['default'] = _default
