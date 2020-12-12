import { ApolloClient, HttpLink } from '@apollo/client'
import fetch from 'isomorphic-unfetch'
import { useMemo } from 'react'

import { InMemoryCache } from '@apollo/client/cache'

let apolloClient = null
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function createApolloClient() {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://graphql.datocms.com/', // Server URL (must be absolute)
      headers: {
        Authorization: 'Bearer 2f0eca7bed9b8857524d369ce68720',
      }, // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache({
      possibleTypes: {
        AboutModelContentField: ['EventRecord', 'IntroductionRecord', 'ProjectRecord'],
      },
    }),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}
export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}
