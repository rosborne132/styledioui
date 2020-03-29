'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgCopy(props) {
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
                className: 'copy_svg__feather copy_svg__feather-copy'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('rect', {
            x: 9,
            y: 9,
            width: 13,
            height: 13,
            rx: 2,
            ry: 2
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1'
        })
    )
}

var _default = SvgCopy
exports['default'] = _default
