import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from 'react';
import { FullStackToolsInfo } from '../../../../types/LandingPage';
import { fullStackData } from './FullStackToolsData';
import Title from '../../../../components/Title/Title';


/**
 * Data Table of my fullstack knowledge
 * @returns 
 */
const FullStackTools = () => {

    const [myFullStackData, setMyFullStackData] = useState<FullStackToolsInfo[]>([])
    

    const theme = useTheme();

    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    /**
     * Function to assign Ids to  the data object.
     * @param data FullStackToolsInfo without IDs 
     * @returns FullStackToolsInfo with IDs
     */
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

    useEffect(() => {
        const dataWithId  = rowWithId(fullStackData)
        setMyFullStackData(dataWithId)
    }, [])

    /**
     * Columns of Table
     */

    //Complete
    const columns: GridColDef[] = [
        { field: 'tool', headerName: 'Tool', width: 100, flex: isSmall ? 0.7 : 0.2, },
        { field: 'stack', headerName: 'Stack', width: 100, flex:  isSmall ? 0.6 : 0.2, },
        { field: 'type', headerName: 'Type', width: 100, flex:  isSmall ? 0.5 : 0.2, },
        { field: 'opinion', headerName: 'Opinion', width: 100, flex: isSmall ? 1 : 1, },
    ];

    return (
        <Box
            my={20}
            sx={{minHeight: "50vh"}}
        >   
            <Title text="Fullstack Knowledge" />
            <Typography>The following table contain some of languages and tools that I&apos;m familiar. In each one i will describe my strength using the tool.</Typography>
            <Box
                my={4}
                sx={{maxWidth: "100%",height: isSmall ? "400px" : '600px'}}
            >
                <DataGrid
                    sx={{
                        borderColor: theme.palette.mode === 'light' ? null : 'secondary.dark',
                        '& .MuiDataGrid-cell': {
                            borderColor: theme.palette.mode === 'light' ? null : 'secondary.dark',
                        },
                        '& .MuiDataGrid-columnHeaders, .MuiDataGrid-footerContainer': {
                            borderColor: theme.palette.mode === 'light' ? null : 'secondary.light',
                        },
                        '& .MuiDataGrid-columnSeparator': {
                            color: theme.palette.mode === 'light' ? null : 'secondary.light'
                        },
                      }}
                    rows={myFullStackData}
                    columns={columns}
                    getRowHeight={() => isSmall ? 'auto' : undefined}
                />
            </Box>
        </Box>
    );
};

export default FullStackTools;