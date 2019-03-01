import { Fragment } from 'react'
import Header from './Header'
import Head from 'next/head'
import { theme } from './styled/theme'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, Container, Content } from './styled/layout'

const Layout = props => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width" />
        </Head>
        <Header />
        <Content>{props.children}</Content>
      </Container>
    </Fragment>
  </ThemeProvider>
)

export default Layout
