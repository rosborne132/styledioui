'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgCalendar(props) {
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
                    'calendar_svg__feather calendar_svg__feather-calendar'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('rect', {
            x: 3,
            y: 4,
            width: 18,
            height: 18,
            rx: 2,
            ry: 2
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M16 2v4M8 2v4M3 10h18'
        })
    )
}

var _default = SvgCalendar
exports['default'] = _default
