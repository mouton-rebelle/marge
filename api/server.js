const http = require('http')
const check = require('./check')
const categories = require('./categories')
const url = require('url')
const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url)
  switch (parsed.pathname) {
    case '/api/check':
      check(req, res)
      break
    case '/api/categories':
      categories(req, res)
      break
    default:
      res.end('ok')
  }
})
server.listen()
