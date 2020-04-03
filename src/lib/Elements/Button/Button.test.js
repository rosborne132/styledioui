import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('<Button />', () => {
    test('', () => {
        const { debug } = render(
            <Button
                buttonText="Test Button"
                isLoading={false}
                onClick={() => console.log('This is a test')}
            />
        )
        debug()
    })
})
