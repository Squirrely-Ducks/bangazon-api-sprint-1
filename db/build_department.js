const sqlite3 = require('sqlite3').verbose();
const { readFileSync } = require("fs");

// get created computer data from data folder
const department_data = JSON.parse(readFileSync("./data/json/department.json"));

//build products table
const db = new sqlite3.Database("db/squirrely_ducks.sqlite");

// method to create tables for computer
module.exports.build_department_table = () => {
    return new Promise((resolve, reject) => {
        db.run(`DROP TABLE IF EXISTS department`);
        db.run(`CREATE TABLE IF NOT EXISTS department (
                dept_id INTEGER PRIMARY KEY, 
                dept_name TEXT, 
                budget INTEGER,
                supervisor_id INTEGER, 
                FOREIGN KEY (supervisor_id) REFERENCES employee(supervisor_id)    
        )`, () => {
                resolve();
            })
    })
};

// insert data into computer table
module.exports.insert_department = () => {
    return new Promise((resolve, reject) => {
        department_data.forEach(({ dept_name, budget, supervisor_id }) => {
            db.run(
            `INSERT INTO department 
            VALUES (
            ${null}, 
            "${dept_name}", 
            ${budget},
            ${supervisor_id} 
            )`, () => {
                    resolve()
                })
        });
    })
}