import { Box, Container, Grid, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import { LandingPageIds } from '../../../../constants';

/**
 * Principal Banner. Quick information of my skills
 * @returns 
 */
const Banner = () => {

    const data: string[] = ['MongoDb', 'Express', 'SQL', 'ASP.NET', 'React', 'Javascript', 'Typescript', 'React Native']

    return (
        <Box
            id={LandingPageIds.home}
            sx={(theme) => ({
                background: theme.palette.background.default,
                border: "2px solid green",
                width: "100%",
                minHeight: "100vh",
                height: "100vh"
            })}>
            <Container sx={{ py:10, height: '100%', display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
                <Typography variant="h3">{"<Alejandro!>"}</Typography>
                <Typography variant="h4" fontWeight={700} color="secondary">Full-Stack Web-Developer</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center' }}>
                    {
                        data.map((str) => {
                            return <Typography 
                            variant='body2'
                            sx={{
                                my: 0.5,
                                mr: 1,
                                px: 1,
                                py: 0.5,
                                border: 1,
                                borderRadius: '12px'
                                
                            }}
                            my={0.5} mr={1} p={0.5} key={str}>{str}</Typography>
                        })
                    }

                </Box>
            </Container>
        </Box>
    );
};

export default Banner;