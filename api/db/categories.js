const db = require("../../utils/getFirestore")
const getJsonBody = require("../../utils/getJsonBody")
const sendJson = require("../../utils/sendJson")

module.exports = async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        const data = await getJsonBody(req)
        const documentReference = await db.collection("categories").add({
          name: data.name,
          description: data.description
        })
        sendJson(res, 200, { id: documentReference.id })
      } catch (err) {
        sendJson(res, 400, { err })
      }
      break
    default:
      sendJson(res, 400, "Method not supported")
  }
}
