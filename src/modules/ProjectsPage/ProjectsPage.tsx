import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { Projects } from './components';
import Layout from '../../layout/Layout';
import { Container } from '@mui/system';
import React from 'react';
import Link from 'next/link';
import { Title } from '../../components';
interface ProjectsPageProps {
    setThemeMode: (value: string) => void
}
/**
 * My project that I have done.
 * @returns List of all projects!
 */
const ProjectsPage = ({ setThemeMode }: ProjectsPageProps) => {

    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Layout setThemeMode={setThemeMode}>
            <Container>
                <Projects />

                <Box sx={{ my: 10, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Title text="Do you find something interesting?" />      
                <Box sx={{ my: 10, width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Link href="/resume">
                        <Button variant="outlined" size="large" sx={{mr: 10}}>
                            Resume
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="contained" size="large" >
                            Get in touch
                        </Button>
                    </Link>
                </Box>
                </Box>
            </Container>
        </Layout>
    );
};

export default ProjectsPage;