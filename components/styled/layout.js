import styled, { css, keyframes, createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  color: ${props => props.theme.lightPrimary};
  font-size: 16px;
`

export const GlobalStyle = createGlobalStyle`
  body{
    background: ${props => props.theme.darkestPrimary};
    font-family: Arial;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
`

export const MargeHeader = styled.header`
  display: flex;
  flex-direction: column;
  border-bottom: 1em solid ${props => props.theme.primary};
  position: sticky;
  top:0;
`
export const Nav = styled.nav`
  display: flex;
  background: ${props => props.theme.primary};
  margin-bottom: 1em;
  align-items: center;
  justify-content: center;
`
const Neon = keyframes`
  0%{
    opacity: .3
  }
  37%{
    opacity: .3
  }
  38%{
    opacity: .5
  }
  39%{
    opacity: .3
  }
  40%{
    opacity: .3
  }
  41%{
    opacity: .7
  }
  42%{
    opacity: .3
  }
  43%{
    opacity: 1
  }
  47%{
    opacity: 1
  }
  49%{
    opacity: .3
  }
  89%{
    opacity: .3
  }
  91%{
    opacity: 1
  }
  92%{
    opacity: .3
  }
  100%{
    opacity: .3
  }

`

export const NavTitle = styled.h1`
  margin: 0;
  background: ${props => props.theme.darkPrimary};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
  a {
    padding: 0 1rem;
    font-size: 1.1em;
    @media screen and (min-width: 1000px) {
      font-size: 40px;
    }
    font-weight: 500;
    text-decoration: none;
    color: ${props => props.theme.secondary};
    .ou {
      animation: ${Neon} 11s ease-in-out infinite;
    }

  }
`
export const NavItem = styled.a`
  display: block;
  color: ${props => props.theme.darkerPrimary};
  padding: 0.3em 1em;
  text-transform: uppercase;
  border-radius: 0.3em;
  margin: 0 0.5em;
  font-size: 0.9em;
  text-decoration: none;
  ${props =>
    props.logout &&
    css`
      border: none;
    `}
  &:hover {
    background-color: ${props => props.theme.lightPrimary};
  }
  ${props =>
    props.active &&
    css`
      background-color: ${props => props.theme.lightPrimary};
    `}
`
export const NavPad = styled.span`
  flex: 1 0 0;
`
export const Content = styled.section`
  max-width: 1200px;
  margin: 1em auto;
  position:relative;
`
export const Block = styled.div`
  background-color: ${props => props.theme.darkestPrimary};
  border: 1px solid ${props => props.theme.secondary};
  margin: 1em;
  padding: 5px;
  border-radius: 5px;
  a{
    color: ${props => props.theme.darkestPrimary};
    background-color: ${props => props.theme.primary};
    text-decoration: none;
  }
  p{
    margin: 1em;
  }
  color: ${props => props.theme.secondary};
`
export const AboutContainer = styled.section`
`
export const AboutTitle = styled.h3`
  text-align: center;
  font-size: 18px;
`
 export const EventDate = styled.div`
  display:flex;
  flex-direction: column;
  box-shadow:0 0 0 2px ${props => props.theme.secondary};
  strong{
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.darkestPrimary};
  }
  span{
    background-color: ${props => props.theme.darkestPrimary};
  }
  width: 2.5em;
  text-align: center;
  border-radius:5px;
  overflow: hidden;
 `

 export const BlockWithEvent = styled(Block)`
  display: flex;
  flex-direction:row;
  align-items: center;
  div{
    flex-grow: 1;
  }
  ${EventDate} {
    flex: 0 0 2.5em;
    margin: 0 0 0 1em;
  }
 `