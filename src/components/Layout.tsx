import React, { useEffect } from 'react'
import Navbar from './Navbar';
import { AppProps } from 'next/app';
import Sidebar from './Sidebar';
import { kanbanBoards } from './../Types/KanbanTypes';

function Layout({ children }: {
    children: JSX.Element,
}) {


    return (
        <>
            <Navbar />
            <Sidebar/>
            <main>{children}</main>
        </>
    )
}

export default Layout