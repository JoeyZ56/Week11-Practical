require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const todoRoutes = require('./routes/todoroutes.js')
const app = express()
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('combined'))
app.use('/todos', todoRoutes)
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())


module.exports = app