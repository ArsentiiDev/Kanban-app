import React from 'react'

function Button({ children, type, onClick, value, spacing, primary = true }: {
    onClick?: any,
    value?: string,
    primary: boolean,
    spacing?: string,
    type?: any
    children: JSX.Element | JSX.Element[]
}) {
    const types = {
        primary: 'bg-darkBlue text-white hover:bg-white hover:text-darkBlue',
        secondary: 'bg-white text-darkBlue hover:bg-opacity-0 hover:outline hover:outline-darkBlue'
    }
    return (
        <button
            type={type || "button"}
            onClick={onClick}
            className={`${spacing ? spacing : 'py-3 my-4'}  w-full rounded-full font-bold tracking-wider text-sm ${primary ? types.primary : types.secondary}`}
        >
            {children}
        </button>
    )
}

export default Button