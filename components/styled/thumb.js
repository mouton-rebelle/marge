import styled, { css } from 'styled-components'

export const TmbTitle = styled.h3`
  margin: 0;
  padding: 0.3em;
  font-size: 1.1em;
  background: ${props => props.theme.primary}; 
`
export const Thb = styled.a`
  border:2px solid ${props => props.theme.primary};
  color: ${props => props.theme.darkerPrimary};
  &:hover, &:active{
    border-color:${props => props.theme.secondary};
    ${TmbTitle} {
      background: ${props => props.theme.secondary};    
    }
  }
  text-decoration: none;
  border-radius:10px;
  flex: 0 0 200px;
  margin: 1em;
  overflow: hidden;
  img{
    vertical-align:middle;
  }
`

export const ThbContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
