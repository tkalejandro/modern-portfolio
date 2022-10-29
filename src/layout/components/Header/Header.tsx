import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { Navigation } from '..'


interface HeaderProps {
    bottomNavigation?: boolean
}

/**
 * Header component. It will appear Top and Bottom from page
 * @param bottomNavigation Boolean to render the correct version of the Header 
 * @returns 
 */
const Header = ({ bottomNavigation }: HeaderProps): JSX.Element => {
    return (
        <Box component="header"
            sx={(theme) =>({
                zIndex: 3,
                py: bottomNavigation ? 0.2 : 0,
                position: bottomNavigation ? 'fixed' : 'relative',
                bottom: 0,
                width: '100%',
                 background: theme.palette.background.default
            })}
        >
            <Container
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                {
                    !bottomNavigation && <Typography component="h1" variant="h2">{"<Alejandro!>"}</Typography>
                }
                <Navigation bottomNavigation={bottomNavigation} />
            </Container>
        </Box>
    )
}

export default Header