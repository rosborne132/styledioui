'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgUnderline(props) {
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
                    'underline_svg__feather underline_svg__feather-underline'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M6 3v7a6 6 0 006 6 6 6 0 006-6V3M4 21h16'
        })
    )
}

var _default = SvgUnderline
exports['default'] = _default
