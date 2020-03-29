'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgArrowDownRight(props) {
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
                    'arrow-down-right_svg__feather arrow-down-right_svg__feather-arrow-down-right'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M7 7l10 10M17 7v10H7'
        })
    )
}

var _default = SvgArrowDownRight
exports['default'] = _default
