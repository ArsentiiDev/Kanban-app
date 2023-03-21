import React, { useEffect } from 'react'
import Navbar from './Navbar';
import { AppProps } from 'next/app';
import Sidebar from './Sidebar';

function Layout({ children, boards }: {
    children: any,
    boards: Object[]
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