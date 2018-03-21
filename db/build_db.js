const sqlite3 = require('sqlite3').verbose();
const { build_prod_table, insert_prod_data } = require('./build_products');


//instantiate database and call individual table create and populate data gsfunctions
  build_prod_table()
    .then(() => {
      insert_prod_data();
    });
