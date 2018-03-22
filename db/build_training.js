const sqlite3 = require('sqlite3').verbose();
const { readFileSync } = require("fs");

//get created products data from data folder
const training_program = JSON.parse(readFileSync("./data/json/training_program.json"));
const db = new sqlite3.Database("db/squirrely_ducks.sqlite");
//build products table
module.exports.build_train_table = () => {
    return new Promise((resolve, reject) => {

            db.run(`DROP TABLE IF EXISTS training_program`);
            db.run(
                `CREATE TABLE IF NOT EXISTS training_program (
                training_id INTEGER PRIMARY KEY,
                name TEXT,
                start_date TEXT,
                end_date TEXT,
                capacity INTEGER
            )`, ()=>{
                resolve();
            });
    });
}

//insert data into table
module.exports.insert_training_data = () => {
    return new Promise((resolve, reject) => {
        training_program.forEach(({ name, start_date, end_date, capacity }) => {
            db.run(`INSERT INTO training_program VALUES (
            ${null},
            "${name}",
            "${start_date}",
            "${end_date}",
            ${capacity}
            )`, ()=>{
                resolve();
            });
        });
    });
};
