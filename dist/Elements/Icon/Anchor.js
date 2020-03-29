'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgAnchor(props) {
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
                className: 'anchor_svg__feather anchor_svg__feather-anchor'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 12,
            cy: 5,
            r: 3
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M12 22V8M5 12H2a10 10 0 0020 0h-3'
        })
    )
}

var _default = SvgAnchor
exports['default'] = _default
