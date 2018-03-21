const sqlite3 = require('sqlite3').verbose();
const { build_prod_table, insert_prod_data } = require('./build_products');

//instantiate database and call individual table create and populate data gsfunctions
const db = new sqlite3.Database("squirrely_ducks.sqlite", err => {
  build_prod_table()
    .then(() => {
      insert_prod_data();
    });
});