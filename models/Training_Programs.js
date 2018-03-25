
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

// GET ALL TRAINING PROGRAMS
module.exports.get_all = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * 
        FROM training_program`, 
        (err, programs) => {
            if (err) return reject(err);
            resolve(programs);
        });
    });
};

// GET ALL TRAINING PROGRAMS WITH LIST OF EMPLOYEES 
module.exports.get_all_employees = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT training_program.*, group_concat(employee.first_name || " " || employee.last_name, ", ") AS "employees"
        FROM employee_training
        JOIN employee
        ON employee.employee_id = employee_training.employee_id
        JOIN training_program
        ON training_program.training_id = employee_training.program_id
        GROUP BY training_program.training_id`, 
        (err, programs) => {
            if (err) return reject(err);
            resolve(programs);
        });
    });
};


// GET ONE TRAINING PROGRAM
module.exports.get_one = (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * 
        FROM training_program tp
        WHERE tp.training_id = ${id}`, 
        (err, programs) => {
            if (err) return reject(err);
            resolve(programs);
        });
    });
};

// GET ONE TRAINING PROGRAM'S LIST OF EMPLOYEES
module.exports.get_one_employees = (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT training_program.*, group_concat(employee.first_name || " " || employee.last_name, ", ") AS "employees"
        FROM employee_training
        JOIN employee
        ON employee.employee_id = employee_training.employee_id
        JOIN training_program
        ON training_program.training_id = employee_training.program_id
        WHERE training_program.training_id = ${id}`, 
        (err, program) => {
            if (err) return reject(err);
            resolve(program);
        });
    });
};

// GET ONE EMPLOYEE'S LIST OF TRAINING PROGRAMS
module.exports.get_employee_programs = (id) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT employee.first_name || " " || employee.last_name AS "employee", 
        group_concat(training_program.name, ", ") AS "training_programs"
        FROM employee_training
        JOIN employee
        ON employee.employee_id = employee_training.employee_id
        JOIN training_program
        ON training_program.training_id = employee_training.program_id
        WHERE employee.employee_id = ${id}`, 
        (err, program) => {
            if (err) return reject(err);
            if (program[0].employee === null) {
                resolve({"message": "This employee is not enrolled in any programs"});
            }
            resolve(program);
        });
    });
};

