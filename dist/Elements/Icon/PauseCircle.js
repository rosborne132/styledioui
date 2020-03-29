'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgPauseCircle(props) {
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
                    'pause-circle_svg__feather pause-circle_svg__feather-pause-circle'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 12,
            cy: 12,
            r: 10
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M10 15V9M14 15V9'
        })
    )
}

var _default = SvgPauseCircle
exports['default'] = _default
