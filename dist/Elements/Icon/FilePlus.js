'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgFilePlus(props) {
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
                    'file-plus_svg__feather file-plus_svg__feather-file-plus'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M14 2v6h6M12 18v-6M9 15h6'
        })
    )
}

var _default = SvgFilePlus
exports['default'] = _default
