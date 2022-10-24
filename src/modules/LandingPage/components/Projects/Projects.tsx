import { Box, Grid, Paper, styled } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import projectData from './ProjectsData';
import { FaGitlab, FaGithub } from "react-icons/fa";
import { BiWorld, BiGroup } from "react-icons/bi";


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

/**
 * My project that I have done.
 * @returns List of all projects!
 */
const Projects = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const projectsSorted = projectData.sort((d1, d2) => new Date(d1.startingDate).getTime() - new Date(d2.startingDate).getTime()).reverse();
    return (
        <Box my={10}
            sx={{ minHeight: "50vh", flexWrap: 'wrap', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
            {
                projectsSorted.map(project => {

                    
                    return (
                        <Card key={project.name} sx={{ maxWidth: 345, my: 2, boxShadow: 5 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {project.name.slice(0, 1)}
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={project.name}
                                subheader={project.startingDate.toLocaleDateString(undefined, { day: undefined, month: 'long', year: 'numeric' })}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={project.image.src}
                                alt={project.image.alt}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tools: {project.tools}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                {
                                    project.gitlab != null && <IconButton 
                                    color={project.gitlab  ? 'success' : project.gitlab === '' ? 'info' : undefined}
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
    );
};

export default Projects;