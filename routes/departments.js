const {Router} = require('express');
const departmentRouter = Router();
const {get_departments, get_one_department, get_employees, add_department, edit_department} = require('../controllers/department_ctrl');

departmentRouter.get('/departments', get_departments);
departmentRouter.get('/departments/:id', get_one_department);
departmentRouter.get('/departments/:id/employees', get_employees);
departmentRouter.post('/departments/new', add_department);
departmentRouter.put('/departments/:id/edit', edit_department);

module.exports = departmentRouter;