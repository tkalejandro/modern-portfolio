import { Link, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExtensionIcon from '@mui/icons-material/Extension';
import EmailIcon from '@mui/icons-material/Email';

interface NavigationProps {
    bottomNavigation?: boolean
}

/**
 * Navigation of the project.
 * @param bottomNavigation Boolean to render the correct version of the Header 
 * @returns 
 */
const Navigation = ({ bottomNavigation }: NavigationProps): JSX.Element => {

    //TO DO SCROLL BEHEHAVIOR
    // Notes: Use type Button for link if using scrollTO
    return (
        <Box
            component="nav"
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center', width: '100%', maxWidth: '400px'
            }}>
            <Link href="#" underline="none" variant={bottomNavigation ? 'caption' : undefined} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <HomeIcon />
                Home
            </Link>
            <Link href="#" underline="none" variant={bottomNavigation ? 'caption' : undefined} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <AssignmentIndIcon />
                About
            </Link>
            <Link href="#" underline="none" variant={bottomNavigation ? 'caption' : undefined} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <ExtensionIcon />
                Projects
            </Link>
            <Link href="#" underline="none" variant={bottomNavigation ? 'caption' : undefined} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <EmailIcon />
                Contact
            </Link>
        </Box>
    )
}

export default Navigation