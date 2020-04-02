import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Button } from './Button'

export default {
    title: 'Design System|Button',
    parameters: {
        component: Button,
        componentSubtitle: 'Creates a reusable button component.',
        decorators: [withKnobs]
    }
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
