import React from 'react'

import { Button } from './Button'
import { Icon } from '../Icon/Icon'

export default {
    title: 'Design System|Button',
    component: Button
}

export const allButtons = () => (
    <div>
        <Button appearance="primary">Primary</Button>
        <Button appearance="secondary">Secondary</Button>
        <Button appearance="tertiary">Tertiary</Button>
        <Button appearance="outline">Outline</Button>
        <Button appearance="primaryOutline">Outline primary</Button>
        <Button appearance="secondaryOutline">Outline secondary</Button>
        <Button appearance="primary" isDisabled>
            Disabled
        </Button>
        <br />
        <Button appearance="primary" isLoading>
            Primary
        </Button>
        <Button appearance="secondary" isLoading>
            Secondary
        </Button>
        <Button appearance="tertiary" isLoading>
            Tertiary
        </Button>
        <Button appearance="outline" isLoading>
            Outline
        </Button>
        <Button appearance="outline" isLoading loadingText="Custom...">
            Outline
        </Button>
        <br />
        <Button appearance="primary" size="small">
            Primary
        </Button>
        <Button appearance="secondary" size="small">
            Secondary
        </Button>
        <Button appearance="tertiary" size="small">
            Tertiary
        </Button>
        <Button appearance="outline" size="small">
            Outline
        </Button>
        <Button appearance="primary" isDisabled size="small">
            Disabled
        </Button>
        <Button appearance="outline" size="small" containsIcon>
            <Icon icon="link" aria-label="Link" />
        </Button>
        <Button appearance="outline" size="small">
            <Icon icon="link" />
            Link
        </Button>
    </div>
)

allButtons.story = {
    name: 'All Buttons'
}
