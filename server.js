const express = require('express')
const port = process.env.PORT || 8080
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/dist/DressMeShop')))

app.get('*', (res, req) => {
  // res.sendFile(path.join(__dirname, '/dist/DressMeShop/index.html'))
  res.send('hello')
})

app.listen(port)
