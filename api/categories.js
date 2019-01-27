const db = require('./utils/getFirestore')
const getJsonBody = require('./utils/getJsonBody')
const sendJson = require('./utils/sendJson')
const url = require('url')
const checkJWT = require('./utils/verify')

module.exports = async (req, res) => {
  if (req.method === 'GET' || checkJWT(req, res)) {
    try {
      const { query } = url.parse(req.url, true)
      switch (req.method) {
        case 'GET':
          {
            const collection = db.collection('categories')
            console.log(collection)
            collection
              .limit(25)
              .get()
              .then(
                querySnapshot => {
                  const data = querySnapshot.docs.map(documentSnapshot => {
                    return {
                      ...documentSnapshot.data(),
                      id: documentSnapshot.id
                    }
                  })
                  sendJson(res, 200, data)
                },
                error => {
                  console.log('ici ============== ici')
                  console.log(error)
                }
              )
          }
          break
        case 'DELETE':
          {
            const documentReference = await db
              .collection('categories')
              .doc(query.id)
            await documentReference.delete()
            sendJson(res, 200, { ok: true })
          }
          break
        case 'PUT':
          {
            const data = await getJsonBody(req)
            const documentReference = await db
              .collection('categories')
              .doc(query.id)
            await documentReference.update(data)
            sendJson(res, 200, { ok: true })
          }
          break
        case 'POST':
          {
            const data = await getJsonBody(req)
            const documentReference = await db.collection('categories').add({
              name: data.name,
              description: data.description
            })
            sendJson(res, 200, { id: documentReference.id })
          }
          break
        default:
          sendJson(res, 400, 'Method not supported')
      }
    } catch (err) {
      console.log('============================')
      console.log(err)
      sendJson(res, 400, { err })
    }
  }
}
