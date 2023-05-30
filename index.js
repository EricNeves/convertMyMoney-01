const express = require('express')
const app     = express()
const path    = require('path')

const router = require('./src/routes')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'))
app.use(express.static(
  path.join(__dirname, 'public')
))

app.use('/', router)

app.listen(3000, () => {
  console.log('Server running on port 3000')
})