"use strict";

const sqlite3 = require('sqlite3').verbose();
const { readFileSync } = require("fs");
const db = new sqlite3.Database('db/squirrely_ducks.sqlite');

//get created order data from data folder
const order_data = JSON.parse(readFileSync("./data/json/orders.json"));
module.exports.build_order_table = () => {
    return new Promise((resolve, reject) => {
        db.run(`DROP TABLE IF EXISTS orders`);
        db.run(`CREATE TABLE IF NOT EXISTS orders 
        (order_id INTEGER PRIMARY KEY,
        customer_id INT,
        payment_type_id INT, 
        order_date TEXT, 
        completed INT,
        FOREIGN KEY (customer_id) REFERENCES customer (customer_id),
        FOREIGN KEY (payment_type_id) REFERENCES payment_type (type_id)) `,
            () => {
                resolve("done");
            });
    });
};

//insert data into table
module.exports.insert_order_data = () => {
    return new Promise((resolve, reject) => {
        order_data.forEach(({ customer_id, payment_type_id, product_id, order_date, completed }) => {
            db.run(
                `INSERT INTO orders
        VALUES (${null}, 
          ${customer_id}, 
          ${payment_type_id}, 
          "${order_date}", 
          ${completed})`,
                () => {
                    resolve("done");
                }
            );
        });
    });
};



