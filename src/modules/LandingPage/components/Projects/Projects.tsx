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

    return (
        <Box my={10}
            sx={{ minHeight: "50vh", flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {
                    projectData.map(project => {


                        return (
                            <Card key={project.name} sx={{ maxWidth: 345, my:2 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        {project.name.slice(0,1)}
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={project.name}
                                subheader="September 14, 2016"
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
                                <IconButton aria-label="add to favorites">
                                    <FaGithub />
                                </IconButton>
                                <IconButton aria-label="add to favorites">
                                    <FaGitlab />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <BiGroup />
                                </IconButton>
                                <IconButton aria-label="share">
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