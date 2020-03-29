'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgFilm(props) {
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
                className: 'film_svg__feather film_svg__feather-film'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('rect', {
            x: 2,
            y: 2,
            width: 20,
            height: 20,
            rx: 2.18,
            ry: 2.18
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5'
        })
    )
}

var _default = SvgFilm
exports['default'] = _default
