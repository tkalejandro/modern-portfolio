import { Box } from '@mui/material'
import React from 'react'

const Footer = () : JSX.Element => {
  return (
    <Box 
    component="footer"
    sx={(theme) =>({
        background: theme.palette.primary.main,
        border: "2px solid green",
        width: "100%",
        height: "100vh"
    })}>
        Banner
    </Box>
  )
}

export default Footer