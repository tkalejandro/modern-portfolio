import { Container } from '@mui/material'
import React, { FC } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

interface LayoutProps {
    children: React.ReactNode;
    turnOffLayoutStandard?: boolean
}

/**
 * Layout of the project
 * @param children Childrens of the component
 * @param turnOffLayoutStandard  Make it false to turn off the intitial standard. Make sure you add a container to the components where you need the layout.
 * @returns 
 */
const Layout = ({children, turnOffLayoutStandard} : LayoutProps) => {
    return (
        <>
            <Header />
            <Container
            maxWidth={turnOffLayoutStandard ? false : "lg"}
            sx={{
                padding: turnOffLayoutStandard ?  "0 !important" : ""
            }}>
            <main>{children}</main>
            </Container>  
            <Footer />
        </>
    )
}

export default Layout

