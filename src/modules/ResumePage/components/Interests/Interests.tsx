import React from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';

/**
 * Some of my interests
 * @returns 
 */
const Interests = () => {
  const skills: string[] = [
    'Hospitality',
    'Coding',
    'Entrepreneurship',
    'Traveling',
    'Business',
    'Social Responsible',
    'Self-learning',
    'Environment',
    'Technology',
    'Web-App solutions'
  ]

  return (
    <Box sx={{py: 1}}>
      <Typography component="h2" variant="h5">Interests</Typography>
      <Stack flexWrap='wrap' direction="row">
        {
          skills.map(skill => {
            return (
              <Box key={skill}>
                <Chip variant="outlined" label={skill} sx={{m: 0.25,}}/>
              </Box>
            )
          })
        }
      </Stack>
    </Box>
  );
};

export default Interests;