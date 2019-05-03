import React from 'react'
import { ArticleGrid, ArticleName, ArticleThumb, ArticleTags, ArticleSupport } from './styled/article'

// const sizes = [400, 800, 1600]
const thumbSizes = [100, 200, 400]

export const ArticleComp = ({ article }) => {
  return (
    <ArticleGrid>
      <ArticleName>{article.name}</ArticleName>
      <ArticleThumb
        srcSet={thumbSizes.map(s => `${article.thumb.url}?w=${s}&h=${s}&fit=crop ${s}w`).join(', ')}
        sizes="(min-width: 800px) 50vw, 100vw"
        src={`${article.thumb.url}?fit=crop&h=200&w=200`}
      />
      <ArticleTags>
        {article.tags.map(t => (
          <li key={t.slug}><a href={`/?tag=${t.slug}`}>{t.name}</a></li>
        ))}
      </ArticleTags>
      <ArticleSupport>
        {article.support.name}
      </ArticleSupport>
    </ArticleGrid>
  )
}
