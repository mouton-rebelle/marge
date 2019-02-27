import styled, { css, keyframes } from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.darkestPrimary};
  color: ${props => props.theme.lightPrimary};
  min-height: 100vh;
  font-size: 16px;
`
export const MargeHeader = styled.header`
  display: flex;
  flex-direction: column;
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
  margin: 2em;
`
