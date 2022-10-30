import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { ContactInformation } from '../../../constants'

const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        background: theme.palette.background.default,
        border: "2px solid green",
        width: "100%",
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'

      })}>
      <Typography component="h2" variant="h3" textAlign="center">J. Alejandro Coronado</Typography>

      <Box>
        <Typography component="h3" variant="h4" textAlign="center">Tech Education</Typography>
        <Image
          src="/images/dciLogo.png"
          alt="DCI Logo"
          width={300}
          height={250}
          objectFit="contain"
          blurDataURL="/images/dciLogo.png"
          placeholder="blur"
        />
      </Box>
      <Box>
        <Typography component="h3" variant="h4" textAlign="center">Social Links</Typography>
        <Box>
          <Link href={ContactInformation.github}>Github</Link>
        </Box>
        <Box>
          <Link href={ContactInformation.gitlab}>Gitlab</Link>
        </Box>
        <Box>
          <Link href={ContactInformation.gitlab}>LinkedIn</Link>
        </Box>
      </Box>


      <Typography>J. Alejandro Coronado</Typography>
    </Box>
  )
}

export default Footer