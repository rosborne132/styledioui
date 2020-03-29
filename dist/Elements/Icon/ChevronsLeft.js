'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgChevronsLeft(props) {
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
                    'chevrons-left_svg__feather chevrons-left_svg__feather-chevrons-left'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M11 17l-5-5 5-5M18 17l-5-5 5-5'
        })
    )
}

var _default = SvgChevronsLeft
exports['default'] = _default
