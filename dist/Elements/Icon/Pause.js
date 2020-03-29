'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgPause(props) {
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
                className: 'pause_svg__feather pause_svg__feather-pause'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M6 4h4v16H6zM14 4h4v16h-4z'
        })
    )
}

var _default = SvgPause
exports['default'] = _default
