import Link from 'next/link'
const dpr = [1,2,3]
import {Thb, TmbTitle} from './styled/thumb'
const Thumb = ({thumb, slug, name}) => {
  return (
    <Link passHref href={`/article?slug=${slug}`}>
    <Thb>
      <TmbTitle>{name}</TmbTitle>
      <img
        srcSet={dpr.map(d => `${thumb.url}?w=375&dpr=${d} ${d}x`).join(', ')}
        src={ `${thumb.url}?fit=crop&h=200&w=200`}
      />
    </Thb>
    </Link>
  )
}

export default Thumb
