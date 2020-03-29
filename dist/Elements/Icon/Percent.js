'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgPercent(props) {
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
                className: 'percent_svg__feather percent_svg__feather-percent'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M19 5L5 19'
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 6.5,
            cy: 6.5,
            r: 2.5
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 17.5,
            cy: 17.5,
            r: 2.5
        })
    )
}

var _default = SvgPercent
exports['default'] = _default
