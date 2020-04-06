import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import { Icon } from './Icon'
import { icons } from '../../shared/icons'

const Key = styled.div`
    color: #666;
    margin-left: 10px;
`

const Item = styled.li`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    flex: 0 1 20%;
    min-width: 120px;
    padding: 3px;
    ${props =>
        props.minimal &&
        css`
            flex: none;
            min-width: auto;
            padding: 0;
            background: #fff;
            border: 1px solid #666;
        `};
`

const List = styled.ul`
    display: flex;
    flex-flow: row wrap;
    list-style: none;
`

export default {
    title: 'Design System|Icon',
    component: Icon,
    decorators: [withKnobs]
}

export const allIcons = () => (
    <Fragment>
        There are {Object.keys(icons).length} icons
        <List>
            {Object.keys(icons).map(key => (
                <Item key={key}>
                    <Icon
                        icon={key}
                        size="l3"
                        aria-hidden
                        style={{
                            color: select('Color', ['black', 'blue', 'green'])
                        }}
                    />
                    <Key>{key}</Key>
                </Item>
            ))}
        </List>
    </Fragment>
)

export const tech = () => {
    const tech = [
        'auth0',
        'aws',
        'babel',
        'code',
        'css3',
        'dynamodb',
        'express',
        'graphql',
        'heroku',
        'html',
        'javascript',
        'jquery',
        'nextjs',
        'node',
        'npm',
        'postgresql',
        'react',
        'redux',
        's3',
        'storybook',
        'typescript'
    ]

    return (
        <List>
            {Object.keys(icons).map(key => {
                if (!tech.includes(key)) {
                    return null
                }

                return (
                    <Item key={key}>
                        <Icon
                            icon={key}
                            size="l3"
                            aria-hidden
                            style={{
                                color: select('Color', [
                                    'black',
                                    'blue',
                                    'green'
                                ])
                            }}
                        />
                        <Key>{key}</Key>
                    </Item>
                )
            })}
        </List>
    )
}

export const social = () => {
    const social = [
        'dev',
        'discord',
        'facebook',
        'github',
        'gitlab',
        'instagram',
        'linkedin',
        'medium',
        'twitter',
        'youtube'
    ]

    return (
        <List>
            {Object.keys(icons).map(key => {
                if (!social.includes(key)) {
                    return null
                }

                return (
                    <Item key={key}>
                        <Icon
                            icon={key}
                            size="l3"
                            aria-hidden
                            style={{
                                color: select('Color', [
                                    'black',
                                    'blue',
                                    'green'
                                ])
                            }}
                        />
                        <Key>{key}</Key>
                    </Item>
                )
            })}
        </List>
    )
}

export const inline = () => (
    <Fragment>
        this is an inline{' '}
        <Icon
            icon="facehappy"
            aria-label="Happy face"
            block={boolean('Display Block')}
        />{' '}
        icon (default)
    </Fragment>
)

inline.story = {
    name: 'Inline Icons'
}
