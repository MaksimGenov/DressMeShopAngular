const express = require('express')
const port = process.env.PORT || 8080
// const path = require('path')

const app = express()

app.use(express.static('/dist/DressMeShop'))

app.get('/*', (res, req) => {
  res.sendFile('/dist/DressMeShop/index.html')
})

app.listen(port)
