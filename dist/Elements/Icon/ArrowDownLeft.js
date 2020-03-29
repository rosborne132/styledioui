'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgArrowDownLeft(props) {
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
                    'arrow-down-left_svg__feather arrow-down-left_svg__feather-arrow-down-left'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M17 7L7 17M17 17H7V7'
        })
    )
}

var _default = SvgArrowDownLeft
exports['default'] = _default
