import Link from 'next/link'
import { withRouter } from 'next/router'
import { Nav, NavTitle, NavItem, NavPad } from './styled/base'

const Header = ({ router }) => {
  return (
    <Nav>
      <NavTitle onClick={() => router.push('/admin')}>
        <span>Admin</span>&nbsp;Marge
      </NavTitle>
      <Link href="/admin/category" passHref>
        <NavItem active={router.route === '/admin/category'}>
          categories
        </NavItem>
      </Link>
      <Link href="/admin/support" passHref>
        <NavItem>supports</NavItem>
      </Link>
      <Link href="/admin/item" passHref>
        <NavItem>items</NavItem>
      </Link>
      <NavPad />
      <NavItem logout>Logout</NavItem>
    </Nav>
  )
}
export default withRouter(Header)
