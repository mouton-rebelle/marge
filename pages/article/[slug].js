import Head from 'next/head'
import Layout from '../../components/Layout'
import { ArticleComp } from '../../components/Article'
import { gql } from '@apollo/client'

import { addApolloState, initializeApollo } from '../../lib/apollo-client'

const FETCH_ARTICLE_BY_ID = gql`
  query FetchBySlug($slug: String!) {
    article(filter: { slug: { eq: $slug } }) {
      id
      slug
      sold
      name
      category {
        title
        description
      }
      pictures {
        url
      }
      thumb {
        url
      }
      tags {
        name
        slug
      }
      support {
        name
        description(markdown: true)
        price
      }
    }
  }
`

const Article = (props) => {
  return (
    <Layout>
      <Head />
      <ArticleComp article={props.data.article} />
    </Layout>
  )
}
export default Article

export async function getServerSideProps({ params }) {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: FETCH_ARTICLE_BY_ID,
    variables: { slug: params.slug },
  })
  if (!data) {
    return {
      props: {
        notFound: true,
      },
    }
  }
  return addApolloState(apolloClient, {
    props: { data },
  })
}
