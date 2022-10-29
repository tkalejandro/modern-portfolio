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
    const columns: GridColDef[] = [
        { field: 'tool', headerName: 'Tool', width: 100, flex: isSmall ? undefined : 0.3, },
        { field: 'stack', headerName: 'Stack', width: 100, flex: isSmall ? undefined : 0.3, },
        { field: 'type', headerName: 'Type', width: 100, flex: isSmall ? undefined : 0.3, },
        { field: 'opinion', headerName: 'Opinion', width: 100, flex: 1 },
    ];

    return (
        <Box
            my={10}
            sx={{minHeight: "50vh"}}
        >   
            <Title text="Fullstack Knowledge" />
            <Typography>The following table contain some of languages and tools that I&apos;m familiar. In each one i will describe my strength using the tool.</Typography>
            <Box
                my={4}
                sx={{maxWidth: "100%",height: "600px"}}
            >
                <DataGrid
                    rows={myFullStackData}
                    columns={columns}
                    //pageSize={15}
                    getRowHeight={() => isSmall ? 'auto' : undefined}
                />
            </Box>
        </Box>
    );
};

export default FullStackTools;