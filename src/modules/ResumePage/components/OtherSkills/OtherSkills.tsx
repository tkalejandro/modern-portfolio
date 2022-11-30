import { Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';

/**
 * Other Skills that could be interested to know
 * @returns 
 */
const OtherSkills = () => {
  const skills: string[] = [
    'Wordpress',
    'Trello',
    'Google Ads',
    'Dropbox',
    'Facebook Ads',
    'Slack',
    'Google Analytics',
    'Google Drive',
    'Microsoft Office',
    'Azure Dev'
  ]

  return (
    <Box sx={{py: 1}}>
      <Typography component="h2" variant="h5">Other Skills</Typography>
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

export default OtherSkills;