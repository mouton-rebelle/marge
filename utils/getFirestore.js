if (process.env.NODE_ENV !== 'production') {
  require('now-env')
}
const firebase = require('firebase')
const admin = require('firebase-admin')
const buff = Buffer.from(process.env.GOOGLE_CREDS, 'base64')
const creds = JSON.parse(buff.toString('ascii'))
admin.initializeApp({
  credential: admin.credential.cert(creds)
})
const db = admin.firestore()
db.settings({
  timestampsInSnapshots: true
})

module.exports = db
