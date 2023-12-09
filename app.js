const express     = require('express')
const app         = express()
const verifyToken = require('./middlewares/auth-middleware')


app.use(express.json())

const PORT = process.env.PORT || 3000


app.post('/verify-ressource', verifyToken, (req, res) => {
  res.send('triggered verify-ressource route')
})

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API Express !')
})
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`)
})