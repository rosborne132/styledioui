'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgVolumeX(props) {
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
                    'volume-x_svg__feather volume-x_svg__feather-volume-x'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6'
        })
    )
}

var _default = SvgVolumeX
exports['default'] = _default
