const { get_all, get_one, get_department_employees, new_department } = require('../models/Departments');

module.exports.get_departments = (req, res, next) => {
    get_all()
        .then((depts) => {
            res.status(200).json(depts);
        })
        .catch((err) => next(err));
}

module.exports.get_one_department = (req, res, next) => {
    let id = req.params.id;
    get_one(id)
        .then((dept) => {
            if (dept) {
                res.status(200).json(dept);
            } else {
                let err = new Error('404: department not found');
            }
        })
        .catch((err) => next(err));
}

module.exports.get_employees = (req, res, next) => {
    let id = req.params.id;
    get_department_employees(id)
        .then((dept_emps) => {
            if (dept_emps) {
                res.status(200).json(dept_emps);
            } else {
                let err = new Error('404: department employees not found');
            }
        })
        .catch((err) => next(err));
}
module.exports.add_department = (req,res,next) =>{
    
}