if (process.env.NODE_ENV !== 'production') {
  require('now-env')
}
require('firebase')
const admin = require('firebase-admin')
const buff = Buffer.from(process.env.GOOGLE_CREDS, 'base64')
const creds = JSON.parse(buff.toString('ascii'))
let db = false
try {
  const app = admin.initializeApp({
    credential: admin.credential.cert(creds)
  })
  db = app.firestore()
  db.settings({
    timestampsInSnapshots: true
  })
} catch (err) {
  console.log(err)
}

module.exports = db
