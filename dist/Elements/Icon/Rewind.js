'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgRewind(props) {
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
                className: 'rewind_svg__feather rewind_svg__feather-rewind'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M11 19l-9-7 9-7v14zM22 19l-9-7 9-7v14z'
        })
    )
}

var _default = SvgRewind
exports['default'] = _default
