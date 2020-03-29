'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgSkipBack(props) {
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
                    'skip-back_svg__feather skip-back_svg__feather-skip-back'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M19 20L9 12l10-8v16zM5 19V5'
        })
    )
}

var _default = SvgSkipBack
exports['default'] = _default
