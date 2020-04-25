const express = require('express')
require('dotenv').config()
const { MONGOURI } = require('../../config/db')
const excelFile = '../../PokemonGo.xlsx'
const { convertToJson } = require('../convertToJson')
const app = express()
// // connect to db
// require('../../db').db(MONGOURI)

// convert file to json
// let jsonData = convertToJson(excelFile).result

// // import data to db
// importData(jsonData)

// routes
const routes = require('./routes')

// middlewares
app.use('/api', routes.pokemonRoutes)

module.exports = app