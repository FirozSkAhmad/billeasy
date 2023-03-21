const { Employee } = require('../models/employeModel')

async function createEmploye(req, res) {
    const { name, department_id, joining_date } = req.body;

    const employee = await Employee.create({
        name,
        department_id,
        joining_date,
    });
    res.json({ employee })
}


module.exports = { createEmploye }