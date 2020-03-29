'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgPocket(props) {
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
                className: 'pocket_svg__feather pocket_svg__feather-pocket'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d:
                'M4 3h16a2 2 0 012 2v6a10 10 0 01-10 10A10 10 0 012 11V5a2 2 0 012-2z'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M8 10l4 4 4-4'
        })
    )
}

var _default = SvgPocket
exports['default'] = _default
