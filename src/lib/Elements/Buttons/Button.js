import * as React from 'react'

export const Button = ({ buttonStyles, buttonText, isLoading, onClick }) => {
    return (
        <button style={buttonStyles} onClick={onClick}>
            {isLoading ? 'loading...' : buttonText}
        </button>
    )
}
