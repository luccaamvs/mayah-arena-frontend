import React from 'react'
import { InputProps } from './types'

export const Input: React.FC<InputProps> = ({
    labelText,
    placeholder,
    id,
    name,
    type,
    handle
}) => {
    return(
        <label htmlFor={id}>
            {labelText}
            <input onChange={handle} placeholder={placeholder} type={type} name={name} id={id} />
        </label>
    )
}