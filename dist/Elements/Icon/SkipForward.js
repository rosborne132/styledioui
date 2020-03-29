'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgSkipForward(props) {
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
                    'skip-forward_svg__feather skip-forward_svg__feather-skip-forward'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M5 4l10 8-10 8V4zM19 5v14'
        })
    )
}

var _default = SvgSkipForward
exports['default'] = _default
