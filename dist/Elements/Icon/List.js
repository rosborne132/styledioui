'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgList(props) {
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
                className: 'list_svg__feather list_svg__feather-list'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01'
        })
    )
}

var _default = SvgList
exports['default'] = _default
