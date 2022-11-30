import { Grid,  Typography, useMediaQuery, useTheme } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import CodeIcon from '@mui/icons-material/Code';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

/**
 * My interests as a person.
 * @returns 
 */
const Interests = () => {

    
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const iconSize = isMd ? "80px" : "100px"


    return (

        <Grid
            container spacing={0}
            sx={{
                mt: 10,
                width: "100%",
                height: "100%",
            }}
        >
            <Grid item xs={6} md={3} 
            sx={{
                display: "flex",
                flexDirection:  isMd ? 'row' :"column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <AddReactionIcon sx={(theme) => ({ fontSize: iconSize, color: theme.palette.secondary.main })} />
                <Typography variant="caption" component="p" color="secondary">Leadership</Typography>
            </Grid>
            <Grid item xs={6} md={3} sx={{
                display: "flex",
                flexDirection:  isMd ? 'row' :"column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <ImportantDevicesIcon sx={(theme) => ({ fontSize: iconSize, color: theme.palette.secondary.main })} />
                <Typography variant="caption" component="p" color="secondary">Technology</Typography>
            </Grid>
            <Grid item xs={6} md={3} sx={{
                display: "flex",
                flexDirection:  isMd ? 'row' :"column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <CodeIcon sx={(theme) => ({ fontSize: iconSize, color: theme.palette.secondary.main })} />
                <Typography variant="caption" component="p" color="secondary">Coding</Typography>
            </Grid>
            <Grid item xs={6} md={3} sx={{
                display: "flex",
                flexDirection:  isMd ? 'row' :"column",
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