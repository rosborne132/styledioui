import React from 'react'
import { Icons } from './Icons'

export default {
    component: Icons,
    decorators: [],
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
