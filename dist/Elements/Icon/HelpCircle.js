'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgHelpCircle(props) {
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
                    'help-circle_svg__feather help-circle_svg__feather-help-circle'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 12,
            cy: 12,
            r: 10
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01'
        })
    )
}

var _default = SvgHelpCircle
exports['default'] = _default
