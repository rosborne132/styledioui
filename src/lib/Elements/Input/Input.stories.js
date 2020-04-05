import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import { FormInput } from './Input'

export default {
    title: 'Design System|Input',
    component: FormInput,
    decorators: [withKnobs]
}

export const noLabel = () => (
    <FormInput
        name="username"
        type={select('Type', ['text', 'number', 'password'])}
        value={text('Input', 'Hello')}
        onChange={() => console.log('Hello')}
        placeholder="Enter username..."
        className="input"
        required
    />
)

noLabel.story = {
    name: 'No Labels'
}

export const withLabel = () => (
    <FormInput
        label="username"
        name="username"
        type={select('Type', ['text', 'number', 'password'])}
        value={text('Input', 'Hello')}
        onChange={() => console.log('Hello')}
        placeholder="Enter username..."
        className="input"
        required
    />
)

withLabel.story = {
    name: 'With Labels'
}

export const withError = () => (
    <FormInput
        error={text('Error', 'Input invalid')}
        label="username"
        name="username"
        type={select('Type', ['text', 'number', 'password'])}
        value={text('Input', 'Hello')}
        onChange={() => console.log('Hello')}
        placeholder="Enter username..."
        className="input"
        required
    />
)

withError.story = {
    name: 'With Error'
}
