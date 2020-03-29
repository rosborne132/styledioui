'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgUserCheck(props) {
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
                    'user-check_svg__feather user-check_svg__feather-user-check'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 8.5,
            cy: 7,
            r: 4
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M17 11l2 2 4-4'
        })
    )
}

var _default = SvgUserCheck
exports['default'] = _default
