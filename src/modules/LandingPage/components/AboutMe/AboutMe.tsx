import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
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
        my={20} id={LandingPageIds.about}>
            <Title text="About Me" />      
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}
                    sx={{
                        display: "flex",
                        justifyContent: isSmall ? "center" : 'flex-start'
                    }}
                >       
                        <Box sx={{
                            borderRadius: 5,
                            boxShadow:10,
                            width: isSmall ? 200 : 250,
                            height:isSmall ?250  :300
                        }}>
                        <Image
                            src="/alejandroPhotos/jacc.jpeg"
                            alt="team"
                            width={isSmall ? 200 : 250}
                            height={isSmall ?250  :300}
                            objectFit="cover"
                            blurDataURL="/alejandroPhotos/jacc.jpeg"
                            placeholder="blur"
                        />
                        </Box>
                       
                </Grid>
                <Grid item xs={12} md={6}>
                    <Description />
                </Grid>
                <Grid item xs={12}>
                    <Interests />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;