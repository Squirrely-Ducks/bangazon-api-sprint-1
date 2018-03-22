const sqlite3 = require('sqlite3').verbose();
const { readFileSync } = require("fs");

// get created computer data from data folder
const computer_data = JSON.parse(readFileSync("./data/computer.json"));

//build products table
const db = new sqlite3.Database("db/squirrely_ducks.sqlite");

// method to create tables for computer
module.exports.build_computer_table = () => {
    return new Promise((resolve, reject) => {
        db.run(`DROP TABLE IF EXISTS computer`);
        db.run(`CREATE TABLE IF NOT EXISTS computer (
                computer_id INTEGER PRIMARY KEY, 
                purchase_date TEXT, 
                trash_date TEXT,
                employee_id INTEGER,
                FOREIGN KEY (employee_id) REFERENCES employee(employee_id)     
        )`, () => {
                resolve();
            })
    })
};

// insert data into computer table
module.exports.insert_computer = () => {
    return new Promise((resolve, reject) => {
        computer_data.forEach(({ purchase_date, trash_date, employee_id }) => {
            db.run(
                `INSERT INTO computer 
            VALUES (
            ${null}, 
            "${purchase_date}", 
            "${trash_date}",
            ${employee_id} 
            )`, () => {
                    resolve()
                })
        });
    })
}