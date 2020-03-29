'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgLinkedin(props) {
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
                    'linkedin_svg__feather linkedin_svg__feather-linkedin'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d:
                'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 4,
            cy: 4,
            r: 2
        })
    )
}

var _default = SvgLinkedin
exports['default'] = _default
