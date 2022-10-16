import { Typography } from "@mui/material";
import React from "react";

interface TitleProps {
    text: string
}
const Title = ({text} : TitleProps) => {

    
    return (
        <Typography my={2} component="h2" variant="h5">{"//"} {text}</Typography>      
    );
};

export default Title;