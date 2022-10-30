import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import CodeIcon from '@mui/icons-material/Code';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

/**
 * My interests as a person.
 * @returns 
 */
const Interests = () => {

    const iconSize = "100px"

    return (

        <Grid
            container spacing={0}
            sx={{
                width: "100%",
                height: "100%",
                "& > *": {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                },
            }}
        >
            <Grid item xs={6} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <AddReactionIcon sx={(theme) => ({ fontSize: iconSize, color: theme.palette.secondary.main })} />
                <Typography variant="caption" component="p" color="secondary">Leadership</Typography>
            </Grid>
            <Grid item xs={6} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <ImportantDevicesIcon sx={(theme) => ({ fontSize: iconSize, color: theme.palette.secondary.main })} />
                <Typography variant="caption" component="p" color="secondary">Technology</Typography>
            </Grid>
            <Grid item xs={6} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <CodeIcon sx={(theme) => ({ fontSize: iconSize, color: theme.palette.secondary.main })} />
                <Typography variant="caption" component="p" color="secondary">Coding</Typography>
            </Grid>
            <Grid item xs={6} sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <RocketLaunchIcon sx={(theme) => ({ fontSize: iconSize, color: theme.palette.secondary.main })} />
                <Typography variant="caption" component="p" color="secondary">Entrepreneurship</Typography>
            </Grid>
        </Grid>
    );
};

export default Interests;