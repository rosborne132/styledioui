'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

Object.defineProperty(exports, '__esModule', {
    value: true
})
exports['default'] = void 0

var React = _interopRequireWildcard(require('react'))

function SvgUploadCloud(props) {
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
                    'upload-cloud_svg__feather upload-cloud_svg__feather-upload-cloud'
            },
            props
        ),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M16 16l-4-4-4 4M12 12v9'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3'
        }),
        /*#__PURE__*/ React.createElement('path', {
            d: 'M16 16l-4-4-4 4'
        })
    )
}

var _default = SvgUploadCloud
exports['default'] = _default
