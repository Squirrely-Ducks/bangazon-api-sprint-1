const { Router } = require('express');
const employeeRouter = Router();
const { get_employees, get_one_employee } = require('../controllers/employee_ctrl');

employeeRouter.get('/employees', get_employees);
employeeRouter.get('/employees/:id', get_one_employee);

module.exports = employeeRouter;