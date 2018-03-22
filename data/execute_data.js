#!/usr/bin/env node
const { execute_prod_data } = require(`./product_data/build_product_data`);
const { execute_cust_data } = require(`./customer_data/build_customer_data`);
const { execute_train_data} = require('./training_data/build_training_programs');
const { execute_employee_data } = require(`./employee_data/build_employee_data`);
const { execute_prod_type_data } = require(`./product_type_data/build_product_type_data`);
const { execute_order_data} = require(`./order_data/build_order_data`);
const { execute_payment_type_data } = require(`./payment_data/build_payment_type_data`);



execute_prod_data();
execute_cust_data();
execute_employee_data();
execute_prod_type_data();
execute_train_data();

