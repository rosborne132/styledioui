'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgDatabase(props) {
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
                    'database_svg__feather database_svg__feather-database'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('ellipse', {
            cx: 12,
            cy: 5,
            rx: 9,
            ry: 3
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'
        })
    )
}

var _default = SvgDatabase
exports['default'] = _default
