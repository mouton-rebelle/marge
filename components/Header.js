import Link from "next/link";
import { withRouter } from "next/router";
import { NavTitle, MargeHeader, LogoContainer } from "./styled/layout";
import { theme } from "./styled/theme";
const BASELINE = 80;
const CURVE1H = BASELINE - 40;
const SIDEMARGIN = 10;
const HEIGHT = 170;
const WIDTH = 1600;
const Header = ({ router }) => (
  <MargeHeader>
    <LogoContainer>
      <span />
      <svg viewBox="0 0 1600 190" preserveAspectRatio="xMidYMin meet">
        <defs>
          <filter
            id="f3"
            x="0"
            y="0"
            width="200%"
            height="200%"
            filterUnits="userSpaceOnUse"
          >
            <feOffset result="offOut" in="SourceAlpha" dx="10" dy="0" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <path
          d={`M 0 0
                v ${BASELINE}
                h ${SIDEMARGIN}
                C 60 ${BASELINE}, 300 ${CURVE1H}, 440 ${BASELINE + 20}
                S 500 ${HEIGHT}, 800 ${HEIGHT}
                S 1100 ${BASELINE}, 1280 ${CURVE1H + 10}
                S 1500 53, 1600 46
                H 1600
                V 0
                Z`}
          fill={theme.darkPrimary}
          filter="url(#f3)"
        />
        <path
          d={`M 0 0
                v ${BASELINE - 17}
                h ${SIDEMARGIN}
                C 50 ${BASELINE - 28}, 300 ${CURVE1H - 20}, 410 ${BASELINE - 20}
                S 480 ${HEIGHT - 10}, 800 ${HEIGHT - 20}
                S 1140 ${BASELINE - 30}, 1300 ${CURVE1H - 15}
                S 1500 34, 1600 34
                H 1600
                V 0
                Z`}
          fill={theme.primary}
        />
      </svg>
      <span />
    </LogoContainer>
    <NavTitle onClick={() => router.push("/")}>
      <Link href="/">
        <a>
          <span className="marge">marge</span>
          <span className="ou">&nbsp;ou&nbsp;g</span>
          <span className="reve">reve</span>
        </a>
      </Link>
    </NavTitle>
  </MargeHeader>
);

export default withRouter(Header);
