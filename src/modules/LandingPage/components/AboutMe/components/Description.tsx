import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
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
                <Typography mb={1} component="h3">Hello there! <strong> I&apos;m J. Alejandro Coronado </strong>,</Typography>
                <Typography mb={1}>I&apos;m a <strong>Full Stack </strong>enterprise  and <strong> customer service-oriented Web Developer.</strong></Typography>
                <Typography mb={1}>Due to my past experience in hospitality, as an entrepreneur and my current job, I can say I fully understand the big picture when is working with companies, customers and business owners.</Typography>
                <Typography mb={1}>My <strong>coding style</strong> its always oriented to <strong>User Experience </strong>and code level <strong>scalability.</strong></Typography>
                <Typography mb={1}>Let&apos;s get in touch if there is something I can help you.</Typography>
            </Box>
            <Box sx={{ mt: 2,  width: '100%' }}>
                <Button sx={{mr: 5}} size="large"  variant="outlined" component="a"  target='_blank' href={linkedInUrl}>LinkedIn</Button>
                <Link href="/resume">
                    <Button variant="contained" size="large" >
                        Resume
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Description;