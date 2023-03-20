import React from 'react'
import Task from './Task';

interface columnProps {
    column: {
        id: number
        title: string
        tasks:
        {
            id: number
            title: string
            description: string
        }[]
    }

}

function Column({ column, children, onClick, stylings }: {
    column?: columnProps,
    children: any,
    onClick?: any,
    stylings?: any
}) {
    return (
        <div
            className={`flex-none w-[18rem] md:w-[20rem] m-4 p-4 md:py-4 rounded shadow ${stylings}`}
        >
            {children}
        </div>
    )
}

export default Column