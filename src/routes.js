const express = require('express')
const app     = express.Router()

const homeController = require('./controllers/homeController')
const quotationController = require('./controllers/quotationController')

app.get('/', homeController.index)
app.get('/cotacao', quotationController.index)

module.exports = app