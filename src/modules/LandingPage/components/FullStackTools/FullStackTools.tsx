import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowParams, GridRowsProp } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import React from 'react';
import { FullStackToolsInfo } from '../../../../types/LandingPage';
import { fullStackData } from './FullStackToolsData';


const FullStackTools = () => {

    const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    
    const rowWithId = (data: FullStackToolsInfo[]) => {

        const dataWithId = data.map((data: FullStackToolsInfo, index: number) => {
            return {
                id: index,
                tool: data.tool,
                stack: data.stack,
                type: data.type,
                opinion: data.opinion
            }
        })

        return dataWithId
    }

    const columns: GridColDef[] = [
        { field: 'tool', headerName: 'Tool', width: 100, flex:  isSmall ? undefined : 0.3, },
        { field: 'stack', headerName: 'Stack', width: 100, flex: isSmall ? undefined : 0.3, },
        { field: 'type', headerName: 'Type', width: 100, flex: isSmall ? undefined : 0.3, },
        { field: 'opinion', headerName: 'Opinion', width: 100, flex: 1 },

    ];

    return (
        <Box
        my={10}
        >
            <Typography component="h2" variant="h5">{"//"} Fullstack Knowledge</Typography>
            <Typography>The following table contain some of languages and tools that I'm familiar. In each one i will describe my strength using the tool.</Typography>

            <Box
                sx={{
                    maxWidth: "100%",
                    height: "400px"
                }}
            >
                <DataGrid
                    rows={rowWithId(fullStackData)}
                    columns={columns}
                    pageSize={10}
                    
                    getRowHeight={() => isSmall ? 'auto' : undefined}
                />
            </Box>



        </Box>
    );
};

export default FullStackTools;