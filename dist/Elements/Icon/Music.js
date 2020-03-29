'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgMusic(props) {
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
                className: 'music_svg__feather music_svg__feather-music'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M9 18V5l12-2v13'
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 6,
            cy: 18,
            r: 3
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 18,
            cy: 16,
            r: 3
        })
    )
}

var _default = SvgMusic
exports['default'] = _default
