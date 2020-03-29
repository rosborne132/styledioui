'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgCamera(props) {
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
                className: 'camera_svg__feather camera_svg__feather-camera'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d:
                'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z'
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 12,
            cy: 13,
            r: 4
        })
    )
}

var _default = SvgCamera
exports['default'] = _default
