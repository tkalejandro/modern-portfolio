import { Box, Button, Grid, Link, Paper, styled, TextField, Typography, useTheme } from '@mui/material';
import React from 'react';
import Title from '../../../../components/Title/Title';
import { ContactInformation } from '../../../../constants';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { AiFillSkype } from "react-icons/ai";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { GetStaticProps, InferGetStaticPropsType } from 'next'


/**
 * Contact section. This is how people can get it contact.
 * @returns 
 */
const Contact = () => {

    const theme = useTheme()

    return (
        <Box sx={{
            width: "100%",
            minHeight: "50vh"
        }}>
            <Title text="Contact" />

            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography mb={4}>For a faster reply, feel free to
                            {" "}
                            <Link href="#" color="primary" underline="none">
                                What&apos;s App me
                            </Link>, otherwise please fill the contact form.</Typography>
                        <Typography component="h3" variant="h6">Details</Typography>
                        <Box sx={{
                            "& > *": {
                                display: 'flex', alignItems: 'center', mb: 1
                            }}}>
                            <Typography>
                                <AlternateEmailIcon sx={{ mr: 1 }} fontSize='inherit' color="primary" />
                                tk.jalejandro@gmail.com
                            </Typography>
                            <Typography>
                                <AiFillSkype style={{ marginRight: theme.spacing(1), color: theme.palette.primary.main }} fontSize='inherit' />
                                tkalejandro
                            </Typography>
                            <Typography>
                                <PhoneAndroidIcon sx={{ mr: 1 }} fontSize='inherit' color="primary" />
                                +49 1512 715 6872
                            </Typography>
                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            "& > *": {
                                mb: 2,
                            }
                        }}
                    >
                        <TextField
                            fullWidth
                            error
                            id="fullName"
                            label="Full name"
                            placeholder="Alexo Grossi"
                        />
                        <TextField
                            fullWidth
                            error
                            id="yourEmail"
                            label="Your email"
                            placeholder="alexo@grossi.com"
                        />
                        <TextField
                            fullWidth
                            id="yourMessage"
                            label="Your message"
                            multiline
                            rows={5}
                            placeholder={`Hello... Buenos dias...\nGuten Tag... 早上好... \n\n...Alejandro / 安黎...`}
                        />
                        <Button variant="contained" color="primary" sx={{ alignSelf: 'center', mt: 2 }}>
                            Send Message
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;
