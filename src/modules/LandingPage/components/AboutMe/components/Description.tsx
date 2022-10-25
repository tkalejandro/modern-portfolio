import { Box, Button, Typography } from '@mui/material';
import React from 'react';


/**
 * My description as a person.
 * @returns 
 */
const Description = () => {

    const linkedInUrl = 'https://www.linkedin.com/in/jorge-alejandro-coronado-cuesta/'

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
           
        }}>
            <Box sx={{
                "& > *": {
                    my:2,
                }
            }}>
                <Typography component="h3">Hello there! I&apos;m J. Alejandro Coronado,</Typography>
                <Typography >I&apos;m a Full Stack Web Developer from Digital Career Institute. I consider myself an enterprise, creative, and customer service-oriented Web Developer.</Typography>
                <Typography >Due to my past experience in hospitality, as an entrepreneur and my current job, I can say I fully understand the big picture when is working with companies, customers.</Typography>
                <Typography>My coding style its always oriented to Mobile First approach, caring also about Semantics, Accessibility and User experience. Furthermore I really enjoy Problem Solving and writing Web Apps Architecture from scratch.</Typography>
                <Typography>At the moment Im working as a FullStack WebDeveloper, expanding my knowledge daily, achieving goals and generating WebApps business solutions for the company.</Typography>
            </Box>

            <Button variant="contained" color="info" href={linkedInUrl}>LinkedIn</Button>

        </Box>
    );
};

export default Description;