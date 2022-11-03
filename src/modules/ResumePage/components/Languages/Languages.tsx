import { Box, Typography } from '@mui/material';
import React from 'react';
import { LanguageLevel } from '../../../../enums/ResumePage';
import { LanguagesType } from '../../../../types/ResumePage';

const Languages = () => {

  const languages: LanguagesType[] = [
    { language: 'Spanish', level: LanguageLevel.Native },
    { language: 'English', level: LanguageLevel.Full },
    { language: 'German', level: LanguageLevel.Limited },
    { language: '中文', level: LanguageLevel.Basic }
  ]

  return (
    <Box sx={{ py: 1 }}>
      <Typography component="h2" variant="h5">Languages</Typography>
      <Box>
        {
          languages.map(lang => {
            return (
              <Typography my={1} key={lang.language} sx={{display: 'flex', flexDirection:'column'}}>
                <Typography component="span" mr={2}>
                  {lang.language}
                </Typography>
                <Typography component="span" color="secondary" fontStyle='italic' variant="caption">
                  {lang.level}
                </Typography>
              </Typography>)
          })
        }
      </Box>
    </Box>
  );
};

export default Languages;