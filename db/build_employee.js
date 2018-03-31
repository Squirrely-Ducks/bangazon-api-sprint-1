const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/squirrely_ducks.sqlite');
const { readFileSync } = require('fs');
const employee_data = JSON.parse(readFileSync('./data/json/employee.json'));

module.exports.build_employee_table = () => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run('DROP TABLE IF EXISTS employee')
            .run(`CREATE TABLE IF NOT EXISTS employee (
                employee_id INTEGER PRIMARY KEY,
                department_id INTEGER,
                first_name TEXT,
                last_name TEXT,
                job_title TEXT,
                FOREIGN KEY (department_id) REFERENCES department(dept_id)
            )`, (err) => {
                if (err) throw err;
                resolve();
            });        
        });
    });
};

module.exports.insert_employee_data = () => {
    return new Promise((resolve, reject) => {
        employee_data.forEach(( {department_id, first_name, last_name, job_title} ) => {
            db.run(`INSERT INTO employee VALUES (
                ${null},
                ${department_id},
                "${first_name}",
                "${last_name}",
                "${job_title}"
            )`, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    });
};

