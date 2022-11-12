import { useMediaQuery, useTheme } from '@mui/material';
import { Projects } from './components';
import Layout from '../../layout/Layout';

interface ProjectsPageProps {
    setThemeMode: (value : string) => void
}
/**
 * My project that I have done.
 * @returns List of all projects!
 */
const ProjectsPage = ({setThemeMode} : ProjectsPageProps) => {

    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Layout setThemeMode={setThemeMode}>
            <Projects />
        </Layout>
    );
};

export default ProjectsPage;