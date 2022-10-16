import { Box, Grid, Paper, styled, Typography } from '@mui/material';
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

    const otherTools: OtherToolsInfo[] = [
        { title: "Github", icon: <AiFillGithub size={iconSize} /> },
        { title: "Gitlab", icon: <FaGitlab size={iconSize} /> },
        { title: "AzureDevOps", icon: <SiAzuredevops size={iconSize} /> },
        { title: "Slack", icon: <SiSlack size={iconSize} /> },
        { title: "Ubuntu", icon: <SiUbuntu size={iconSize} /> },
        { title: "Mac", icon: <SiApple size={iconSize} /> },
        { title: "Windows", icon: <SiWindows size={iconSize} /> },
        { title: "Trello", icon: <SiTrello size={iconSize} /> },
    ]

    return (
        <Box
            my={10}
            sx={{ minHeight: "50vh" }}>
            <Title text="Other Tools" />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    "& > div": {
                        flex: "20%",
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
                            <Box key={index} m={1}>
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