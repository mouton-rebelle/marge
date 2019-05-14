import React from 'react'
import Layout from '../components/Layout'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Thumb from '../components/ArticleThumb'
import { About } from '../components/About'
import { InfiniteLoader } from '../components/Infinite'

const PAGE_SIZE = 20

const FETCH_HOME_DATA = gql`
  query FetchHomeData($skip: IntType) {
    allArticles(first: ${PAGE_SIZE}, skip: $skip) {
      id
      slug
      sold
      name
      category {
        title
      }
      pictures {
        url
      }
      thumb {
        url
        width
        height
      }
      tags {
        name
        slug
      }
      support {
        name
        description
        price
      }
    }
    about {
      title
      content {
        ... on EventRecord {
          _modelApiKey
          text
          date
        }
        ... on IntroductionRecord {
          _modelApiKey
          text
        }
        ... on ProjectRecord {
          _modelApiKey
          text
          tag {
            name
            slug
          }
        }
      }
    }
  }
`
const Index = () => {
  const [noMoreData, uppdateNoMoreData] = React.useState(false)
  return (
    <Query query={FETCH_HOME_DATA} variables={{ skip: 0 }} notifyOnNetworkStatusChange>
      {({ loading, data, fetchMore }) => {
        return (
          <Layout>
            <InfiniteLoader
              noMoreData={noMoreData}
              loading={loading}
              onLoadMore={() => {
                fetchMore({
                  variables: {
                    skip: data.allArticles.length
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev
                    if (fetchMoreResult.allArticles.length < PAGE_SIZE) {
                      uppdateNoMoreData(true)
                    }
                    return Object.assign({}, prev, {
                      allArticles: [...prev.allArticles, ...fetchMoreResult.allArticles]
                    })
                  }
                })
              }}>
              <About {...data.about} />
              {data.allArticles.map((art, i) => (
                <Thumb {...art} key={art.id} myOrder={i} />
              ))}
            </InfiniteLoader>
          </Layout>
        )
      }}
    </Query>
  )
}

export default Index
