/* eslint-env node */
if (process.env.NODE_ENV !== 'production') {
  require('now-env')
}

module.exports = {
  generateEtags: false,
  target: 'serverless'
}
