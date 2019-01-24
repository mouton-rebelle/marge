const http = require('http')
const check = require('./check')
const dbCategories = require('./db/categories')
const url = require('url')
const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url)
  switch (parsed.pathname) {
    case '/api/check':
      check(req, res)
      break
    case '/api/db/categories':
      dbCategories(req, res)
      break
    default:
      res.end('ok')
  }
})
server.listen(3009)
