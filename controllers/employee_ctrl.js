const Employee = require('../models/Employees');

module.exports.get_employees = ({ query: { supervisor } }, res, next) => {
    const getEmployees = supervisor ? "get_supervisors" : "get_all";
    Employee[getEmployees]()
        .then((employees) => {
            res.status(200).json(employees);
        })
        .catch((err) => next(err));
}

module.exports.get_one_employee = (req, res, next) => {
    let id = req.params.id;
    Employee.get_one(id)
        .then((employee) => {
            if (employee) {
                res.status(200).json(employee);
            } else {
                let err = new Error(`404: Employee id: ${id} not found`);
                next(err);
            }
        }).catch((err) => next(err));
};

module.exports.add_employee = (req, res, next) => {
    Employee.new_employee(req.body)
        .then((employee) => {
            res.status(200).json(employee);
        }).catch((err) => next(err));
}

module.exports.edit_employee = (req, res, next) => {
    let id = req.params.id;
    Employee.update_employeee(id, Object.keys(req.body), Object.values(req.body))
        .then((employee) => {
            res.status(200).json(employee);
        }).catch((err) => next(err));
}