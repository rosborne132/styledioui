'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgArrowUp(props) {
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
                    'arrow-up_svg__feather arrow-up_svg__feather-arrow-up'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M12 19V5M5 12l7-7 7 7'
        })
    )
}

var _default = SvgArrowUp
exports['default'] = _default
