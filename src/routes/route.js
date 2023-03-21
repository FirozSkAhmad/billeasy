const express = require('express')

const router = express.Router()
const { createEmploye,getData } = require('../controllers/employeController')
const { createDepartment} = require("../controllers/departmentController")


app.post('/employe', createEmploye)
app.post('/department',createDepartment)
app.get('/employee/:id',getData )

module.exports = router