import Link from 'next/link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'next/router'
import { Nav, NavTitle, NavItem, MargeHeader } from './styled/layout'

const Header = ({ data, router }) => (
  <MargeHeader>
    <NavTitle onClick={() => router.push('/')}>
      <Link href="/">
        <a>
          <span className="marge">marge</span>
          <span className="ou">&nbsp;ou&nbsp;g</span>
          <span className="reve">reve</span>
        </a>
      </Link>
    </NavTitle>
    <Nav>
      {data.allCategories.map(c => (
        <Link passHref href={`/categorie?slug=${c.slug}&id=${c.id}`} as={`/cat.${c.id}.${c.slug}`} key={c.id}>
          <NavItem>{c.titre}</NavItem>
        </Link>
      ))}
    </Nav>
  </MargeHeader>
)

export default withRouter(
  graphql(gql`
    query {
      allCategories {
        id
        titre
        description
        slug
      }
    }
  `)(Header)
)
