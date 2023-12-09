const admin = require('../config/firebaseConfig')
const httpReturnCodes = require('../constant')

async function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization.split('Bearer ')[1].trim() 
    const decodedToken = await admin.auth().verifyIdToken(token)
    req.userId = decodedToken.uid
    res.status(httpReturnCodes.OK).send('Signed in !')
    next()
  } catch (error) {
    res.status(httpReturnCodes.UNAUTHORIZED).send('Unauthorized !')
  }
}

module.exports = verifyToken
