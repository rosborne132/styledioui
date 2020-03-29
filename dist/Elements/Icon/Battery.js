'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgBattery(props) {
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
                className: 'battery_svg__feather battery_svg__feather-battery'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('rect', {
            x: 1,
            y: 6,
            width: 18,
            height: 12,
            rx: 2,
            ry: 2
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M23 13v-2'
        })
    )
}

var _default = SvgBattery
exports['default'] = _default
