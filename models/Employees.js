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
    })
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
    })
}