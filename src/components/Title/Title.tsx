import { Typography } from "@mui/material";
import React from "react";

interface TitleProps {
    text: string
}

/**
 * Main Titles of the project.
 * @param text 
 * @returns 
 */
const Title = ({ text }: TitleProps) => {


    return (
        <Typography my={2} component="h2" variant="h5">
            <Typography 
            component="span" 
            sx={(theme) => ({
                color: theme.palette.secondary.main
            })} 
            variant='h5'>
                {"//"}
                {" "}
            </Typography>
            {text}
        </Typography>
    );
};

export default Title;