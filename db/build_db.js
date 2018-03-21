
const sqlite3 = require('sqlite3').verbose();
const { build_prod_table, insert_prod_data } = require('./build_products');
const { build_cust_table, insert_cust_data } = require('./build_customers');
const  { build_prod_type_table, insert_prod_type_data } = require('./build_product_type');
const  { build_employee_table, insert_employee_data} = require('./build_employee');

//instantiate database and call individual table create and populate data gsfunctions
  build_prod_table()
    .then(() => {
      return insert_prod_data();
    })
    .then(()=>{
      return build_cust_table();
    })
    .then(()=>{
      return insert_cust_data();
    })
    .then (() => {
      return build_prod_type_table();
    })
    .then(() => {
      return insert_prod_type_data();
    })
    .then(() => {
      return build_employee_table();
    })
    .then(() => {
      return insert_employee_data();
    });
