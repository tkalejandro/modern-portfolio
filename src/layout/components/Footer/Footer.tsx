import { Box, Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { ContactInformation } from '../../../constants'
import { FaGitlab, FaGithub, FaLinkedin } from "react-icons/fa";


/**
 * Small summary of my studies and social link where to find me. 
 * @returns 
 */
const Footer = (): JSX.Element => {

  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm')); 
  
  const iconProps = {
    size: isSmall ? '50px' : '100px'
  }

  const flex = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }

  return (
    <Box
    py={10}
      component="footer"
      sx={(theme) => ({
        background: theme.palette.background.default,
        width: "100%",
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'

      })}>
      <Typography component="h2" variant={isSmall ? 'h4' : "h3"} textAlign="center">J. Alejandro Coronado</Typography>

      <Box>
        <Typography component="h3" variant={isSmall ? 'h5' : "h4"} textAlign="center">Tech Education</Typography>
        <Image
          src="/images/dciLogo.png"
          alt="DCI Logo"
          width={300}
          height={isSmall ? 150 : 200}
          objectFit="contain"
          blurDataURL="/images/dciLogo.png"
          placeholder="blur"
        />
      </Box>
      <Box>
        <Typography component="h3" variant={isSmall ? 'h5' : "h4"} textAlign="center">Social Links</Typography>
        <Box sx={{display: 'flex', alignItems:'center'}}>

          <Link href={ContactInformation.github} target="_blank" underline="none" m={2} color='secondary' sx={{...flex}}>
            <FaGithub {...iconProps} />
            Github</Link>
          <Link href={ContactInformation.gitlab} target="_blank" underline="none" m={2} color='secondary' sx={{...flex}}>
            <FaGitlab {...iconProps} />
            Gitlab</Link>
          <Link href={ContactInformation.linkedIn} target="_blank" underline="none" m={2} color='secondary' sx={{...flex}}>
            <FaLinkedin {...iconProps} />
            LinkedIn</Link>
        </Box>
      </Box>
      <Typography variant={isSmall ? 'h3' : "h3"}>{"</Alejandro¡>"}</Typography>
    </Box>
  )
}

export default Footer