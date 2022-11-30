import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { LifeHighlights } from '../../../../types/ResumePage';
import { DateAndLocation, Highlight } from './components';

interface LifeHistoryProps {
    /**
     * Title of the this group of Life highlights
     */
    mainTitle: string
    /**
     * The highlights content
     */
    data: LifeHighlights[]
}

const LifeHistory = ({ mainTitle, data }: LifeHistoryProps) => {

    return (
        <Box py={1}>
            <Typography component="h2" variant="h5" >{mainTitle}</Typography>
            {
                data.map(item => {
                    const { 
                        id,
                        title,
                        entity,
                        startDate,
                        endDate,
                        explanation,
                        city,
                        country,
                        online,
                        subtitle,
                        highlights } = item
                    return (
                        <Box key={id} >
                            <Box py={1}>
                                <Typography component="h3"  variant="subtitle2">{title}</Typography>
                                <Typography color="secondary" variant="subtitle1">{entity}</Typography>
                                <DateAndLocation
                                    startDate={startDate}
                                    endDate={endDate}
                                    city={city}
                                    country={country}
                                    online={online}
                                />
                                {/* Explanatio needed */}
                                {
                                    explanation && <Typography py={0.5} variant="body2" fontStyle="italic" sx={(theme) => ({ color: theme.palette.grey[500] })}>{explanation}</Typography>
                                }
                                <Highlight
                                    subtitle={subtitle}
                                    highlights={highlights}
                                />
                            </Box>
                            <Divider />
                        </Box>
                    )
                })
            }
        </Box>
    )
};

export default LifeHistory;