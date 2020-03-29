'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgAward(props) {
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
                className: 'award_svg__feather award_svg__feather-award'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 12,
            cy: 8,
            r: 7
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M8.21 13.89L7 23l5-3 5 3-1.21-9.12'
        })
    )
}

var _default = SvgAward
exports['default'] = _default
