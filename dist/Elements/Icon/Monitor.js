'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgMonitor(props) {
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
                className: 'monitor_svg__feather monitor_svg__feather-monitor'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('rect', {
            x: 2,
            y: 3,
            width: 20,
            height: 14,
            rx: 2,
            ry: 2
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M8 21h8M12 17v4'
        })
    )
}

var _default = SvgMonitor
exports['default'] = _default
