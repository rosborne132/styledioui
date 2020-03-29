'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgArrowUpRight(props) {
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
                    'arrow-up-right_svg__feather arrow-up-right_svg__feather-arrow-up-right'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M7 17L17 7M7 7h10v10'
        })
    )
}

var _default = SvgArrowUpRight
exports['default'] = _default
