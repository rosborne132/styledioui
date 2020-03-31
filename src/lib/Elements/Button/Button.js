import * as React from 'react'

export const Button = ({ buttonText, onClick }) => {
    return <button onClick={onClick}>{buttonText}</button>
}
