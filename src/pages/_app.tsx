import CssBaseline from '@mui/material/CssBaseline'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { type FC } from 'react'

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
        <title>Design System</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default App
