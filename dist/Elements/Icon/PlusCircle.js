'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgPlusCircle(props) {
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
                    'plus-circle_svg__feather plus-circle_svg__feather-plus-circle'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 12,
            cy: 12,
            r: 10
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M12 8v8M8 12h8'
        })
    )
}

var _default = SvgPlusCircle
exports['default'] = _default
