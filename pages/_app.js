import React from 'react'
import { useApollo } from '../lib/apollo-client'
import { ApolloProvider } from '@apollo/client'

const ApolloConnected = ({ Component, pageProps }) => {
  console.log('got page props', pageProps)
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default ApolloConnected
