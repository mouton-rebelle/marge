import styled from 'styled-components'

export const ArticleGrid = styled.article`
  display: grid;
  margin: 1em;
  grid-gap: 1em;
  grid-template-columns: 200px repeat(3, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-template-areas:
    'thumb title title title'
    'thumb tags tags tags'
    'thumb support support support';
`
export const ArticlePicture = styled.img`
  grid-column-end: span 4;
  border-radius: 1em;
  width: 100%;
`

export const ArticleName = styled.h2`
  font-size: 2em;
  color: ${props => props.theme.primary};
  grid-area: title;
  margin: 0;
`

export const ArticleThumb = styled.img`
  border-radius: 50%;
  min-width: 0px;
  max-width: 100%;
  place-self: center;
  grid-area: thumb;
`

export const ArticleTags = styled.ul`
  grid-area: tags;
  padding: 0;
  li {
    display: inline;
    a {
      display: inline-block;
      margin-right: 1em;
      background: ${props => props.theme.primary};
      border-radius: 5px;
      color: ${props => props.theme.darkestPrimary};
      text-decoration: none;
      padding: 2px 5px;
    }
  }
`

export const ArticleSupport = styled.div`
  grid-area: support;
  color: ${props => props.theme.lightPrimary};
`
