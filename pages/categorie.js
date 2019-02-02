import Head from 'next/head'
import Layout from '../components/Layout'
import { Query } from 'react-apollo'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'

const FETCH_CATEGORY_BY_SLUG = gql`
  query FetchBySlug($slug: String!, $id: ItemId!) {
    categorie(filter: { slug: { eq: $slug } }) {
      id
      titre
      description
      slug
    }
    allArticles(filter: { categorie: { eq: $id } }) {
      id
      nom
      photos {
        url
      }
    }
  }
`

const Categorie = ({
  router: {
    query: { slug, id }
  }
}) => {
  return (
    <Query query={FETCH_CATEGORY_BY_SLUG} variables={{ slug, id }}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return `Error!: ${error}`
        return (
          <Layout>
            <Head />
            <p>{data.categorie.description}</p>
            {data.allArticles.map(art => (
              <div key={art.id}>{art.nom}</div>
            ))}
          </Layout>
        )
      }}
    </Query>
  )
}
export default withRouter(Categorie)
