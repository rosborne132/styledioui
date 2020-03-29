'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgPlus(props) {
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
                className: 'plus_svg__feather plus_svg__feather-plus'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M12 5v14M5 12h14'
        })
    )
}

var _default = SvgPlus
exports['default'] = _default
