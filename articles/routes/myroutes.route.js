
const express = require('express')
const router = new express.Router()
const myController = require('../controllers/myControllers.controller')


router.get('', myController.test) 

module.exports = router