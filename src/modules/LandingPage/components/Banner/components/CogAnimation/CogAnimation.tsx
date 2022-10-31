import { Box, Container, css, Grid, keyframes, Paper, styled, Typography, useTheme } from '@mui/material';
import { FaCog } from "react-icons/fa";
import React from 'react';

/**
 * Cog Animation Component
 * @returns 
 */
const CogAnimation = () => {

    const theme = useTheme()

    const move360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
    type CogConfig = {
        id: number,
        top: string | number,
        left: string | number,
        size: number | string,
        color: string,
        seconds: number,
        reverse: boolean,
    }

    const data: CogConfig[] = [
        { id: 1, top: "100px", left: "-150px", size: '450px', color: theme.palette.grey[300], seconds: 80, reverse: true },
        { id: 2, top: "400px", left: "150px", size: '300px', color: theme.palette.background.paper, seconds: 40,reverse: false},
        { id: 3, top: "300px", left: "200px", size: '200px', color: theme.palette.secondary.main ,seconds: 20,reverse: true},
        { id: 4, top: "400px", left: "120px", size: '120px', color: theme.palette.text.primary, seconds: 10,reverse: false},
    ]
    return (
        <Box>
            {
                data.map((cog) => {
                    return (
                        <Box key={cog.id} component="span" >
                            <FaCog
                            color={cog.color}
                            size={cog.size}
                                css={css`
                                position: absolute;
                                top: ${cog.top};
                                left: ${cog.left};
                                animation: ${move360} ${cog.seconds}s linear infinite ${cog.reverse && 'reverse'}
                                `}
                            />
                        </Box>
                    )
                })
            }
        </Box>
    );
};

export default CogAnimation;