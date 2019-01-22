import React from 'react'
import App, { Container } from 'next/app'
import getCookies from 'next-cookies'
import { Input, Form, Row, Label } from '../components/styled/form'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    let requireLogin = false
    if (ctx.req && ctx.req.url.indexOf('/admin') === 0) {
      const cookies = getCookies(ctx)
      requireLogin = typeof cookies[process.env.COOKIE_NAME] === 'undefined'
    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps, requireLogin }
  }
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: ''
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    this.login()
  }
  login = async () => {
    const rawResponse = await fetch('/api/check', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: this.state.login,
        password: this.state.password
      })
    })
    const content = await rawResponse.json()
    if (content.ok) {
      window.location.reload()
    }
  }
  render() {
    const { Component, pageProps, requireLogin } = this.props

    return (
      <Container>
        {requireLogin ? (
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Label>Email</Label>
              <Input
                type="email"
                value={this.state.login}
                onChange={evt => this.setState({ login: evt.target.value })}
              />
            </Row>
            <Row>
              <Label>Password</Label>
              <Input
                type="password"
                value={this.state.password}
                onChange={evt => this.setState({ password: evt.target.value })}
              />
            </Row>
            <Row>
              <Input type="submit" value="Valider" />
            </Row>
          </Form>
        ) : (
          <Component {...pageProps} />
        )}
      </Container>
    )
  }
}
