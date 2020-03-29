'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgServer(props) {
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
                className: 'server_svg__feather server_svg__feather-server'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('rect', {
            x: 2,
            y: 2,
            width: 20,
            height: 8,
            rx: 2,
            ry: 2
        }),
        /*#__PURE__*/ React.createElement('rect', {
            x: 2,
            y: 14,
            width: 20,
            height: 8,
            rx: 2,
            ry: 2
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M6 6h.01M6 18h.01'
        })
    )
}

var _default = SvgServer
exports['default'] = _default
