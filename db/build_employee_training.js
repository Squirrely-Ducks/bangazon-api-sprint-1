const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/squirrely_ducks.sqlite');
const { readFileSync } = require('fs');
const employee_training_data = JSON.parse(readFileSync('./data/json/employee_training.json'));

module.exports.build_employee_training_table = () => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run('DROP TABLE IF EXISTS employee_training')
            .run(`CREATE TABLE IF NOT EXISTS employee_training (
                employee_id INTEGER,
                program_id INTEGER,
                FOREIGN KEY (employee_id) 
                    REFERENCES employee(employee_id)
                    ON DELETE CASCADE,
                FOREIGN KEY (program_id) 
                    REFERENCES training_program(training_id) 
                    ON DELETE CASCADE
            )`, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    });
};

module.exports.insert_employee_training_data = () => {
    return new Promise((resolve, reject) => {
        employee_training_data.forEach(({employee_id, program_id}) => {
            db.run(`INSERT INTO employee_training VALUES (
                ${employee_id},
                ${program_id}
            )`, (err) => {
                if (err) reject(err);
                resolve();
            });
        })
    });
};