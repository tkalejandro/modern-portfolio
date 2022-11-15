import { Box, Container, Grid, Paper, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { CogAnimation } from '../../../../components';
import { CogConfig } from '../../../../components/CogAnimation/CogAnimation';
import { LandingPageIds } from '../../../../constants';


/**
 * Principal Banner. Quick information of my skills
 * @returns 
 */
const Banner = () => {

    const theme = useTheme()

    const data: string[] = ['MongoDb', 'Express', 'SQL', 'ASP.NET', 'React', 'Javascript', 'Typescript', 'React Native']

    const bigCogColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800]
    const cogdataSmall: CogConfig[] = [
        { id: 1, top: "100px", left: "-15%", size: '450px', color: bigCogColor, seconds: 80, reverse: true },
        { id: 2, top: "400px", left: "20%", size: '300px', color: theme.palette.background.paper, seconds: 40, reverse: false },
        { id: 3, top: "300px", left: "50%", size: '200px', color: theme.palette.secondary.main, seconds: 20, reverse: true },
        { id: 4, top: "400px", left: "75%", size: '120px', color: theme.palette.text.primary, seconds: 10, reverse: false },
    ]

    const cogdataMedium: CogConfig[] = [
        { id: 1, top: "20%", left: "-25%", size: '550px', color: bigCogColor, seconds: 80, reverse: true },
        { id: 2, top: "40%", left: "25%", size: '400px', color: theme.palette.background.paper, seconds: 40, reverse: false },
        { id: 3, top: "30%", left: "50%", size: '300px', color: theme.palette.secondary.main, seconds: 20, reverse: true },
        { id: 4, top: "45%", left: "75%", size: '240px', color: theme.palette.text.primary, seconds: 10, reverse: false },
    ]

    const cogdataLarge: CogConfig[] = [
        { id: 1, top: "20%", left: "-20%", size: '600px', color: bigCogColor, seconds: 80, reverse: true },
        { id: 2, top: "40%", left: "20%", size: '450px', color: theme.palette.background.paper, seconds: 40, reverse: false },
        { id: 3, top: "30%", left: "40%", size: '350px', color: theme.palette.secondary.main, seconds: 20, reverse: true },
        { id: 4, top: "45%", left: "60%", size: '290px', color: theme.palette.text.primary, seconds: 10, reverse: false },
        { id: 5, top: "40%", left: "80%", size: '240px', color: theme.palette.grey[700], seconds: 5, reverse: true },
    ]

    const cogdataExtraLarge: CogConfig[] = [
        { id: 1, top: "15%", left: "-15%", size: '650px', color: bigCogColor, seconds: 80, reverse: true },
        { id: 2, top: "38%", left: "18%", size: '500px', color: theme.palette.background.paper, seconds: 40, reverse: false },
        { id: 3, top: "30%", left: "40%", size: '400px', color: theme.palette.secondary.main, seconds: 20, reverse: true },
        { id: 4, top: "45%", left: "60%", size: '340px', color: theme.palette.text.primary, seconds: 10, reverse: false },
        { id: 5, top: "40%", left: "75%", size: '240px', color: theme.palette.grey[700], seconds: 5, reverse: true },
        { id: 6, top: "52%", left: "85%", size: '200px', color: theme.palette.grey[300], seconds: 2.5, reverse: false },

    ]

    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isXl = useMediaQuery(theme.breakpoints.up('xl'));
    console.log(isXl)


    const cogDataToUse = (): CogConfig[] => {
        if (isLg) {
            return cogdataExtraLarge
        } else if (isMd) {
            return cogdataLarge
        } else if (isSm) {
            return cogdataMedium
        } else {
            return cogdataSmall
        }
    }

    return (
        <Box
            id={LandingPageIds.home}
            sx={(theme) => ({
                background: theme.palette.background.default,
                width: "100%",
                minHeight: "100vh",
                height: "100vh",
                display:'flex',
                justifyContent: 'center',
                overflowX: 'hidden'
            })}>
            <CogAnimation
                data={cogDataToUse()}
                //TO DO - Fix this!
                overflow={isXl ? 'visible' : 'hidden'}
            >
                <Container sx={{ py: isXs ? 15 : 30, height: '100%', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <Box sx={{zIndex: 2}}>
                        
                        <Typography variant="h3">{"<Alejandro!>"}</Typography>
                        <Typography variant="h4" fontWeight={700} color="secondary">Full-Stack Web-Developer</Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center' }}>
                            {
                                data.map((str) => {
                                    return <Typography
                                        variant='body2'
                                        sx={{
                                            my: 0.5,
                                            mr: 1,
                                            px: 1,
                                            py: 0.5,
                                            border: 1,
                                            borderRadius: '12px'
                                        }}
                                        my={0.5} mr={1} p={0.5} key={str}>{str}</Typography>
                                })
                            }
                        </Box>
                    </Box>
                </Container>
            </CogAnimation>
        </Box>
    );
};

export default Banner;