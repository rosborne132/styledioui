'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgMail(props) {
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
                className: 'mail_svg__feather mail_svg__feather-mail'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d:
                'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M22 6l-10 7L2 6'
        })
    )
}

var _default = SvgMail
exports['default'] = _default
