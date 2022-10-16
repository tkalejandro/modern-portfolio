import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Description from './components/Description';
import Interests from './components/Interests';

/**
 * Section about me. Photo, description and my interest as a person.
 * @returns 
 */
const AboutMe = () => {



    return (
        <Box my={10}>
            <Typography component="h2" variant="h5">{"//"} About Me</Typography>
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