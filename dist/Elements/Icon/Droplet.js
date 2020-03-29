'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgDroplet(props) {
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
                className: 'droplet_svg__feather droplet_svg__feather-droplet'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0z'
        })
    )
}

var _default = SvgDroplet
exports['default'] = _default
