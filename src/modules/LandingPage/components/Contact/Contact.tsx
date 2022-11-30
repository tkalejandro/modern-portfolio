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
            mt={10}
            sx={{
                width: "100%",
                minHeight: "50vh",
                height: isSmall ?  '100vh' : '50vh'       
            }}>
            
            <Box sx={(theme) => ({
                     height: '100%',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center',
                     background: theme.palette.primary.main,
                     color: theme.palette.primary.contrastText
            })}>
                <Title text="Contact" />
                <Typography textAlign='center' variant={isSmall ? 'h4' : 'h3'} py={5} >
                    Let&apos;s get in touch?
                </Typography>
                <Link href="/contact">
                    <Button size='large' variant="contained" sx={{
                        background: theme.palette.mode === 'light' ? theme.palette.secondary.main : theme.palette.background.default,
                        }}>
                        Yes!
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Contact;
