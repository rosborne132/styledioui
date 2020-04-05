import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { icons } from '../../shared/icons'
import { typography } from '../../shared/styles'

const Svg = styled.svg`
    display: ${props => (props.block ? 'block' : 'inline-block')};
    vertical-align: middle;
    shape-rendering: inherit;
    transform: translate3d(0, 0, 0);
`

const Path = styled.path`
    fill: currentColor;
`

export const Icon = ({ block = false, icon, size = 'm1', ...props }) => (
    <Svg
        data-testid="icon"
        viewBox="0 0 1024 1024"
        width={typography.size[size]}
        height={typography.size[size]}
        block={block}
        {...props}
    >
        <Path d={icons[icon]} />
    </Svg>
)

Icon.propTypes = {
    /**
        Boolean value that determines the icon block style.
    */
    block: PropTypes.bool,
    /**
        String that determine the icon displayed.
    */
    icon: PropTypes.string.isRequired,
    /**
        Determines the size of the icon.
    */
    size: PropTypes.oneOf(['s3', 'm2', 'm3', 'l1', 'l2', 'l3'])
}
