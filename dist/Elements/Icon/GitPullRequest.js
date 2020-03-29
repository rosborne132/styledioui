'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgGitPullRequest(props) {
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
                    'git-pull-request_svg__feather git-pull-request_svg__feather-git-pull-request'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 18,
            cy: 18,
            r: 3
        }),
        /*#__PURE__*/ React.createElement('circle', {
            cx: 6,
            cy: 6,
            r: 3
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M13 6h3a2 2 0 012 2v7M6 9v12'
        })
    )
}

var _default = SvgGitPullRequest
exports['default'] = _default
