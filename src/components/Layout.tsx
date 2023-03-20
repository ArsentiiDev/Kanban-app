import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { AppProps } from 'next/app';
import Sidebar from './Sidebar';

function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Navbar />
            <Sidebar />
            <main>{children}</main>
        </>
    )
}

export default Layout