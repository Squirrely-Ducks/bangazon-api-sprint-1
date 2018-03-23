const Employee = require('../models/Employees');

module.exports.get_employees = ({query: {supervisor}}, res, next) => {
    const getEmployees = supervisor ? "get_supervisors" : "get_all";
    Employee[getEmployees]()
        .then((employees) => {
            res.status(200).json(employees);
        })
        .catch((err) => next(err));
}

module.exports.get_one_employee = (req, res, next) => {
    let id = req.params.id;
    get_one(id)
        .then((employee) => {
            if (employee) {
                res.status(200).json(employee);
            } else {
                let err = new Error(`404: Employee id: ${id} not found`);
                next(err);
            }
        })

}