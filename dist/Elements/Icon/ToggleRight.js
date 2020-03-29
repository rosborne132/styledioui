'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgToggleRight(props) {
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
                    'toggle-right_svg__feather toggle-right_svg__feather-toggle-right'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('rect', {
            x: 1,
            y: 5,
            width: 22,
            height: 14,
            rx: 7,
            ry: 7
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 16,
            cy: 12,
            r: 3
        })
    )
}

var _default = SvgToggleRight
exports['default'] = _default
