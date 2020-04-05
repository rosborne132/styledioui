import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'

import { FormInput } from './Input'

describe('Inputs', () => {
    describe('<FormInput />', () => {
        afterEach(cleanup)
        let defaultProps

        beforeEach(() => {
            const onChange = e => (defaultProps.value = e.target.value)
            defaultProps = {
                name: 'username',
                type: 'text',
                value: '',
                onChange,
                placeholder: 'Enter username...'
            }
        })

        test('can change input value', () => {
            const { getByTestId, rerender } = render(
                <FormInput {...defaultProps} />
            )

            const input = getByTestId('formInput')

            fireEvent.change(input, { target: { value: 'New value' } })

            rerender(<FormInput {...defaultProps} />)
            expect(input.value).toBe('New value')
        })

        test('input displays error', () => {
            const { getByTestId } = render(
                <FormInput {...defaultProps} error="Invalid Input" />
            )

            expect(getByTestId('formInput').style.border).toBe('1px solid red')
            expect(getByTestId('formError').textContent).toBe('Invalid Input')
        })
    })
})
