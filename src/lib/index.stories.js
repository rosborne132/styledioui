import React from 'react'

export const Intro = () => (
    <div>
        <h1>Introduction to the StyledOUI design system!</h1>
        <p>
            This library is built with React and Styled Components. Learn more
            at <a href="https://learnstorybook.com">Learn Storybook</a>.
        </p>
    </div>
)

export default {
    title: 'Design System|Introduction',
    parameters: {
        component: Intro,
        componentSubtitle:
            'This is an introduction to all of the components that are in the StyledOUI component library.'
    }
}
