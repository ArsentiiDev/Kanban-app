import React from 'react'
import { columns } from './../Types/KanbanTypes';

function Column({ children, onClick, stylings }: {
    children: React.ReactNode,
    onClick?: () => any,
    stylings?: string
}) {
    return (
        <div
            className={`flex-none w-[18rem] md:w-[20rem] m-4 p-4 pt-6 rounded shadow ${stylings}`}
        >
            {children}
        </div>
    )
}

export default Column