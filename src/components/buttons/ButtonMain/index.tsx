import React from 'react'
import { ButtonMainProps } from './types'


export const ButtonMain: React.FC<ButtonMainProps> = ({
    text,
    id,
    type
}) => {
    return(
        <button className={id} type={type} id={id} name={id}>
            {text}
        </button>
    )
}