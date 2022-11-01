import { Box, css, keyframes } from '@mui/material';
import { FaCog } from "react-icons/fa";
import React from 'react';

/**
 * Cog Animation Component
 * @returns 
 */

interface CogAnimationProps {
    /**
     * Children
     */
    children: React.ReactNode
    /**
     * Information to place the Cogs
     */
    data: CogConfig[]
    /**
     * Overwrite overflow logic.
     */
    overflow?: string
}

export type CogConfig = {
    id: number,
    top: string | number,
    left: string | number,
    size: number | string,
    color: string,
    seconds: number,
    reverse: boolean,
}

const CogAnimation = ({ children, data, overflow }: CogAnimationProps) => {

    const move360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }`

    return (
        <Box sx={(theme) => ({ 
            height: '100%',
             width: '100%', 
             maxWidth: theme.breakpoints.values.xl, 
             position: 'relative', 
             overflow: overflow ?? 'hidden',
             margin: 'auto'
             })}>
            {children}
            {
                data?.map((cog) => {
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