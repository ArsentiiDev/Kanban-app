import React from 'react'

function Button({ onClick, value, bgColor, textColor, type }: {
    onClick: Function,
    value: string,
    bgColor: string,
    textColor: string,
    type?: any
}) {
    return (
        <button
            type={type || 'button'}
            onClick={() => onClick('')}
            className={`py-3 w-full rounded-full my-4 bg-${bgColor} text-${textColor} font-bold uppercase tracking-wider text-xs`}
        >
            {value}
        </button>
    )
}

export default Button