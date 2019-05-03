import styled from 'styled-components'

export const TmbTitle = styled.h3`
  margin: 0;
  padding: 0.3em;
  font-size: 1em;
  text-align: center;
  background-color: ${props => props.theme.secondary};
  opacity: 0;
  transition: opacity ease-in 0.3s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const TbhContent = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  z-index: 2;
  overflow: hidden;
  transition: all ease-in 0.3s;
  box-shadow: inset ${props => props.theme.primary} 0 0 0 1px;
`

export const Thb = styled.a`
  position: relative;
  display: block;
  order: ${props => props.myOrder};
  color: ${props => props.theme.darkerPrimary};
  outline: none;
  grid-row-end: span ${props => props.nbRows};
  text-decoration: none;
  &:hover,
  &:active {
    ${TmbTitle} {
      opacity: 0.9;
    }
    ${TbhContent} {
      box-shadow: inset ${props => props.theme.secondary} 0 0 0 1px;
    }
  }
  img {
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
`

export const ThbContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 4.5vw;
  grid-gap: 1vw;
  margin: 1em;
  @media screen and (max-width: 1300px) {
    grid-auto-rows: 7vw;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: 10vw;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 14vw;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: minmax(0, 1fr);
    grid-auto-rows: 28vw;
    grid-gap: 1em;
  }
`
