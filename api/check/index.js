const http = require("http")
const { parse } = require("querystring")

if (process.env.NODE_ENV !== "production") {
  require("now-env")
}

const lambda = (req, res) => {
  if (req.method === "DELETE") {
    res.writeHeader(200, {
      "Content-Type": "application/json",
      "Set-Cookie": `${
        process.env.COOKIE_NAME
      }=1; HttpOnly; Secure; Max-Age=-1; Path=/`
    })
    res.end(JSON.stringify({ ok: true }))
  }
  if (req.method !== "POST") {
    res.writeHeader(401, {
      "Content-Type": "application/json"
    })
    res.end(JSON.stringify({ ok: false }))
  }
  let body = ""
  req
    .on("data", chunk => {
      body += chunk.toString()
    })
    .on("end", () => {
      const postData = JSON.parse(body)
      if (
        postData.login === process.env.ADMIN_EMAIL &&
        postData.password === process.env.ADMIN_PASSWORD
      ) {
        res.writeHeader(200, {
          "Content-Type": "application/json",
          "Set-Cookie": `${process.env.COOKIE_NAME}=${
            process.env.AUTH_TOKEN
          }; HttpOnly; Secure; Max-Age=86400; Path=/`
        })
        res.end(JSON.stringify({ ok: true }))
      } else {
        res.writeHeader(401, {
          "Content-Type": "application/json"
        })
        res.end(JSON.stringify({ ok: false }))
      }
    })
}

if (process.env.NODE_ENV !== "production") {
  const server = http.createServer(lambda)
  server.listen(3009)
} else {
  module.exports = lambda
}
