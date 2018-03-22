"use strict";

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("db/squirrely_ducks.sqlite");
const { readFileSync } = require("fs");

//get created payment type data from data folder
const payment_type_data = JSON.parse(readFileSync("./data/payment_type.json"));
module.exports.build_payment_type_table = () => {
  return new Promise((resolve, reject) => {
    db.run(`DROP TABLE IF EXISTS payment_type`);
    db.run(`CREATE TABLE IF NOT EXISTS payment_type 
      (payment_type_id INTEGER PRIMARY KEY,
      customer_id INT,
      type INT,
      account_number INT
      FOREIGN KEY (customer_id) REFERENCES customers (customer_id))`
      ,()=>{
        resolve();
      });
  });  
};


//insert data into table
module.exports.insert_payment_type_data = () => {
  return new Promise((resolve, reject) => {
    payment_type_data.forEach(({customer_id, type, account_number})=>{
        db.run( `INSERT INTO payment_type
          VALUES (${null},
            ${customer_id}, 
            ${type}, 
            ${account_number})`,
            ()=>{
              resolve();
            });
    });
  });
};


