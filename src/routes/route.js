const express = require('express')

const router = express.Router()
const { createEmploye } = require('../controllers/employeController')
const { createDepartment} = require("../controllers/departmentController")


app.post('/employe', createEmploye)
app.post('/department',createDepartment)

module.exports = router