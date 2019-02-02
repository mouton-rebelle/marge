import styled, { css } from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.background};
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
  border-bottom: 1px solid ${props => props.theme.darkPrimary};
  margin-bottom: 1em;
  align-items: center;
`
export const NavTitle = styled.h1`
  margin: 0;
  a {
    color: #000;
    font-size: 1.2em;
    font-weight: 300;
    text-decoration: none;
    display: flex;
    .marge {
      background: ${props => props.theme.green};
    }
    .ou {
      background: ${props => props.theme.pink};
    }
    .reve {
      background: ${props => props.theme.roy};
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
  border: 1px solid ${props => props.theme.darkPrimary};
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
