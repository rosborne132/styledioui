import React from 'react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Button } from './Button'

export default {
    component: Button,
    decorators: [withA11y, withKnobs],
    title: 'Button'
}

export const TestButton = () => (
    <Button
        buttonText="Test Button"
        isLoading={boolean('Loading')}
        onClick={action('clicked')}
    />
)

export const Inaccessible = () => (
    <Button
        buttonStyles={{ backgroundColor: 'red', color: 'darkRed' }}
        buttonText="Inaccessible button"
        isLoading={boolean('Loading')}
        onClick={action('clicked')}
    />
)
