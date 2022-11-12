import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2d2d2b',
          },
          secondary: {
            main: '#a5815f',
          },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',  
        },
        background: {
            default: '#f6f5f0',
            paper: '#fff',
        },
        divider: 'rgba(0,0,0,0.12)',
    },
    typography: {
        fontFamily: '',}
});

export default lightTheme