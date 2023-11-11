import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { FC } from 'react'
import theme from '../theme/themes'

import '../styles/globals.css'

type EnhancedAppProps = AppProps & {
  Component: NextPage
}

const App: FC<EnhancedAppProps> = props => {
  const { Component, pageProps } = props

  const getLayout = Component.getLayout ?? (page => page)

  return (
    <>
      <Head>
        <title>DS</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  )
}

export default App
