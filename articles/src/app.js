const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app= express

const routes= require('../routes/myroutes.route')

app.use(myRoutes)
module.exports = app