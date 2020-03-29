'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgTerminal(props) {
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
                    'terminal_svg__feather terminal_svg__feather-terminal'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M4 17l6-6-6-6M12 19h8'
        })
    )
}

var _default = SvgTerminal
exports['default'] = _default
