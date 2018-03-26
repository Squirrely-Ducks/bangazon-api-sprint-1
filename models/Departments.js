const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/squirrely_ducks.sqlite');

module.exports.get_all = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM department`,
            (err, dept) => {
                if (err) return reject(err);
                resolve(dept);
            });
    });

}

module.exports.get_one = (id) => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT dept_id, dept_name, budget, (employee.first_name || " "|| employee.last_name) as supervisor  
        FROM department
        JOIN employee on supervisor_id = emp_id 
        WHERE dept_id = "${id}"`,
            (err, dept) => {
                if (err) return reject(err);
                resolve(dept);
            });
    });
}
module.exports.get_department_employees = (id) => {
    return new Promise((resolve, reject) => {
        db.get(`SELECT dept_name, group_concat(employee.first_name || " "|| employee.last_name) as employees  
        FROM department
        JOIN employee on department_id = dept_id
        WHERE dept_id = "${id}" and supervisor_id != emp_id`,
            (err, dept) => {
                if (err) return reject(err);
                resolve(dept);
            });
    });
}

module.exports.new_department = ({ dept_name, budget, supervisor_id }) => {
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO department VALUES(
            null,
            "${dept_name}",
            ${budget},
            ${supervisor_id})`,
            function (err, dept) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(this.lastID);
            });
    });
}

module.exports.update_department = (id, column, value) => {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE department
            SET "${column}" = "${value}"
            WHERE dept_id=${id}`, function (err, rows) {
                resolve(this.changes);
            });
    });
}