import styled, { css } from 'styled-components'
import * as colors from './colors'

export const Nav = styled.nav`
  display: flex;
  background: ${colors.primary};
  border-bottom: 1px solid ${colors.darkPrimary};
  margin-bottom: 1em;
  align-items: center;
`
export const NavTitle = styled.h1`
  padding: 0 0.5em;
  flex: 0 0 140px;
  margin: 0;
  font-weight: normal;
  text-transform: uppercase;
  background-color: ${colors.darkPrimary};
  border-radius: 0 2em 2em 0;
  font-size: 1.3em;
  line-height: 2em;
  color: ${colors.lightPrimary};
  span {
    color: ${colors.darkerPrimary};
  }
`
export const NavItem = styled.a`
  display: block;
  color: ${colors.darkerPrimary};
  padding: 0.3em 1em;
  text-transform: uppercase;
  border-radius: 0.3em;
  margin: 0 0.5em;
  font-size: 0.9em;
  text-decoration: none;
  border: 1px solid ${colors.darkPrimary};
  ${props =>
    props.logout &&
    css`
      border: none;
    `}
  &:hover {
    background-color: ${colors.lightPrimary};
  }
  ${props =>
    props.active &&
    css`
      background-color: ${colors.lightPrimary};
    `}
`
export const NavPad = styled.span`
  flex: 1 0 0;
`
export const Content = styled.section`
  max-width: 1200px;
  margin: 1em;
`
