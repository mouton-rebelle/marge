import Head from "next/head";
import Layout from "../components/Layout";
import { ArticleComp } from "../components/Article";
import { Query } from "react-apollo";
import { withRouter } from "next/router";
import gql from "graphql-tag";

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
`;

const Article = ({
  router: {
    query: { slug },
  },
}) => {
  return (
    <Query query={FETCH_ARTICLE_BY_ID} variables={{ slug }}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) return `Error!: ${error}`;
        return (
          <Layout>
            <Head />
            <ArticleComp article={data.article} />
          </Layout>
        );
      }}
    </Query>
  );
};
export default withRouter(Article);
