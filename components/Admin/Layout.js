import Header from './Header'
import { Content } from './styled/base'
const Layout = props => (
  <div>
    <Header />
    <Content>{props.children}</Content>
  </div>
)

export default Layout
