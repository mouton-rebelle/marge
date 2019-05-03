import Link from 'next/link'
const sizes = [400, 800, 1600]
import { Thb, TbhContent, TmbTitle } from './styled/thumb'
const Thumb = ({ thumb, slug, name }) => {
  const ratio = thumb.height / thumb.width
  console.log(ratio)
  let nbRows = 1
  if (ratio > 0.6) nbRows = 2
  if (ratio >= 1) nbRows = 3
  if (ratio > 1.3) nbRows = 4
  return (
    <Link passHref href={`/article?slug=${slug}`} as={`/article?slug=${slug}`}>
      <Thb nbRows={nbRows}>
        <TbhContent>
          <TmbTitle>{name}</TmbTitle>
        </TbhContent>
        <img
          srcSet={sizes.map(s => `${thumb.url}?w=${s} ${s}w`).join(', ')}
          sizes="(min-width: 800px) 50vw, 100vw"
          src={`${thumb.url}?w=200`}
        />
      </Thb>
    </Link>
  )
}

export default Thumb
