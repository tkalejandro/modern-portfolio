import { Box, Container, Grid, Paper, styled } from '@mui/material';
import React from 'react';
import Layout from '../../layout/Layout';
import { Contact, Education, Header, HonorAndAwards, Interests, Languages, OtherSkills, Photo, TechSkills, VolunteerExperience, WorkExperience } from './components';


interface ResumePageProps {
    //title: string;
}

/**
 * ResumePageModule. This Module is to mainly showcase myself as web developer.
 * The structure is base in what I think is important.
 * @param param0 
 * @returns ResumePage Module.
 */
const ResumePage = ({ }: ResumePageProps) => {
    
    return (
       
            <Layout>
               <Header />
               {/* <Photo /> */}
               <Contact />
               <TechSkills/>
               <Languages />
               <WorkExperience />
               <OtherSkills />
               <Education />
               <HonorAndAwards />
               <VolunteerExperience />
               <Interests />        
            </Layout>
       
    );
};

export default ResumePage;