import { Box, Grid, Paper, styled, Typography, useTheme } from '@mui/material';
import React from 'react';
import { OtherToolsInfo } from '../../../../types/LandingPage';
import { FaGitlab } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiAzuredevops } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { SiUbuntu } from "react-icons/si";
import { SiApple } from "react-icons/si";
import { SiWindows } from "react-icons/si";
import { SiTrello } from 'react-icons/si';
import Title from '../../../../components/Title/Title';


/**
 * Other tools might be interesting to show I know
 * @returns 
 */
const OtherTools = () => {

    const iconSize = 100
    const theme = useTheme()

    const iconProps = {
        size: iconSize,
        color: theme.palette.primary.dark
    }

    const otherTools: OtherToolsInfo[] = [
        { title: "Github", icon: <AiFillGithub {...iconProps} /> },
        { title: "Gitlab", icon: <FaGitlab {...iconProps} /> },
        { title: "AzureDevOps", icon: <SiAzuredevops {...iconProps} /> },
        { title: "Slack", icon: <SiSlack {...iconProps} /> },
        { title: "Ubuntu", icon: <SiUbuntu {...iconProps} /> },
        { title: "Mac", icon: <SiApple {...iconProps} /> },
        { title: "Windows", icon: <SiWindows {...iconProps} /> },
        { title: "Trello", icon: <SiTrello {...iconProps} /> },
    ]

    return (
        <Box
            my={10}
        //sx={{ minHeight: "50vh" }}
        >
            <Title text="Other Tools" />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    "& > div": {
                        flex: "25%",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }}
            >
                {
                    otherTools.map((tool, index) => {
                        return (
                            <Box key={index} my={2}>
                                {tool.icon}
                                <Typography mt={2} variant="caption">
                                    {tool.title}
                                </Typography>
                            </Box>)
                    })
                }
            </Box>
        </Box >
    );
};

export default OtherTools;