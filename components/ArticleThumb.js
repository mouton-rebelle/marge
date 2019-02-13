const dpr = [1,2,3]
import {Thb, TmbTitle} from './styled/thumb'
const Thumb = ({thumb, id, nom}) => {
  return (
    <Thb href="#">
      <TmbTitle>{nom}</TmbTitle>
      <img
        srcSet={dpr.map(d => `${thumb.url}?fit=crop&h=200&w=200&dpr=${d} ${d}x`).join(', ')}
        src={ `${thumb.url}?fit=crop&h=200&w=200`}
      />
    </Thb>
  )
}

export default Thumb
