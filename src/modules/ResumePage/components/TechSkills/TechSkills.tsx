import { Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';

const TechSkills = () => {

  const skills: string[] = ['HTML', 'CSS', 'SCSS', 'Material UI' ,'Bootstrap', 'JavaScript', 'TypeScript', 'React', 'Express', 'GitHub', 'GitLab', 'API', 'SQL', 'TypeScript', 'MongoDb', 'NextJS', 'React Native (Expo CLI)', 'ASP.NET', 'C#']

  return (
    <Box>
      <Typography component="h2" variant="h5">Tech Skills</Typography>
      <Stack flexWrap='wrap' direction="row">
        {
          skills.map(skill => {
            return (
              <Box key={skill}>
                <Chip label={skill} sx={{m: 0.25,}}/>
              </Box>
            )
          })
        }
      </Stack>
    </Box>
  );
};

export default TechSkills;