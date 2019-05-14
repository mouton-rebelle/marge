import React from 'react'
import { ArticleGrid, ArticleName, ArticleThumb, ArticleTags, ArticleSupport, ArticlePicture } from './styled/article'

const sizes = [400, 800, 1600]
const thumbSizes = [100, 200, 400]

export const ArticleComp = ({ article }) => {
  return (
    <ArticleGrid>
      <ArticleName>{article.name}</ArticleName>
      <ArticleThumb
        srcSet={thumbSizes.map(s => `${article.thumb.url}?w=${s}&h=${s}&fit=crop ${s}w`).join(', ')}
        sizes="(max-width: 400px) 100px, 200px"
        src={`${article.thumb.url}?fit=crop&h=200&w=200`}
      />
      <ArticleTags>
        {article.tags.map(t => (
          <li key={t.slug}>
            <a href={`/?tag=${t.slug}`}>{t.name}</a>
          </li>
        ))}
      </ArticleTags>
      <ArticleSupport>{article.support.name}</ArticleSupport>
      {article.pictures.map((pic, key) => (
        <ArticlePicture
          key={key}
          srcSet={sizes.map(s => `${pic.url}?w=${s} ${s}w`).join(', ')}
          sizes="90vw"
          src={`${pic.url}?&w=600`}
        />
      ))}
    </ArticleGrid>
  )
}
