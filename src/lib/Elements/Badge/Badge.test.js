import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Badge } from './Badge'

describe('<Badge />', () => {
    afterEach(cleanup)

    test('renders badge component', () => {
        const { queryByTestId } = render(
            <Badge status="positive">Positive</Badge>
        )

        expect(queryByTestId('badge')).toBeTruthy()
    })
})
