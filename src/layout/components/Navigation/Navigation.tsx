import { Link as Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExtensionIcon from '@mui/icons-material/Extension';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import { LandingPageIds, RoutesPath } from '../../../constants';
import Link from 'next/link';


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
            <Link href={RoutesPath.landingPage}>
                <Button color="secondary" underline="none" variant={bottomNavigation ? 'caption' : 'body1'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <HomeIcon />
                    Home
                </Button>
            </Link>
            <Link href={RoutesPath.resume}>
            <Button color="secondary" underline="none" variant={bottomNavigation ? 'caption' : 'body1'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <AssignmentIndIcon />
                Resume
            </Button>
            </Link>
            <Link href={RoutesPath.contact}>
                <Button  color="secondary" underline="none" variant={bottomNavigation ? 'caption' : 'body1'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <EmailIcon />
                    Contact
                </Button>
            </Link>
            <Link href={RoutesPath.projects}>
            <Button  color="secondary" underline="none" variant={bottomNavigation ? 'caption' : 'body1'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <ExtensionIcon />
                Projects
            </Button>
            </Link>
         

            <Button color="secondary" underline="none" variant={bottomNavigation ? 'caption' : 'body1'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <MenuIcon />
                Menu
            </Button>
        </Box>
    )
}

export default Navigation