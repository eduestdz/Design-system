import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState, type FC, useMemo } from 'react'

import '../styles/globals.css'
import { PaletteMode, Switch } from '@mui/material'

type EnhancedAppProps = AppProps & {
  Component: NextPage
}

const App: FC<EnhancedAppProps> = props => {
  const { Component, pageProps } = props
  const [mode, setMode] = useState<PaletteMode | undefined>('light')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode ?? 'light'
        }
      }),
    [mode]
  )

  const changeMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <Head>
        <title>DS</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {mode?.toUpperCase()}
        <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')} />
        {getLayout(<Component {...pageProps} changeMode={changeMode} />)}
      </ThemeProvider>
    </>
  )
}

export default App
