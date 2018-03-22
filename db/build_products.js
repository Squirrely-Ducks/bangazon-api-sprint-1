const sqlite3 = require('sqlite3').verbose();
const { readFileSync } = require("fs");

//get created products data from data folder
const prodData = JSON.parse(readFileSync("./data/products.json"));

//build products table

const db = new sqlite3.Database("squirrely_ducks.sqlite");

module.exports.build_prod_table = () => {
  return new Promise((resolve, reject) => {
    db.run(`DROP TABLE IF EXISTS product`);
    db.run(
      `CREATE TABLE IF NOT EXISTS product (
      prod_id INTEGER PRIMARY KEY,
      title TEXT,
      price TEXT,
      description TEXT,
      type_id INTEGER,
      seller_id INTEGER,
      FOREIGN KEY (type_id) REFERENCES prod_types(type_id)
      FOREIGN KEY (seller_id) REFERENCES customers(customer_id)
    )`, () => {
      resolve();
    });
  });
}

//insert data into table
module.exports.insert_prod_data = () => {
  return new Promise((resolve, reject) => {
    prodData.forEach(({ title, price, description, type_id, seller_id }) => {
      db.run(`INSERT INTO product VALUES (
          ${null},
          "${title}",
          "${price}",
          "${description}",
          ${type_id},
          ${seller_id}
        )`);
    });
    resolve();
  });
};

