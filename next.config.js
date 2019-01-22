if (process.env.NODE_ENV !== 'production') {
  require('now-env')
}

module.exports = {
  generateEtags: false,
  target: 'serverless',
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://margeougreve.fr'
        : 'https://marge.com'
  }
}
