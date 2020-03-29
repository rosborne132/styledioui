'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgPieChart(props) {
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
                    'pie-chart_svg__feather pie-chart_svg__feather-pie-chart'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z'
        })
    )
}

var _default = SvgPieChart
exports['default'] = _default
