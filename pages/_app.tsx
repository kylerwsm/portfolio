import React from 'react'
import Head from 'next/head'
import { AppPropsType } from 'next/dist/next-server/lib/utils'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../styles/theme'

export default function MyApp({ Component, pageProps }: AppPropsType) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
    AOS.init({ once: true })
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Kyler Wong</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="What is Kyler Wong?" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ overflowX: 'hidden' }}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}
