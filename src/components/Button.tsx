import React from 'react'

function Button({ triggerEvent, value, stylings, type }: {
    triggerEvent?: any,
    value: string,
    stylings: string,
    type?: any
}) {
    return (
        <button
            type={type || 'button'}
            className={`py-3 w-full rounded-full my-4 font-bold uppercase tracking-wider text-xs ${stylings}`}
        >
            {value}
        </button>
    )
}

export default Button