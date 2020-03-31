import React from 'react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { Button } from './Button'

export default {
    component: Button,
    decorators: [withA11y],
    title: 'Button'
}

export const TestButton = () => (
    <Button buttonText="Test Button" onClick={action('clicked')} />
)

export const inaccessible = () => (
    <button style={{ backgroundColor: 'red', color: 'darkRed' }}>
        Inaccessible button
    </button>
)
