import { Box, Button, Container, Grid, Paper, styled } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { Title } from '../../components';
import Layout from '../../layout/Layout';
import { Contact, Education, Header, HonorAndAwards, Interests, Languages, OtherSkills, Photo, TechSkills, VolunteerExperience, WorkExperience } from './components';


interface ResumePageProps {
    //title: string;
    setThemeMode: (value: string) => void
}

/**
 * ResumePageModule. This Module is to mainly showcase myself as web developer.
 * The structure is base in what I think is important.
 * @param param0 
 * @returns ResumePage Module.
 */
const ResumePage = ({ setThemeMode }: ResumePageProps) => {

    return (

        <Layout setThemeMode={setThemeMode}>
            <Container>
                <Header />
                {/* <Photo /> */}
                <Contact />
                <TechSkills />
                <Languages />
                 <WorkExperience />
                <Education />
                <VolunteerExperience />
                <HonorAndAwards />
                <OtherSkills />
                <Interests />

                <Box sx={{ my: 20, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Title text="Do my profile match your needs?" />
                    <Box sx={{ my: 10, width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Link href="/projects">
                            <Button variant="outlined" size="large" sx={{ mr: 10 }}>
                                projects
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

export default ResumePage;