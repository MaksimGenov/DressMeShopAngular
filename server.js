const express = require('express')
const port = process.env.PORT || 8080
const path = require('path')
const compression = require('compression')

const app = express()

app.use(compression())
app.use(express.static(path.join(__dirname, '/dist/DressMeShop')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/DressMeShop/index.html'))
})

app.listen(port)
