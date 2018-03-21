const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bangazonCompany.sqlite');
const { readFileSync } = require("fs");
const prodData = JSON.parse(readFileSync("../data/products.json"));


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
    )`,
  () => {
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
  }
);
