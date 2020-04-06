import React from 'react'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'

import { Avatar } from './Avatar'

export default {
    title: 'Design System|Avatar',
    parameters: {
        component: Avatar,
        componentSubtitle:
            'Displays an image that represents a user or organization'
    },
    decorators: [withKnobs]
}

export const standard = () => (
    <Avatar
        size="large"
        username="Tom Coleman"
        src="https://avatars2.githubusercontent.com/u/132554"
    />
)

standard.story = {
    name: 'Standard'
}

export const sizes = () => (
    <div>
        <Avatar
            size="large"
            username="Tom Coleman"
            src="https://avatars2.githubusercontent.com/u/132554"
        />
        <Avatar
            size="medium"
            username="Tom Coleman"
            src="https://avatars2.githubusercontent.com/u/132554"
        />
        <Avatar
            size="small"
            username="Tom Coleman"
            src="https://avatars2.githubusercontent.com/u/132554"
        />
        <Avatar
            size="tiny"
            username="Tom Coleman"
            src="https://avatars2.githubusercontent.com/u/132554"
        />
    </div>
)

sizes.story = {
    name: 'Sizes',
    parameters: { docs: { storyDescription: '4 sizes are supported.' } }
}

export const defaultValues = () => (
    <div>
        <Avatar username="Tom Coleman" />
        <Avatar username="Dominic Nguyen" />
        <Avatar username="Kyle Suss" />
        <Avatar username="Michael Shilman" />
    </div>
)

sizes.story = {
    name: 'Default Values',
    parameters: {
        docs: {
            storyDescription:
                'When no image is supplied to the `src` prop, Avatar displays initials. Avatar should be used sparingly in situations without access to images.'
        }
    }
}

export const loading = () => (
    <div>
        <Avatar size="large" loading />
        <Avatar size="medium" loading />
        <Avatar size="small" loading />
        <Avatar size="tiny" loading />
    </div>
)

loading.story = {
    name: 'Loading',
    parameters: {
        docs: {
            storyDescription:
                'The loading state is used when the image or username is, well, loading.'
        }
    }
}

export const playground = () => (
    <Avatar
        loading={boolean('Loading')}
        size={select('Size', ['tiny', 'small', 'medium', 'large'])}
        username="Dominic Nguyen"
        src="https://avatars2.githubusercontent.com/u/263385"
    />
)

playground.story = {
    name: 'Playground',
    parameters: {
        docs: {
            storyDescription:
                'Experiment with this story with Knobs addon in Canvas mode.'
        }
    }
}
