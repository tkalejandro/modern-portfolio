import { createTheme } from '@mui/material/styles'
import { FaRegIdBadge } from 'react-icons/fa';

const darkTheme = createTheme({
    palette: {
        mode:'dark',
        primary: {
            main: '#a5815f',
          },
          secondary: {
            main: '#888888',
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
            paper: '#2f2f2f'  
        },
        divider: 'rgba(0,0,0,0.12)',
    },
    typography: {
        fontFamily: '',}
});

export default darkTheme