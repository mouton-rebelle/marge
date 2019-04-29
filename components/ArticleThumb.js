import Link from 'next/link'
const sizes = [400, 800, 1600]
import {Thb, TmbTitle} from './styled/thumb'
const Thumb = ({thumb, slug, name}) => {
  return (
    <Link passHref href={`/article?slug=${slug}`} as={`/article?slug=${slug}`}>
    <Thb>
      <TmbTitle>{name}</TmbTitle>
      <img
        srcSet={sizes.map(s => `${thumb.url}?w=${s} ${s}w`).join(', ')}
        sizes="(min-width: 800px) 50vw, 100vw"
        src={ `${thumb.url}?fit=crop&h=200&w=200`}
      />
    </Thb>
    </Link>
  )
}

export default Thumb
