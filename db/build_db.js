
const sqlite3 = require('sqlite3').verbose();
const { build_prod_table, insert_prod_data } = require('./build_products');
const { build_cust_table, insert_cust_data } = require('./build_customers');

//instantiate database and call individual table create and populate data gsfunctions
  build_prod_table()
    .then(() => {
      return insert_prod_data();
    })
    .then(()=>{
      build_cust_table();
    })
    .then(()=>{
      return insert_cust_data();
    });
