import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Title from '../../../../components/Title/Title';
import Link from 'next/link';

/**
 * Contact section. This is how people can get it contact.
 * @returns 
 */
const Contact = () => {

    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            my={10}
            sx={{
                width: "100%",
                minHeight: "50vh",
                height: '50vh'
               
            }}>
            <Title text="Contact" />
            <Box sx={{
                     height: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center'
            }}>
                <Typography variant="h2" py={5} >
                    Would you like to get in touch?
                </Typography>
                <Link href="/contact">
                    <Button size='large' variant="contained">
                        Yes!
                    </Button>
                </Link>
            </Box>

        </Box>
    );
};

export default Contact;
