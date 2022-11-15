import { Divider, Drawer, IconButton, List, ListItemButton, ListItemText, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { Tabs } from '../../../../../types/Layout';
import React, { useState } from 'react';


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

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setThemeMode(newAlignment);
    };


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
                <MenuIcon fontSize={bottomNavigation ? undefined : 'large'} />
                {
                    bottomNavigation && <Typography variant={'caption'}>Menu</Typography>
                }
            </IconButton>
            <Drawer
                anchor={'right'}
                open={sideMenuOpen}
                onClose={toggleMenu}
            >
                <Box sx={{ my: 1, p: 2, minWidth: bottomNavigation ? '200px' : '300px' }}>
                    <Typography variant="subtitle1">Menu</Typography>
                    <List >
                        {
                            tabs.map(tab => {
                                return (
                                    <Link key={tab.name} href={tab.routePath}>
                                        <ListItemButton >
                                            <ListItemText primary={tab.name} />
                                        </ListItemButton>
                                    </Link>
                                )
                            })
                        }
                    </List>
                    <Box my={1}>
                        <Divider />
                        <Typography variant="subtitle1">Theme</Typography>
                        <ToggleButtonGroup
                            fullWidth
                            color="primary"
                            value={theme.palette.mode}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                        >
                            <ToggleButton value="light">
                                <LightModeIcon />
                            </ToggleButton>
                            <ToggleButton value="dark">
                                <DarkModeIcon />
                            </ToggleButton>
                            <ToggleButton disabled value="electric">
                                <ElectricBoltIcon />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default SideNavigation