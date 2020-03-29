import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

export default {
    title: 'Button',
    component: Button
}

export const TestButton = () => (
    <Button buttonText="Test Button" onClick={action('clicked')} />
)
