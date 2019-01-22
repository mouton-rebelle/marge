module.exports = getJsonBody = req => {
  return new Promise((resolve, reject) => {
    try {
      let body = ''
      req
        .on('data', chunk => {
          body += chunk.toString()
        })
        .on('end', () => {
          const postData = JSON.parse(body)
          resolve(postData)
        })
    } catch (err) {
      reject(err)
    }
  })
}
