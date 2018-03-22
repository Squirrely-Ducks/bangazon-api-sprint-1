
const sqlite3 = require('sqlite3').verbose();
const {build_train_table, insert_training_data } = require('./build_training');    
const { build_prod_table, insert_prod_data } = require('./build_products');
const { build_cust_table, insert_cust_data } = require('./build_customers');
const { build_computer_table, insert_computer } = require('./build_computer');
const { build_department_table, insert_department } = require('./build_department');

//instantiate database and call individual table create and populate data functions
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
    .then(()=>{
      return build_train_table();
    })
    .then(()=>{
      return insert_training_data();
    })
    .then(()=>{
      build_computer_table()
    })
    .then(() => {
    return insert_computer();
    })
   .then(() => {
    return build_department_table()

    })
    .then(() => {
    return insert_department();
    });
