module.exports = (res, code, data, headers = {}) => {
  res.writeHeader(code, {
    "Content-Type": "application/json",
    ...headers
  })
  res.end(JSON.stringify(data))
}
