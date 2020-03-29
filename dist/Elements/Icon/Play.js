'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgPlay(props) {
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
                className: 'play_svg__feather play_svg__feather-play'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M5 3l14 9-14 9V3z'
        })
    )
}

var _default = SvgPlay
exports['default'] = _default
