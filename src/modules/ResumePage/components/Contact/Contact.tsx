import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { ContactInformation } from '../../../../constants';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {

    return (
        <Box sx={{
            py: 1,
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
                <PhoneAndroidIcon sx={{ mr: 1 }} fontSize='inherit' color="secondary" />
                <Typography>
                    {ContactInformation.phone}
                </Typography>
            </Box>
            <Box>
                <LocationOnIcon sx={{ mr: 1 }} fontSize='inherit' color="secondary" />
                <Typography>
                    {ContactInformation.address}
                </Typography>
            </Box>
            <Box>
            <LinkedInIcon sx={{ mr: 1 }} fontSize='inherit' color="secondary" />
                <Typography>
                    {ContactInformation.linkedIn}
                </Typography>
            </Box>
            <Box>
            <GitHubIcon sx={{ mr: 1 }} fontSize='inherit' color="secondary" />
                <Typography>
                    {ContactInformation.github}
                </Typography>
            </Box>
        </Box>
    )
};

export default Contact;