import { Box, Container, Grid, Paper, styled } from '@mui/material';
import React from 'react';
import Layout from '../../layout/Layout';
import AboutMe from './components/AboutMe/AboutMe';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import FullStackTools from './components/FullStackTools/FullStackTools';
import OtherTools from './components/OtherTools/OtherTools';
import Projects from './components/Projects/Projects';


interface LandingPageProps {
    //title: string;
}

/**
 * LandingPageModule. This Module is to mainly showcase myself as web developer.
 * The structure is base in what I think is important.
 * @param param0 
 * @returns LandingPage Module.
 */
const LandingPage = ({ }: LandingPageProps) => {

    return (
        <>
            <Layout turnOffLayoutStandard={true}>
                <Banner />
                <Container>
                    <AboutMe />
                    <FullStackTools />
                    <OtherTools />
                    <Projects />
                </Container>
                <Contact />
            </Layout>
        </>
    );
};

export default LandingPage;