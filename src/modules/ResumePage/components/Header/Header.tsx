import { Box, Typography } from '@mui/material';
import React from 'react';

/**
 * Name and current role.
 * @returns 
 */
const Header = () => {
    return (
        <Box sx={(theme) => ({
            p: 1,
            color: theme.palette.secondary.contrastText,
            background: theme.palette.secondary.main
        })}>
            <Typography component="h1" variant="h4" sx={{ display: 'flex', flexDirection: 'column' }}>
                J. Alejandro Coronado Cuesta
                <Typography component="span">Full-Stack Web Developer</Typography>
            </Typography>
        </Box>
    );
};

export default Header;