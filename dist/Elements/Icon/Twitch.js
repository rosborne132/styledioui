'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgTwitch(props) {
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
                className: 'twitch_svg__feather twitch_svg__feather-twitch'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7'
        })
    )
}

var _default = SvgTwitch
exports['default'] = _default
