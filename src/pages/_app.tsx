import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { darkTheme, lightTheme } from '../theme'


function MyApp({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = useState<string>('light')
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
          <Component 
          setThemeMode={setThemeMode}
          {...pageProps} />
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default MyApp