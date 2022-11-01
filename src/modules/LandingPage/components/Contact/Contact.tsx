import { Box, Grid, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Title from '../../../../components/Title/Title';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { AiFillSkype } from "react-icons/ai";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { ContactInformation, LandingPageIds } from '../../../../constants';
import { ContactForm } from './components';


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
            id={LandingPageIds.contact}
            sx={{
                width: "100%",
                minHeight: "50vh",
                scrollMarginTop: isSmall ? undefined : theme.spacing(15)
            }}>
            <Title text="Contact" />

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography mb={4}>For a faster reply, feel free to
                            {" "}
                            <Link href={ContactInformation.whatsApp} color="secondary" underline="none" fontWeight={700}>
                                What&apos;s App me
                            </Link>, otherwise please fill the contact form.</Typography>
                        <Typography component="h3" variant="h6">Details</Typography>
                        <Box sx={{
                            "& > div": {
                                display: 'flex', alignItems: 'center', mb: 1
                            }
                        }}>
                            <Box>
                                <AlternateEmailIcon sx={{ mr: 1 }} fontSize='inherit' color="secondary" />
                                <Typography>
                                    {ContactInformation.email}
                                </Typography>
                            </Box>
                            <Box>
                                <AiFillSkype style={{ marginRight: theme.spacing(1), color: theme.palette.secondary.main }} fontSize='inherit' />
                                <Typography>
                                    {ContactInformation.skype}
                                </Typography>
                            </Box>
                            <Box>
                                <PhoneAndroidIcon sx={{ mr: 1 }} fontSize='inherit' color="secondary" />
                                <Typography>
                                    {ContactInformation.phone}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ContactForm />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;
