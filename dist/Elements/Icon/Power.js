'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgPower(props) {
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
                className: 'power_svg__feather power_svg__feather-power'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M18.36 6.64a9 9 0 11-12.73 0M12 2v10'
        })
    )
}

var _default = SvgPower
exports['default'] = _default
