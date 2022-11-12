import { IconButton, Link as Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExtensionIcon from '@mui/icons-material/Extension';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import { LandingPageIds, RoutesPath } from '../../../constants';
import Link from 'next/link';
import { SideNavigation } from './components';
import { Tabs } from '../../../types/Layout';


interface NavigationProps {
    bottomNavigation?: boolean
    setThemeMode: ( value : string) => void
}

/**
 * Navigation of the project.
 * @param bottomNavigation Boolean to render the correct version of the Header 
 * @returns 
 */
const Navigation = ({ bottomNavigation, setThemeMode }: NavigationProps): JSX.Element => {

    const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false)

    const tabs : Tabs[] = [
        { name: 'Home', icon: <HomeIcon />, routePath: RoutesPath.landingPage },
        { name: 'Resume', icon: <AssignmentIndIcon />, routePath: RoutesPath.resume },
        { name: 'Contact', icon: <EmailIcon />, routePath: RoutesPath.contact },
        { name: 'Projects', icon: <ExtensionIcon />, routePath: RoutesPath.projects }
    ]

    return (
        <Box
            component="nav"
            sx={{
                display: 'flex',
                 //Flex end is for the MENU
                justifyContent: bottomNavigation ? 'space-between' : 'flex-end',
                alignItems: 'center', width: '100%', maxWidth: '600px'
            }}>
            
            {
                bottomNavigation && tabs.map(tab => {
                    return (
                        <Link href={tab.routePath} key={tab.name}>
                            <IconButton color="secondary" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                {tab.icon}
                                <Typography variant={bottomNavigation ? 'caption' : 'body1'}>{tab.name}</Typography>
                            </IconButton>
                        </Link>
                    )
                })
            }

           <SideNavigation 
           tabs={tabs}
           bottomNavigation={bottomNavigation}
           setThemeMode={setThemeMode}
           />
        </Box>
    )
}

export default Navigation