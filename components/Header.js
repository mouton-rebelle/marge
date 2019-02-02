import Link from 'next/link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const linkStyle = {
  marginRight: 15,
  color: 'tomato'
}

const Header = ({ data }) => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    {data.allCategories.map(c => (
      <Link href={`/categorie?slug=${c.slug}`} as={`/cat/${c.slug}`} key={c.id}>
        <a style={linkStyle}>{c.titre}</a>
      </Link>
    ))}
  </div>
)

export default graphql(gql`
  query {
    allCategories {
      id
      titre
      description
      slug
    }
  }
`)(Header)
