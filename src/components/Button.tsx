import React from 'react'

function Button({ onClick, value, stylings, type }: {
    onClick?: any,
    value: string,
    stylings: string,
    type?: any
}) {
    return (
        <button
            onClick={onClick}
            type={type || 'button'}
            className={`py-3 w-full rounded-full my-4 font-bold uppercase tracking-wider text-xs ${stylings}`}
        >
            {value}
        </button>
    )
}

export default Button