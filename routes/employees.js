const { Router } = require('express');
const employeeRouter = Router();
const { get_employees, get_one_employee, add_employee, edit_employee } = require('../controllers/employee_ctrl');

employeeRouter.get('/employees', get_employees);
employeeRouter.get('/employees/:id', get_one_employee);
employeeRouter.post('/employees/new', add_employee);
employeeRouter.put('/employees/:id/edit', edit_employee);

module.exports = employeeRouter;