const { execute_prod_data } = require(`./product_data/build_product_data`);
const { execute_cust_data } = require(`./customer_data/build_customer_data`);
const { execute_train_data} = require('./training_data/build_training_programs');
const {execute_computer_data }= require('./computer_data/build_computer_data');
const {execute_department_data }= require('./department_data/build_department_data');


execute_prod_data();
execute_cust_data();
execute_train_data();
execute_computer_data();
execute_department_data();