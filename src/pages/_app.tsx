import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from '@mui/material'
import { lightTheme } from '../theme/lightTheme/lightTheme'
import { Provider } from 'react-redux'
import { store } from '../redux/store'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default MyApp