import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from '@mui/material'
import { lightTheme } from '../theme/lightTheme/lightTheme'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <ThemeProvider theme={lightTheme}>
    <Component {...pageProps} />
    </ThemeProvider>
  </div>
  )
}

export default MyApp