import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { ContactInformation } from '../../../../../constants';


/**
 * My description as a person.
 * @returns 
 */
const Description = () => {

    const linkedInUrl = ContactInformation.linkedIn

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Box>
                <Typography mb={1} component="h3">Hello there! I&apos;m J. Alejandro Coronado,</Typography>
                <Typography mb={1}>I&apos;m a Full Stack enterprise and customer service-oriented Web Developer.</Typography>
                <Typography mb={1}>Due to my past experience in hospitality, as an entrepreneur and my current job, I can say I fully understand the big picture when is working with companies, customers and business owners.</Typography>
                <Typography mb={1}>My coding style its always oriented to User experience and code level scalability.</Typography>
                <Typography mb={1}>Let&apos;s get in touch if there is something I can help you.</Typography>
            </Box>
            <Button sx={{mt: 2}} variant="contained" component="a" color="info" target='_blank' href={linkedInUrl}>LinkedIn</Button>
        </Box>
    );
};

export default Description;