'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgPrinter(props) {
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
                className: 'printer_svg__feather printer_svg__feather-printer'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d:
                'M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M6 14h12v8H6z'
        })
    )
}

var _default = SvgPrinter
exports['default'] = _default
