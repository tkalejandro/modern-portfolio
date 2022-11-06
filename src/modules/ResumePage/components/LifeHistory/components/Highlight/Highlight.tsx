import { Box, Typography } from '@mui/material';
import React from 'react';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface HighlightProps {
    /**
     * Title of the this group of Life highlights
     */
    subtitle: string
    /**
     * The highlights content
     */
    highlights?: string[]
}

const Highlight = ({ subtitle, highlights }: HighlightProps) => {

    return (
        <>
            <Accordion 
            // expanded={true} TO DO - For later with PDF maker
            sx={{boxShadow: 0,
            "&::before": {
                height: 0
            }
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="body1" fontStyle="italic">{subtitle}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box component="ul" pl={0} sx={{ listStyle: 'none' }}>
                        {
                            highlights?.map(hl => {
                                return (
                                    <Box sx={{ display: 'flex', py: 0.5 }} component="li" key={hl.slice(0, 4)}>
                                        <CropSquareIcon color='secondary' sx={{ position: 'relative', top: 4 }} fontSize='inherit' />
                                        <Typography ml={0.5} >
                                            {hl}
                                        </Typography>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    )
};

export default Highlight;