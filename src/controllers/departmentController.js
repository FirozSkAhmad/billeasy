const {Department} = require('../models/departmentModel')

async function createDepartment(req, res) {
    const { department_name } = req.body;

    const employee = await Department.create({
        department_name,
    });
    res.json({ employee })
}

module.exports ={createDepartment}