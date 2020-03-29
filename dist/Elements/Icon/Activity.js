'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgActivity(props) {
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
                    'activity_svg__feather activity_svg__feather-activity'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M22 12h-4l-3 9L9 3l-3 9H2'
        })
    )
}

var _default = SvgActivity
exports['default'] = _default
