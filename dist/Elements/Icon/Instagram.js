'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgInstagram(props) {
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
                    'instagram_svg__feather instagram_svg__feather-instagram'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('rect', {
            x: 2,
            y: 2,
            width: 20,
            height: 20,
            rx: 5,
            ry: 5
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01'
        })
    )
}

var _default = SvgInstagram
exports['default'] = _default
