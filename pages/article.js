import Head from 'next/head'
import Layout from '../components/Layout'
import { Query } from 'react-apollo'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
const FETCH_ARTICLE_BY_ID = gql`
  query FetchBySlug($slug: String!) {
    article(filter: { slug: { eq: $slug } }) {
      id
      name
      slug
      tags {
        name
      }
    }
  }
`

const Article = ({
  router: {
    query: { slug }
  }
}) => {
  return (
    <Query query={FETCH_ARTICLE_BY_ID} variables={{ slug }}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: ${error}`
        return (
          <Layout>
            <Head />
            <p>{data.article.name}</p>
            {data.article.tags.map(t => t.name)}
          </Layout>
        )
      }}
    </Query>
  )
}
export default withRouter(Article)
