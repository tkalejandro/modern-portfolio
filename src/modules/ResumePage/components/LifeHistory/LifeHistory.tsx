import { Box, Typography } from '@mui/material';
import React from 'react';
import { LifeHighlights } from '../../../../types/ResumePage';
import CropSquareIcon from '@mui/icons-material/CropSquare';

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
            <Typography component="h2" variant="h4" fontWeight='700'>{mainTitle}</Typography>
            {
                data.map(item => {
                    const { title,
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
                        <Box key={title} py={1}>
                            <Typography component="h3" color="secondary.dark" fontWeight='700' variant="h5">{title}</Typography>
                            <Typography variant="subtitle1">{entity}</Typography>
                            {/* DATE AND LOCATION */}
                            <Box py={0.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontStyle: "italic" }}>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography color="secondary.light">{startDate.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit' })}</Typography>
                                    {
                                        endDate
                                            ? <Typography color="secondary.light" ml={1}>{'-'} {endDate.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit' })}</Typography>
                                            : <Typography color="secondary.light" ml={1}> {'-'} Present</Typography>
                                    }

                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography color="secondary.light">{city && `${city},`} {country}</Typography>
                                    {
                                        online && <Typography color="secondary.light" ml={1}>{' (Online)'}</Typography>
                                    }
                                </Box>
                            </Box>
                            {/* Explanatio needed */}
                            {
                                explanation && <Typography py={0.5} variant="body2" fontStyle="italic" sx={(theme) => ({ color: theme.palette.grey[500] })}>{explanation}</Typography>
                            }
                            {/* SubTitle */}
                            <Typography variant="body1" fontStyle="italic">{subtitle}</Typography>
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
                        </Box>
                    )
                })
            }
        </Box>
    )
};

export default LifeHistory;