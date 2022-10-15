import React, { FC } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children} : LayoutProps) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            
            <Footer />
        </>
    )
}

export default Layout

