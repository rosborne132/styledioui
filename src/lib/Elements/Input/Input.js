import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing, typography } from '../../shared/styles'

const Input = styled.input`
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: ${spacing.borderRadius.small}px;
    font-size: ${typography.size.s3}px;
    font-family: ${typography.type.primary};
    padding: ${spacing.padding.small}px;
    color: inherit;
    max-width: 100%;
    width: 100%;
`

const Label = styled.label`
    font-size: ${typography.size.s3}px;
    font-family: ${typography.type.primary};
`

const Error = styled.p`
    color: red;
`

export const FormInput = ({
    className,
    error,
    inputClassName,
    label,
    name,
    onChange,
    placeholder,
    type = 'text',
    value
}) => {
    return (
        <div className={inputClassName}>
            {label && <Label htmlFor={name}>{label}</Label>}
            <Input
                data-testid="formInput"
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={className}
                style={error ? { border: 'solid 1px red' } : {}}
            />
            {error && <Error data-testid="formError">{error}</Error>}
        </div>
    )
}

FormInput.propTypes = {
    /**
        Error determins input styles and displays an error message.
    */
    error: PropTypes.string,
    /**
        className is used to apply and override input styles.
    */
    className: PropTypes.string,
    /**
        inputClassName is used to apply and override input group styles.
    */
    inputClassName: PropTypes.string,
    /**
        Label is optional and displays above the input.
    */
    label: PropTypes.string,
    /**
        Name is required for input id and label.
    */
    name: PropTypes.string.isRequired,
    /**
        onChange callback function.
    */
    onChange: PropTypes.func.isRequired,
    /**
        Placeholder value is displayed in the input.
    */
    placeholder: PropTypes.string,
    /**
        Input is optional and can only be the selected types below.
    */
    type: PropTypes.oneOf(['text', 'number', 'password']),
    /**
        Current event value.
    */
    value: PropTypes.string
}
