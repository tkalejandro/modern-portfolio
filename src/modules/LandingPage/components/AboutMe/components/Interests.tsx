import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import React from 'react';
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
            <Grid item xs={6}>
                <AddReactionIcon sx={(theme) =>({ fontSize: iconSize, color: theme.palette.primary.dark })} />
                <Typography variant="caption" component="p">Leadership</Typography>
            </Grid>
            <Grid item xs={6}>
                <ImportantDevicesIcon sx={(theme) =>({ fontSize: iconSize, color: theme.palette.primary.dark })} />
                <Typography variant="caption" component="p">Technology</Typography>
            </Grid>
            <Grid item xs={6}>
                <CodeIcon sx={(theme) =>({ fontSize: iconSize, color: theme.palette.primary.dark })} />
                <Typography variant="caption" component="p">Coding</Typography>
            </Grid>
            <Grid item xs={6}>
                <RocketLaunchIcon sx={(theme) =>({ fontSize: iconSize, color: theme.palette.primary.dark })} />
                <Typography variant="caption" component="p">Entrepreneurship</Typography>
            </Grid>
        </Grid>
    );
};

export default Interests;