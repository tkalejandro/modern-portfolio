import { createTheme } from '@mui/material/styles'
import { FaRegIdBadge } from 'react-icons/fa';

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#a5815f',
          },
          secondary: {
            main: '#666666',
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
            default: '#222222',
            paper: '#424242',
        },
        divider: 'rgba(0,0,0,0.12)',
    },
    typography: {
        fontFamily: '',}
});

export default darkTheme