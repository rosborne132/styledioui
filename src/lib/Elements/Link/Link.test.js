import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Link } from './Link'

describe('<Link />', () => {
    afterEach(cleanup)

    test('renders link component', () => {
        const { queryByTestId } = render(<Link>Test Button</Link>)

        expect(queryByTestId('link')).toBeTruthy()
    })
})
