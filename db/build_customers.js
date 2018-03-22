const sqlite3 = require('sqlite3').verbose();
const { readFileSync } = require("fs");

//get created customers data from data folder
const custData = JSON.parse(readFileSync("./data/customers.json"));

//build customers table

const db = new sqlite3.Database("db/squirrely_ducks.sqlite");

module.exports.build_cust_table = () => {
  return new Promise((resolve, reject) => {
    db.run(`DROP TABLE IF EXISTS customer`);
    db.run(
      `CREATE TABLE IF NOT EXISTS customer (
      cust_id INTEGER PRIMARY KEY,
      first_name TEXT,
      last_name TEXT,
      street TEXT,
      city TEXT,
      state TEXT,
      zip TEXT,
      phone INT,
      email TEXT,
      acct_date TEXT
      active INT
    )`, () => {
        resolve();
      });
  });
}

//insert data into table
module.exports.insert_cust_data = () => {
  return new Promise((resolve, reject) => {
    custData.forEach(({ first_name, last_name, street, city, state, zip, phone, email, acct_date, active }) => {
      db.run(`INSERT INTO customer VALUES (
        ${null},
        "${first_name}",   
        "${last_name}",
        "${street}",
        "${city}",
        "${state}",
        "${zip}",
        "${email}",
        "${acct_date}",
        "${active}"
        )`);
    });
    resolve();
  });
};

