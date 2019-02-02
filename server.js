const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    const parts = pathname.split('/')
    // next dev stuff
    console.log(pathname.substr(0, 4), parts[1].split('.'))
    if (pathname.substr(0, 5) === '/next') {
      handle(req, res, parsedUrl)
    } else if (pathname.substr(0, 5) === '/cat.') {
      let tmp = parts[1].split('.')
      console.log({ ...query, slug: tmp[2], id: tmp[1] })
      app.render(req, res, '/categorie', { ...query, slug: tmp[2], id: tmp[1] })
    } else if (pathname === '/b') {
      app.render(req, res, '/a', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
