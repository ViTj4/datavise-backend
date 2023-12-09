
const express     = require('express')
const router      = express.Router()
const verifyToken = require('../middlewares/auth-middleware')
const { db }      = require('../config/firebaseConfig')

router.post('/create-collection', verifyToken, async (req, res) => {
  try {
    const userId            = req.userId
    const collectionData    = req.body
    const userCollectionRef = db.collection('collections').doc(userId)
    await userCollectionRef.set(collectionData)
    res.status(200).send({ message: 'Collection créée avec succès' })
  } catch (error) {
    res.status(500).send({ message: "Erreur lors de la création de la collection", error: error.message })
  }
})

module.exports = router


