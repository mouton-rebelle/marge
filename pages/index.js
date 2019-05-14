import Layout from '../components/Layout'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Thumb from '../components/ArticleThumb'
import { About } from '../components/About'
import { ThbContainer } from '../components/styled/thumb'

const NbPerPage = 30

const FETCH_HOME_DATA = gql`
  query FetchHomeData($skip: IntType, $first: IntType) {
    allArticles(first: $first, skip: $skip) {
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
const page = 2
console.log({ skip: (page - 1) * NbPerPage, first: NbPerPage })
const Index = () => (
  <Query query={FETCH_HOME_DATA} variables={{ skip: (page - 1) * NbPerPage, first: NbPerPage }}>
    {({ loading, error, data }) => {
      if (loading) return null
      if (error) return `Error!: ${error}`

      return (
        <Layout>
          <ThbContainer>
            <About {...data.about} />
            {data.allArticles.map((art, i) => (
              <Thumb {...art} key={art.id} myOrder={i} />
            ))}
          </ThbContainer>
        </Layout>
      )
    }}
  </Query>
)

export default Index
