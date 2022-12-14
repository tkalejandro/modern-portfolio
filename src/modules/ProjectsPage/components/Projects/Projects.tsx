import { Box, Button, Grid, Paper, styled, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FaGitlab, FaGithub } from "react-icons/fa";
import { BiWorld, BiGroup } from "react-icons/bi";
import SyncIcon from '@mui/icons-material/Sync';
import Link from 'next/link'
import { Title } from '../../../../components';
import { ProjectStatus } from '../../../../enums/LandingPage';
import { ProjectInfo } from '../../../../types/LandingPage';
import projectData from '../../../../../public/data/ProjectsData';


/**
 * My project that I have done.
 * @returns List of all projects!
 */
const ProjectsPage = () => {

    const [expanded, setExpanded] = useState<boolean>(false);
    const [myProjects, setMyProjects] = useState<ProjectInfo[]>([])

    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        setMyProjects(projectData)
    }, [])

    const imagePlacerholder = './images/placeholder.png'
    const projectsSorted = myProjects.sort((d1, d2) => new Date(d1.startingDate).getTime() - new Date(d2.startingDate).getTime()).reverse()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',

            }}
        >
            <Title text="Projects" />
            <Typography my={1}>These are my latests projects! Check my github for more.</Typography>
            <Box
                sx={{ minHeight: "50vh", flexWrap: 'wrap', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', }}>
                {
                    projectsSorted.map(project => {

                        const projectStatus = ProjectStatus.Active === project.status

                        return (
                            <Card key={project.id} sx={{ width: isSmall ? '100%' : 345, my: 2, mx: isSmall ? 0 : 2, boxShadow: 5 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={(theme) => ({ bgcolor: theme.palette.primary.light })} aria-label="recipe">
                                            {project.name.slice(0, 1)}
                                        </Avatar>
                                    }
                                    action={
                                        <Tooltip
                                            placement="top"
                                            title={projectStatus ? "This project still active." : "This project has concluded."}>
                                            <IconButton>
                                                {
                                                    project.status === ProjectStatus.Active
                                                        ? <SyncIcon color='info' />
                                                        : <CheckCircleIcon />
                                                }
                                            </IconButton>
                                        </Tooltip>
                                    }
                                    title={<Typography variant="subtitle1">{project.name}</Typography>}
                                    subheader={project.startingDate.toLocaleDateString(undefined, { day: undefined, month: 'long', year: 'numeric' })}
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={project.image.src ?? imagePlacerholder}
                                    alt={project.image.alt}
                                />
                                <CardContent
                                    sx={{ height: '140px' }}
                                >
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mt={1}>
                                        <Typography component="span" variant="body2" fontWeight="700">Tools:</Typography> {project.tools}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    {
                                        project.gitlab != null && <IconButton
                                            color={project.gitlab ? 'success' : project.gitlab === '' ? 'info' : undefined}
                                            href={project.gitlab ? project.gitlab : ''}
                                            aria-label="Portfolio link">
                                            <FaGitlab />
                                        </IconButton>
                                    }
                                    {
                                        project.github != null && <IconButton
                                            color={project.github ? 'success' : project.gitlab === '' ? 'info' : undefined}
                                            href={project.github ? project.github : ''}
                                            aria-label="Portfolio link">
                                            <FaGithub />
                                        </IconButton>
                                    }
                                    <IconButton
                                        color={project.teamWork ? 'success' : undefined}
                                        href={project.teamWork ? project.teamWork : ''}
                                        aria-label="Partners page">
                                        <BiGroup />
                                    </IconButton>
                                    <IconButton
                                        color={project.website ? 'success' : undefined}
                                        href={project.website ? project.website : ''}
                                        aria-label="Website">
                                        <BiWorld />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </Box>
           
        </Box>
    );
};

export default ProjectsPage;