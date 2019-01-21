const http = require("http")
const check = require("./check")
const dbCategories = require("./db/categories")

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/api/check":
      check(req, res)
      break
    case "/api/db/categories":
      dbCategories(req, res)
      break
    default:
      res.end("ok")
  }
})
server.listen(3009)
