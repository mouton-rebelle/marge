import styled, { keyframes, createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  color: ${props => props.theme.lightPrimary};
  font-size: 16px;
`

export const GlobalStyle = createGlobalStyle`
  body{
    background: ${props => props.theme.darkestPrimary};
    font-family: 'Secular One', cursive;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
`

export const MargeHeader = styled.header`
  position: sticky;
  top: 0;
  height: 10vw;
  z-index: 9;
`
export const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  margin: 0 auto;
  width: 100%;
  span {
    flex: 1 0 0;
    background: linear-gradient(
      ${props => props.theme.primary} 0%,
      ${props => props.theme.primary} 11%,
      ${props => props.theme.darkPrimary} 11%,
      ${props => props.theme.darkPrimary} 24%,
      rgba(0, 0, 0, 0.5) 24%,
      rgba(0, 0, 0, 0.2) 27%,
      transparent 31%
    );
    &:last-child {
      background: linear-gradient(
        ${props => props.theme.primary} 0%,
        ${props => props.theme.primary} 18%,
        ${props => props.theme.darkPrimary} 18%,
        ${props => props.theme.darkPrimary} 24.2%,
        transparent 24.2%
      );
    }
  }
  svg {
    flex: 1 1 1400px;
    max-width: 1000px;
  }
`
const Neon = props => keyframes`
  0%{
    opacity: 1;
    color:${props.theme.secondary};
  }
  37%{
    opacity: 1;
    color:${props.theme.secondary};
  }
  38%{
    opacity: .5;
    color:${props.theme.darkerPrimary};
  }
  39%{
    opacity: 1;
    color:${props.theme.secondary};
  }
  40%{
    opacity: 1;
    color:${props.theme.secondary};
  }
  41%{
    opacity: .3;
    color:${props.theme.darkerPrimary};
  }
  42%{
    opacity: 1;
    color:${props.theme.secondary};
  }
  43%{
    opacity: .3;
    color:${props.theme.darkerPrimary};
  }
  48%{
    opacity: .3;
    color:${props.theme.darkerPrimary};
  }
  49%{
    opacity: 1;
    color:${props.theme.secondary};
  }
  89%{
    opacity: 1;
    color:${props.theme.secondary};
  }
  91%{
    opacity: .3;
    color:${props.theme.darkerPrimary};
  }
  92%{
    opacity: 1;
    color:${props.theme.secondary};
  }
  100%{
    opacity: 1;
    color:${props.theme.secondary};
  }

`

export const NavTitle = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  margin: 1vw 0 0 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
  display: flex;
  justify-content: center;
  a {
    padding: 0 1rem;
    font-size: 5vw;
    @media screen and (min-width: 1000px) {
      font-size: 40px;
    }
    font-weight: 500;
    text-decoration: none;
    color: ${props => props.theme.secondary};
    text-shadow: ${props => props.theme.lightPrimary} 0 0 30px, ${props => props.theme.darkestPrimary} 1px 1px 1px,
      ${props => props.theme.darkestPrimary} 1px -1px 1px, ${props => props.theme.darkestPrimary} -1px 1px 1px,
      ${props => props.theme.darkestPrimary} -1px -1px 1px;
    .ou {
      animation: ${props => Neon(props)} 8s ease-in-out infinite;
    }
  }
`
export const NavPad = styled.span`
  flex: 1 0 0;
`
export const Content = styled.section`
  max-width: 1200px;
  margin: 1em auto;
  position: relative;
`
export const Block = styled.div`
  grid-row-end: span 3;
  order: 8;
  overflow-y: auto;
  background-color: ${props => props.theme.darkestPrimary};
  border: 1px solid ${props => props.theme.secondary};
  padding: 5px;
  border-radius: 1em;
  a {
    color: ${props => props.theme.darkestPrimary};
    background-color: ${props => props.theme.primary};
    text-decoration: none;
  }
  p {
    margin: 1em;
  }
  color: ${props => props.theme.secondary};
`
export const AboutTitle = styled.h3`
  text-align: center;
  font-size: 18px;
`
export const EventDate = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 2px ${props => props.theme.secondary};
  strong {
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.darkestPrimary};
  }
  span {
    background-color: ${props => props.theme.darkestPrimary};
  }
  width: 2.5em;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
`

export const BlockWithEvent = styled(Block)`
  grid-row-end: span 4;
  grid-column-end: span 2;
  order: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    flex-grow: 1;
  }
  ${EventDate} {
    flex: 0 0 2.5em;
    margin: 0 0 0 1em;
  }
`
