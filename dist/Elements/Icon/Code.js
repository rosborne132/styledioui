'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgCode(props) {
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
                className: 'code_svg__feather code_svg__feather-code'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M16 18l6-6-6-6M8 6l-6 6 6 6'
        })
    )
}

var _default = SvgCode
exports['default'] = _default
