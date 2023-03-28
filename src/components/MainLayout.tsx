import Head from 'next/head'
import React from 'react'

interface MainLayoutProps {
    children: React.ReactNode,
    title?: string
}

function MainLayout({ children, title = "Next app" }: MainLayoutProps) {
    return (
        <>
            <Head>
                <title>{title} | Next project</title>
            </Head>
            {children}
        </>
    )
}

export default MainLayout