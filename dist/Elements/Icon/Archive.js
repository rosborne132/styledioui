'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgArchive(props) {
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
                className: 'archive_svg__feather archive_svg__feather-archive'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M21 8v13H3V8M1 3h22v5H1zM10 12h4'
        })
    )
}

var _default = SvgArchive
exports['default'] = _default
