import styled, { css } from 'styled-components'

export const TmbTitle = styled.h3`
  margin: 0;
  padding: 0.3em;
  font-size: 1.1em;
`
export const Thb = styled.a`
  background: ${props => props.theme.primary}; 
  border-radius:10px;
  padding: 2px;
  display: block;
  color: ${props => props.theme.darkerPrimary};
  flex: 0 0 calc(371px - 2em) ;
  margin: 0 1em 1em 1em;
  outline: none;
  overflow: hidden;
  text-decoration: none;
  &:hover, &:active{
    background: ${props => props.theme.secondary};    
  }
  img{
    display: block;
    width: calc(371px - 2em);
    border-radius: 9px;
  }
`

export const ThbContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
