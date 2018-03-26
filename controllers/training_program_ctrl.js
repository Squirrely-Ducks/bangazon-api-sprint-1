const { get_all, get_all_employees, get_one, get_one_employees, get_employee_programs, new_training_program, update_training_program, delete_program } = require('../models/Training_Programs');

// GET ALL TRAINING PROGRAMS
module.exports.get_training_programs = (req, res, next) => {
    get_all()
        .then((programs) => {
            res.status(200).json(programs);
        })
        .catch((err) => next(err));
};

//GET ALL TRAINING PROGRAMS WITH LIST OF EMPLOYEES 
module.exports.get_training_employees = (req, res, next) => {
    get_all_employees()
        .then((employees) => {
            res.status(200).json(employees);
        })
        .catch((err) => next(err));
};

//GET ONE TRAINING PROGRAM
module.exports.get_one_training_program = (req, res, next) => {
    let id = req.params.id;
    get_one(id)
        .then((program) => {
            res.status(200).json(program);
        })
        .catch((err) => next(err));
};

//GET ONE TRAINING PROGRAM'S LIST OF EMPLOYEES
module.exports.get_one_training_employees = (req, res, next) => {
    let id = req.params.id;
    get_one_employees(id)
        .then((program) => {
            res.status(200).json(program);
        })
        .catch((err) => next(err));
};

//GET ONE EMPLOYEE'S LIST OF TRAINING PROGRAMS
module.exports.get_employee_programs_list = (req, res, next) => {
    let id = req.params.id;
    get_employee_programs(id)
        .then((program) => {
            res.status(200).json(program);
        })
        .catch((err) => next(err));
    };

//ADD TRAINING PROGRAM
module.exports.add_training_program = (req, res, next) => {
    new_training_program(req.body)
        .then((program) => {
            console.log('Program: ', program );
            res.status(200).json(program);
        }).catch((err) => next(err));
};

// EDIT TRAINING PROGRAM
module.exports.edit_training_program = (req, res, next) => {
    let id = req.params.id;
    let columns = Object.keys(req.body);
    let values = Object.values(req.body);
    update_training_program(id, columns, values)
    .then((program) => {
        res.status(200).json(program);
    })
    .catch((err) => next(err));
};

//DELETE TRAINING PROGRAM
module.exports.delete_training_program = ( req, res, next ) => {
    let id = req.params.id;
    delete_program(id)
    .then((program) => {
        res.status(200).json(program);
    });
};
