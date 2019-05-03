import Link from 'next/link'
import { withRouter } from 'next/router'
import { NavTitle, MargeHeader, LogoContainer } from './styled/layout'
import { theme } from './styled/theme'
const Header = ({ router }) => (
  <MargeHeader>
    <LogoContainer>
      <span />
      <svg viewBox="0 0 1600 190" preserveAspectRatio="xMidYMin meet">
        <defs>
          <filter id="f3" x="0" y="0" width="200%" height="200%" filterUnits="userSpaceOnUse">
            <feOffset result="offOut" in="SourceAlpha" dx="10" dy="0" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <g transform="translate(0.000000, -50.000000)">
          <path
            d="M0.005,151.000386 C311,151.000386 409.898,29.7503861 811,30.0003861 C1211,30.0003861 1311,151.000386 1600,151.000386 L1600,228.000386 L0,228.000386 C0.1,30.0003861 0.005,180.000386 0.005,151.000386 L0.005,151.000386 Z"
            fill={theme.darkPrimary}
            filter="url(#f3)"
            transform="translate(800.000000, 129.000193) scale(-1, -1) translate(-800.000000, -129.000193) "
          />
          <path
            d="M811,0.000386067216 C1211,0.000386067216 1311,105.150421 1600,105.150421 L1600,198.000386 L0,198.000386 C0.1,0.000386067216 0.005,150.000386 0.005,121.000386 C311,121.000386 409.898,-0.249613933 811,0.000386067216 Z"
            fill={theme.primary}
            transform="translate(800.000000, 99.000193) scale(1, -1) translate(-800.000000, -99.000193)"
          />
        </g>
      </svg>
      <span />
    </LogoContainer>
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
