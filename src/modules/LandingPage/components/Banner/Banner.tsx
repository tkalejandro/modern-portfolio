import { Box, Grid, Paper, styled } from '@mui/material';
import React from 'react';
import { LandingPageIds } from '../../../../constants';


const Banner = () => {

    return (
        <Box 
        id={LandingPageIds.home}
        sx={(theme) =>({
            background: theme.palette.primary.main,
            border: "2px solid green",
            width: "100%",
            height: "100vh"
        })}>
            Banner
        </Box>
    );
};

export default Banner;