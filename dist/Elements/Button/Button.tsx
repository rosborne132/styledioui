import * as React from 'react'

export type ButtonProps = {
    buttonText: string
    onClick?: () => void
}

export const Button = ({ buttonText, onClick }: ButtonProps) => {
    return <button onClick={onClick}>{buttonText}</button>
}
