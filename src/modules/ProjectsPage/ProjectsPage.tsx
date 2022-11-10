import { useMediaQuery, useTheme } from '@mui/material';
import { Projects } from './components';
import Layout from '../../layout/Layout';


/**
 * My project that I have done.
 * @returns List of all projects!
 */
const ProjectsPage = () => {

    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))


    return (
        <Layout>
            <Projects />
        </Layout>
    );
};

export default ProjectsPage;