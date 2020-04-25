const router = require('express').Router()
const controllers = require('./controllers')

// immport pokemon data into db
router.get('/populate-database', controllers.importData)

// get a pokemon
router.get('/get/:id', controllers.getOne)

// create pokemon
router.post('/create', controllers.createOne)

// delete pokemon
router.delete('/delete/:id', controllers.deleteOne)

// pagination
router.get('/get/page/:page', controllers.index)

// update pokemon
router.post('/update/:id', controllers.update)
module.exports = router
