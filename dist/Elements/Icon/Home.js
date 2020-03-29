'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgHome(props) {
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
                className: 'home_svg__feather home_svg__feather-home'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M9 22V12h6v10'
        })
    )
}

var _default = SvgHome
exports['default'] = _default
