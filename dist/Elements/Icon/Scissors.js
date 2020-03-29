'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgScissors(props) {
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
                    'scissors_svg__feather scissors_svg__feather-scissors'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 6,
            cy: 6,
            r: 3
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 6,
            cy: 18,
            r: 3
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'
        })
    )
}

var _default = SvgScissors
exports['default'] = _default
