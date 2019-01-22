const getJsonBody = require('../../utils/getJsonBody')
const sendJson = require('../../utils/sendJson')

module.exports = async (req, res) => {
  switch (req.method) {
    case 'DELETE':
      sendJsonResponse(
        res,
        200,
        { ok: true },
        {
          'Set-Cookie': `${
            process.env.COOKIE_NAME
          }=1; HttpOnly; Secure; Max-Age=-1; Path=/`
        }
      )
      break
    case 'POST':
      const data = await getJsonBody(req)
      if (
        data.login === process.env.ADMIN_EMAIL &&
        data.password === process.env.ADMIN_PASSWORD
      ) {
        console.log('ooo')
        sendJson(
          res,
          200,
          { ok: true },
          {
            'Set-Cookie': `${
              process.env.COOKIE_NAME
            }=1; HttpOnly; Secure; Max-Age=86400; Path=/`
          }
        )
      } else {
        sendJson(res, 401, { ok: false })
      }
      break
    default:
      sendJson(res, 401, { ok: false })
  }
}
