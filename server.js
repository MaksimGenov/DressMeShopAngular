const express = require('express')
const port = process.env.PORT || 8080
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/dist')))

app.get('/*', (res, req) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(port)
