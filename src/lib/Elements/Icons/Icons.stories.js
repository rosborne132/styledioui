import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { Icons } from './Icons'

export default {
    component: Icons,
    decorators: [withA11y],
    title: 'Icons'
}

export const SocialIcons = () => (
    <>
        <Icons.Twitter />
        <Icons.Github />
        <Icons.Linkedin />
        <Icons.Twitch />
        <Icons.Instagram />
    </>
)
