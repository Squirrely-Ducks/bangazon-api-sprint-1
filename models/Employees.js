const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

module.exports.get_all = () => {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM employee`,
            (err, emp) => {
                if (err) return reject(err);
                resolve(emp)
            });
    });
};

module.exports.get_one = (id) => {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT employee.*, group_concat(department.dept_name, ", ") department_name
            FROM employee
            JOIN department ON dept_id = department_id
            WHERE employee_id = "${id}"`,
            (err, emp) => {
                if (err) return reject(err);
                resolve(emp);
            });
    });
}

module.exports.get_supervisors = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT (first_name || " "|| last_name) as name, job_title,  department.dept_name department_name
        FROM employee
        JOIN department ON dept_id = department_id
        WHERE employee.is_supervisor = 1`,
            (err, emp) => {
                if (err) return reject(err);
                resolve(emp);
            });
    });
}


module.exports.new_employee = ({ department_id, first_name, last_name, job_title }) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO employee VALUES (
            null,
            ${department_id},
            "${first_name}",
            "${last_name}",
            "${job_title}"`, function (err, emp) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(this.lastID);
            });
    });
}

module.exports.update_employee = (id,  column, value ) => {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE employee
            SET "${column}" = "${value}"
            WHERE emp_id=${id}`, function (err, rows) {
                resolve(this.changes);
            });
    });
}

