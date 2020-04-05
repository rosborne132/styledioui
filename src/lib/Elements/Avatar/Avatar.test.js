import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('<Avatar />', () => {
    afterEach(cleanup)

    test('renders link component', () => {
        const { queryByTestId } = render(
            <Avatar
                size="large"
                username="Tom Coleman"
                src="https://avatars2.githubusercontent.com/u/132554"
            />
        )

        expect(queryByTestId('avatar')).toBeTruthy()
    })
})
