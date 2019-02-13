const hue = 150
// const base    = 'HSL(150,90%,55%)'
// const target  = 'HSL(50,90%,55%)'
const offset = (base, offset) => {
  const v = base - offset
  if (v > 0) {
    return v
  } else {
    return 360 + v
  }
}
export const theme = {
  primary: `HSL(${hue},90%,55%)`,
  darkPrimary: `HSL(${hue},80%,45%)`,
  darkerPrimary: `HSL(${hue},80%,15%)`,
  darkestPrimary: `HSL(${hue},10%,10%)`,
  lightPrimary: `HSL(${hue},20%,80%)`,
  pink: '#EF2BA8',
  secondary: `HSL(${offset(hue, 99)},100%,55%)`,
}
