import React from 'react'
import { InputProps } from './types'

export const Input: React.FC<InputProps> = ({
    labelText,
    placeholder,
    id,
    name,
    type
}) => {
    return(
        <label htmlFor={id}>
            {labelText}
            <input placeholder={placeholder} type={type} name={name} id={id} />
        </label>
    )
}