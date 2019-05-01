import Link from 'next/link'
import { withRouter } from 'next/router'
import { NavTitle, MargeHeader } from './styled/layout'

const Header = ({ router }) => (
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
  </MargeHeader>
)

export default withRouter(Header)
