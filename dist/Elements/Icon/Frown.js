'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgFrown(props) {
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
                className: 'frown_svg__feather frown_svg__feather-frown'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 12,
            cy: 12,
            r: 10
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M16 16s-1.5-2-4-2-4 2-4 2M9 9h.01M15 9h.01'
        })
    )
}

var _default = SvgFrown
exports['default'] = _default
