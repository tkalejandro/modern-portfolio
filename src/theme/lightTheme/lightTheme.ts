import { createTheme } from '@mui/material/styles'
import { FaRegIdBadge } from 'react-icons/fa';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#a5815f',
            light: 'rgb(183, 154, 127)',
            dark: 'rgb(115, 90, 66)',
            contrastText: '#fff'
        },
        secondary: {
            main: '#f50057',
            light: 'rgb(247, 51, 120)',
            dark: 'rgb(171 , 0, 60)',
            contrastText: '#fff'
        },
        error: {
            main: '#8a3731',
            light: 'rgb(161, 95, 90)',
            dark: 'rgb(96, 38, 34)',
            contrastText: '#fff'
        },
        warning: {
            main: '#ff9800',
            light: '#ffb74d',
            dark: '#f57c00',
            contrastText: 'rgba(0,0,0,0.87)'
        },
        info: {
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#19762d',
            contrastText: '#fff'
        },
        success: {
            main: '#4caf50',
            light: '#81c784',
            dark: '#388e3c',
            contrastText: 'rgba(0,0,0,0.87)'
        },
        background: {
            default: '#fafafa',
            paper: '#fff',
        },
        divider: 'rgba(0,0,0,0.12)',
        
    },
    typography: {
        fontFamily: 'Anonymous Pro',}
});