import Header from './Header'
import Head from 'next/head'
import { theme } from './styled/theme'
import { ThemeProvider } from 'styled-components'

import { Container, Content } from './styled/layout'

const Layout = props => (
  <ThemeProvider theme={theme}>
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Header />
      <Content>
        {props.children}
      </Content>
    </Container>
  </ThemeProvider>
)

export default Layout
