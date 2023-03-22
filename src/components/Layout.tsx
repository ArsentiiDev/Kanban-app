import React, { useEffect } from 'react'
import Navbar from './Navbar';
import { AppProps } from 'next/app';
import Sidebar from './Sidebar';
import { kanbanBoards } from './../Types/KanbanTypes';

function Layout({ children, boards }: {
    children: JSX.Element[],
    boards: kanbanBoards[] | []
}) {


    return (
        <>
            <Navbar boards={boards} />
            <Sidebar boards={boards} />
            <main>{children}</main>
        </>
    )
}

export default Layout