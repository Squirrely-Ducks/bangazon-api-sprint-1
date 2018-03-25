
const Department = require('../models/Departments');
const { update_employee } = require('../models/Employees');

module.exports.get_departments = (req, res, next) => {
    Department.get_all()
        .then((depts) => {
            res.status(200).json(depts);
        })
        .catch((err) => next(err));
}

module.exports.get_one_department = (req, res, next) => {
    let id = req.params.id;
    Department.get_one(id)
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
    Department.get_department_employees(id)
        .then((dept_emps) => {
            if (dept_emps) {
                res.status(200).json(dept_emps);
            } else {
                let err = new Error('404: department employees not found');
                next(err);
            }
        })
        .catch((err) => next(err));
}

module.exports.add_department = (req, res, next) => {
    Department.get_non_supervisor_employee()
        .then((emp) => {
            let sup_id = Object.values(emp);
            req.body.supervisor_id = sup_id;
            update_employee(sup_id, "is_supervisor", "1")
                .then((employee) => {
                    res.status(200).json(employee);
                }).catch((err) => next(err));

            Department.new_department(req.body)
                .then((department) => {
                    update_employee(sup_id, department_id, deparment)
                        .then((employee) => {
                            res.status(200).json(employee);
                        }).catch((err) => next(err));

                    res.status(200).json(department);
                }).catch((err) => next(err));

        }).catch((err) => next(err));
}

module.exports.edit_department = (req, res, next) => {
    let id = req.params.id;
    Department.update_department(id, Object.keys(req.body), Object.values(req.body))
        .then((dept) => {
            res.status(200).json(dept)
        }).catch((err) => next(err));
}
