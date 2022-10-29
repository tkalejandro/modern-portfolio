import { Box, Grid, Paper, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Description from './components/Description';
import Interests from './components/Interests';
import Title from '../../../../components/Title/Title';
import { LandingPageIds } from '../../../../constants';

/**
 * Section about me. Photo, description and my interest as a person.
 * @returns 
 */
const AboutMe = () => {

    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm')); 

    return (
        <Box 
        sx={(theme) =>({scrollMarginTop: isSmall ? undefined : theme.spacing(15)})}
        my={10} id={LandingPageIds.about}>
            <Title text="About Me" />      
            <Grid container spacing={6}>
                <Grid item xs={12}
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    {/* TO DO - Gallery about me */}
                        <Image
                            style={{borderRadius: "25px"}}
                            src="/alejandroPhotos/jacc.jpeg"
                            alt="team"
                            width={350}
                            height={450}
                            objectFit="cover"
                            blurDataURL="/alejandroPhotos/jacc.jpeg"
                            placeholder="blur"
                        />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Description />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Interests />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;