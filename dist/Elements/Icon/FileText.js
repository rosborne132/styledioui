'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgFileText(props) {
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
                    'file-text_svg__feather file-text_svg__feather-file-text'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M14 2v6h6M16 13H8M16 17H8M10 9H8'
        })
    )
}

var _default = SvgFileText
exports['default'] = _default
