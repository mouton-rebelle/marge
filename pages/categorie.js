import Head from 'next/head'
import Layout from '../components/Layout'
import { Query } from 'react-apollo'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'

const FETCH_CATEGORY_BY_SLUG = gql`
  query FetchBySlug($slug: String!) {
    categorie(filter: { slug: { eq: $slug } }) {
      id
      titre
      description
      slug
    }
  }
`

const Categorie = ({
  router: {
    query: { slug }
  }
}) => {
  return (
    <Query query={FETCH_CATEGORY_BY_SLUG} variables={{ slug }}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: ${error}`
        return (
          <Layout>
            <Head />
            <p>{data.categorie.titre}</p>
          </Layout>
        )
      }}
    </Query>
  )
}
export default withRouter(Categorie)
