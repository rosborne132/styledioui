import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

export default {
    title: 'Button',
    component: Button
}

export const Text = () => <Button buttonText="Test Button" />

export const Emoji = () => (
    <Button buttonText="😀 😎 👍 💯" onClick={action('clicked')} />
)
