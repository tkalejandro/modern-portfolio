import { Typography } from '@mui/material'
import { borderBottom, Box, Container } from '@mui/system'
import React from 'react'
import { Navigation } from '..'
import { LandingPageIds } from '../../../constants'
import { useAppSelector } from '../../../redux/hooks'
import { selectIsSmall } from '../../../redux/slices/applicationSlice'


interface HeaderProps {
    bottomNavigation?: boolean
}

/**
 * Header component. It will appear Top and Bottom from page
 * @param bottomNavigation Boolean to render the correct version of the Header 
 * @returns 
 */
const Header = ({ bottomNavigation }: HeaderProps): JSX.Element => {

    const value = useAppSelector((state) => state.landingPage.value)

    return (
        <Box
            component="header"
            sx={(theme) => ({
                boxShadow: 5,
                zIndex: 3,
                py: 1,
                position: 'fixed',
                bottom: bottomNavigation ? 0 : undefined,
                top: !bottomNavigation ? 0 : undefined,
                width: '100%',
                background: theme.palette.background.default,
            })}
        >
            <Container
                sx={{ display: 'flex', justifyContent: bottomNavigation ? 'center' : 'space-between', alignItems: 'center' }}
            >
                {
                    !bottomNavigation && <Typography component="h1" variant="h3">{"<Alejandro!>"}</Typography>
                }
                <Navigation bottomNavigation={bottomNavigation} />
            </Container>
        </Box>
    )
}

export default Header