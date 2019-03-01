import Head from 'next/head'
import Layout from '../components/Layout'
import { Query } from 'react-apollo'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import Thumb from '../components/ArticleThumb'
import {ThbContainer} from '../components/styled/thumb'
const FETCH_CATEGORY_BY_SLUG = gql`
  query FetchBySlug($slug: String!, $id: ItemId!) {
    category(filter: { slug: { eq: $slug } }) {
      id
      title
      description
      slug
    }
    allArticles(filter: { category: { eq: $id } }) {
      id
      slug
      name
      thumb {
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
            <p>{data.category.description}</p>
            <ThbContainer>
            {data.allArticles.map(art => <Thumb {...art} key={art.id}/>)}
            </ThbContainer>

          </Layout>
        )
      }}
    </Query>
  )
}
export default withRouter(Categorie)
