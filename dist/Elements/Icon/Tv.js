'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgTv(props) {
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
                className: 'tv_svg__feather tv_svg__feather-tv'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('rect', {
            x: 2,
            y: 7,
            width: 20,
            height: 15,
            rx: 2,
            ry: 2
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M17 2l-5 5-5-5'
        })
    )
}

var _default = SvgTv
exports['default'] = _default
