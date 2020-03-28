import * as React from 'react'

export type ButtonProps  = {
    buttonText: string
}

export const Button = ({ buttonText }: ButtonProps) => {
    return <button>{buttonText}</button>
}