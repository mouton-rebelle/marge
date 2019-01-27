const jwt = require('jsonwebtoken')
const cookie = require('cookie')
const sendJSon = require('./sendJson')
const checkJWT = (req, res) => {
  const cookies = cookie.parse(req.headers.cookie || '')
  const jwtToken =
    typeof cookies[process.env.COOKIE_NAME] !== 'undefined'
      ? cookies[process.env.COOKIE_NAME]
      : null
  let decoded = false
  if (jwtToken) {
    try {
      decoded = jwt.verify(jwtToken, process.env.JWT_SECRET, {
        algorithm: 'HS256'
      })
    } catch (err) {
      decoded = false
    }
  }
  if (decoded) {
    return true
  } else {
    sendJSon(res, 401, { ok: false })
  }
}
module.exports = checkJWT
