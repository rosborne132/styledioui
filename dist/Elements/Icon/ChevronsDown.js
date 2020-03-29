'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgChevronsDown(props) {
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
                    'chevrons-down_svg__feather chevrons-down_svg__feather-chevrons-down'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M7 13l5 5 5-5M7 6l5 5 5-5'
        })
    )
}

var _default = SvgChevronsDown
exports['default'] = _default
