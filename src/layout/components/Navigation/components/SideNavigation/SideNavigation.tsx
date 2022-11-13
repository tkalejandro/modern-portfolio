import { Divider, Drawer, IconButton, Typography, useTheme } from '@mui/material'
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
    setThemeMode: (value: string) => void
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

    const theme = useTheme()

    const changeTheme = (value: string) => {
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
                    <MenuIcon  fontSize={bottomNavigation ? undefined : 'large'}/>
                {
                    bottomNavigation &&  <Typography variant={'caption'}>Menu</Typography>
                }
               
                
            </IconButton>
            <Drawer
                anchor={'right'}
                open={sideMenuOpen}
                onClose={toggleMenu}
            >
                <Box sx={{ my:1, p: 2, minWidth: bottomNavigation ? '200px' : '300px' }}>
                    <Typography variant="subtitle1">Menu</Typography>
                    <Box >
                        {
                            tabs.map(tab => {
                                return (
                                    <Link key={tab.name} href={tab.routePath}>
                                        <Box sx={{display: 'flex', alignItems: 'center',}}>
                                            <Box mr={1} sx={{}} component="span">{tab.icon}</Box>
                                            <Typography variant="body2" component="span">{tab.name}</Typography>
                                        </Box>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                    <Box my={1}>
                        <Divider />
                        <Typography variant="subtitle1">Theme</Typography>
                        <IconButton onClick={() => changeTheme('light')}>
                            <LightModeIcon color={theme.palette.mode === 'light' ? 'secondary' : undefined} />
                        </IconButton>
                        <IconButton onClick={() => changeTheme('dark')}>
                            <DarkModeIcon color={theme.palette.mode === 'dark' ? 'primary' :undefined} />
                        </IconButton>


                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default SideNavigation