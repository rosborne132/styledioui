'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgShare2(props) {
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
                className: 'share-2_svg__feather share-2_svg__feather-share-2'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 18,
            cy: 5,
            r: 3
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 6,
            cy: 12,
            r: 3
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 18,
            cy: 19,
            r: 3
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98'
        })
    )
}

var _default = SvgShare2
exports['default'] = _default
