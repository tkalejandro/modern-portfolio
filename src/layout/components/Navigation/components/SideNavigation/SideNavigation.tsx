import { Drawer, IconButton, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { Tabs } from '../../../../../types/Layout';
import { useState } from 'react';


interface SideNavigationProps {
    bottomNavigation?: boolean
    tabs: Tabs[]
    setThemeMode: (value : string) => void
}

/**
 * SideNavigation of the project.
 * @param bottomNavigation Boolean to render the correct version of the Header 
 * @returns 
 */
const SideNavigation = ({ bottomNavigation, tabs, setThemeMode }: SideNavigationProps): JSX.Element => {

    const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false)
    const toggleMenu = () => {
        setSideMenuOpen(!sideMenuOpen)
    }

    const changeTheme = (value : string) => {
        setThemeMode(value)
    }
    return (
        <>
            <IconButton
                component="button"
                onClick={toggleMenu}
                color="secondary"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <MenuIcon />
                <Typography variant={bottomNavigation ? 'caption' : 'body1'}>Menu</Typography>
            </IconButton>
            <Drawer
                anchor={'right'}
                open={sideMenuOpen}
                onClose={toggleMenu}
            >
                <Box sx={{ p: 2, minWidth: bottomNavigation ? '200px' : '300px' }}>
                    <Typography variant="h5">Menu</Typography>
                    <Box >
                        {
                            tabs.map(tab => {
                                return (
                                    <Link key={tab.name} href={tab.routePath}>
                                        <Box>
                                            <Box component="span">{tab.icon}</Box>
                                            <Typography component="span">{tab.name}</Typography>
                                        </Box>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                    <Box>
                    <Typography variant="h6">Menu</Typography>
                    <IconButton onClick={() => changeTheme('light')}>
                    <LightModeIcon />
                    </IconButton>
                    <IconButton onClick={() => changeTheme('dark')}>
                        <DarkModeIcon />
                    </IconButton>
                       
                      
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default SideNavigation